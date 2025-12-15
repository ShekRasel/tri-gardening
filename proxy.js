// proxy
import { verifyRefreshToken } from "@/helpers/jwt";
import { NextResponse } from "next/server";

export function proxy(request) {
  const { pathname } = request.nextUrl;
  const refreshToken = request.cookies.get("refreshToken")?.value;
  let role;

  try {
    const decoded = verifyRefreshToken(refreshToken);
    role = decoded.role;
  } catch {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (pathname.startsWith("/customer") || pathname.startsWith("/admin")) {
    if (!refreshToken) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if (pathname.startsWith("/customer") && role !== "customer") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (pathname.startsWith("/admin" && role !== "admin")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/customer/:path*", "/admin/:path*"],
};
