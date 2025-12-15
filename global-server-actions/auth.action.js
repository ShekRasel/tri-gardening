"use server";
import bcrypt from "bcryptjs";
import { connect_db } from "@/database/config/mongoose";
import { User } from "@/database/models/user/user.schema";
import {
  createAccessToken,
  createRefreshToken,
  verifyRefreshToken,
} from "@/helpers/jwt";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

//login
export const login = async (loginData) => {
  await connect_db();

  const user = await User.findOne({ email: loginData.email });
  if (!user) {
    return {
      success: false,
      message: "Please Registration first. Email is unknown",
    };
  }

  const match = bcrypt.compareSync(loginData.password, user.password);
  if (!match) {
    return {
      success: false,
      message: "Password incorrect.",
    };
  }

  const accessToken = createAccessToken({
    userId: user._id.toString(),
    role: user.role,
  });

  const refreshToken = createRefreshToken({
    userId: user._id.toString(),
    role: user.role,
  });

  const cookieStore = await cookies();
  cookieStore.set({
    name: "refreshToken",
    value: refreshToken,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24,
  });

  return {
    success: true,
    message: "Login Successfull.",
    accessToken,
    redirectTo:
      user.role === "customer" ? "/customer/dashboard" : "/admin/dashboard",
  };
};

//registration
export const register = async (regData) => {
  try {
    await connect_db();

    const user = await User.findOne({
      $or: [{ email: regData.email }, { phoneNumber: regData.phoneNumber }],
    });

    if (!user) {
      const salt = bcrypt.genSaltSync(10);
      const hashPassword = bcrypt.hashSync(regData.password, salt);
      await User.create({ ...regData, password: hashPassword });
      return {
        success: true,
        message: "Registration Successfull.",
      };
    }

    if (user.email === regData.email) {
      return {
        success: false,
        message: "User allready exist, try different email.",
      };
    }

    if (user.phoneNumber === regData.phoneNumber) {
      return {
        success: false,
        message: "Number Already used",
      };
    }
  } catch (error) {
    return {
      success: false,
      message: "server error",
    };
  }
};

//refresh-Access-Token
export const refreshAccessToken = async () => {
  const refreshToken = cookies().get("refreshToken")?.value;

  if (!refreshToken) return null;

  try {
    const decoded = verifyRefreshToken(refreshToken);
    return createAccessToken({
      userId: decoded.userId,
    });
  } catch (error) {
    return null;
  }
};

//logout
export const logout = async () => {
  const cookieStore = await cookies();
  cookieStore.delete("refreshToken");
  redirect("/login");
};
