import Button from "@/components/shared/buttons/button";
import { connect_db } from "@/database/config/mongoose";
import { User } from "@/database/models/user/user.schema";
import { logout } from "@/global-server-actions/auth.action";
import { verifyRefreshToken } from "@/helpers/jwt";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const CustomerDashboard = async () => {
  const cookieStore = await cookies();
  const refreshToken = cookieStore.get("refreshToken")?.value;
  if (!refreshToken) {
    redirect("/login");
  }

  let decoded;
  try {
    decoded = verifyRefreshToken(refreshToken);
  } catch {
    redirect("/login");
  }

  await connect_db();
  const user = await User.findById(decoded.userId).select("role");

  if (!user || user.role !== "customer") {
    redirect("/unauthorized");
  }
  return (
    <div>
      CustomerDashboard
      <p>
        <button className="" onClick={logout}>
          Logout
        </button>
      </p>
    </div>
  );
};

export default CustomerDashboard;
