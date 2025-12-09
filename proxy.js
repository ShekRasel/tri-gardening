// middleware.js
import { NextResponse } from "next/server";

export function proxy(request) {
  const { pathname } = request.nextUrl;

  //   if (pathname.startsWith("/customer") || pathname.startsWith("/admin")) {
  //     return NextResponse.redirect(new URL("/login", request.url));
  //   }

  return NextResponse.next();
}

// export const config = {
//   matcher: ["/customer/:path*", "/admin/:path*"],
// };
