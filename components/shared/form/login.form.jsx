"use client";
import Button from "@/components/shared/buttons/button";
import TextInput from "@/components/shared/input/text.input";
import { login } from "@/global-server-actions/auth.action";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const LoginForm = ({ next }) => {
  const { control, handleSubmit, reset } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const onSubmit = async (loginData) => {
    const { success, message, accessToken, redirectTo } = await login(
      loginData
    );
    if (success) {
      sessionStorage.setItem("accessToken", accessToken);
      reset();
      toast.success(message);
      router.push(redirectTo);
    } else {
      toast.error(message);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 gap-2 pb-2">
        <TextInput
          label={"Email"}
          type="email"
          name={"email"}
          placeholder={"Enter your email address"}
          className={"bg-white text-gray! py-2 px-4 focus:ring-2 ring-primary"}
          control={control}
          rules={"Email is required!"}
        />
        <div className="relative">
          <TextInput
            label={"Password"}
            type={showPassword ? "text" : "password"}
            name={"password"}
            placeholder={"Enter your password"}
            className={
              "bg-white text-gray! py-2 px-4 focus:ring-2 ring-primary"
            }
            control={control}
            rules={"Password is required!"}
          />

          <button
            type="button"
            className="text-black cursor-pointer absolute right-2 top-8.5 "
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <IoMdEye size={20} /> : <IoMdEyeOff size={20} />}
          </button>
        </div>
        <p
          className="text-xs underline text-right cursor-pointer"
          onClick={() => next(1)}
        >
          Forgot Passowrd?
        </p>
      </div>

      <div className="mt-6 md:mt-10 flex justify-center">
        <Button type="submit" className={"bg-primary py-2 px-18"}>
          Login
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
