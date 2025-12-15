"use client";
import LoginForm from "@/components/shared/form/login.form";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";
import Button from "@/components/shared/buttons/button";

const LoginPage = () => {
  const [fotGotStep, setForgotStep] = useState(0);
  const handleSendCode = () => {
    setForgotStep(2);
  };
  return (
    <div className="w-full h-full">
      <Image
        src={"/images/login-background.png"}
        fill
        alt="bg-image"
        className="w-full h-full object-cover"
      />
      <div className="w-full h-full absolute top-0 left-0 flex px-2">
        <div className="shadow-md border-3 border-primary rounded-md  mx-auto my-auto min-w-[340px] md:min-w-[500px]">
          {fotGotStep === 1 ? (
            <div className="bg-white text-sm min-h-48 py-8">
              <div className=" flex flex-col items-center gap-2">
                <p className="text-center">Enter your phone number or email</p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    className="border py-2 px-3 rounded-md min-w-58 outline-none focus:ring-1 ring-primary"
                  />
                  <Button className="px-4" callback={handleSendCode}>
                    <FaLocationArrow />
                  </Button>
                </div>
              </div>
              <p
                className="flex items-center justify-center gap-2 text-primary py-4 cursor-pointer"
                onClick={() => setForgotStep(0)}
              >
                <FaArrowLeftLong size={18} />{" "}
                <span className="font-semibold">Back to Login</span>
              </p>
            </div>
          ) : fotGotStep === 2 ? (
            <p>hello</p>
          ) : (
            <div>
              <div className="bg-primary py-4 md:py-8">
                <h1 className="text-white text-center text-xl md:text-2xl font-semibold">
                  Login to your Account
                </h1>
                <p className="mt-2 text-white text-center">
                  To see update on your orders
                </p>
              </div>
              <div className="p-3 md:p-6 lg:p-8 bg-light-green text-white">
                <LoginForm next={setForgotStep} />
              </div>
            </div>
          )}

          <p className="text-right text-sm py-3 md:py-3 bg-primary text-white px-3 md:px-6 lg:px-8">
            Don&apos;t have an account?
            <Link href={"/register"} className="underline">
              {" "}
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
