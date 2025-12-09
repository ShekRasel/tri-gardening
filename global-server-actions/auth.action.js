"use server";
import bcrypt from "bcryptjs";
import { connect_db } from "@/database/config/mongoose";
import { User } from "@/database/models/user/user.schema";

//login
export const login = async (loginData) => {
  await connect_db();
  const existUser = await User.findOne({ email: loginData.email });

  if (existUser) {
    const match = bcrypt.compareSync(loginData.password, existUser.password);
    if (match) {
      return {
        message: "Login Successfull.",
      };
    }
    return {
      message: "Password is incorrect.",
    };
  }

  return {
    message: "Invalid email.",
  };
};

//registration
export const register = async (regData) => {
  try {
    await connect_db();
    const existUser = await User.findOne({ email: regData.email });

    if (!existUser) {
      const salt = bcrypt.genSaltSync(10);
      const hashPassword = bcrypt.hashSync(regData.password, salt);
      const newUser = await User.create({ ...regData, password: hashPassword });
      return {
        message: "Registration Successfull.",
        data: JSON.parse(JSON.stringify(newUser)),
      };
    }

    if (existUser) {
      return {
        message: "User allready exist",
      };
    }
  } catch (error) {
    return {
      message: JSON.parse(JSON.stringify(error.message)),
    };
  }
};
