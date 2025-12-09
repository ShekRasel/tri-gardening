"use client";

import Button from "@/components/shared/buttons/button";
import TextInput from "@/components/shared/input/text.input";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const RegisterForm = () => {
  const { control, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {};
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 gap-2 pb-2">
        <TextInput
          label={"First Name"}
          type="text"
          name={"firstName"}
          placeholder={"Enter your first name..."}
          className={
            "bg-white text-gray! py-2 focus:ring-2 ring-primary w-full"
          }
          control={control}
          rules={"FirstName is required!"}
        />
        <TextInput
          label={"Last Name"}
          type="text"
          name={"lastName"}
          placeholder={"Enter your last name..."}
          className={"bg-white text-gray! py-2 focus:ring-2 ring-primary"}
          control={control}
          rules={"LastName is required!"}
        />
        <TextInput
          label={"Email"}
          type="email"
          name={"email"}
          placeholder={"Enter your email address..."}
          className={"bg-white text-gray! py-2 px-4 focus:ring-2 ring-primary"}
          control={control}
          rules={"Email is required!"}
        />
        <TextInput
          label={"Phone Number"}
          type="text"
          name={"phoneNumber"}
          placeholder={"Enter your phone number..."}
          className={"bg-white text-gray! py-2 px-4 focus:ring-2 ring-primary"}
          control={control}
          rules={"PhoneNumber is required!"}
        />
      </div>
      <div className="relative">
        <TextInput
          label={"Password"}
          type={showPassword ? "text" : "password"}
          name={"password"}
          placeholder={"Enter your password"}
          className={"bg-white text-gray! py-2 px-4 focus:ring-2 ring-primary"}
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

      <div className="mt-6 md:mt-10 flex justify-center">
        <Button type="submit" className={"bg-primary py-2 px-18"}>
          Register
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
