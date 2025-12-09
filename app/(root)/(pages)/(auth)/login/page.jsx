import LoginForm from "@/components/shared/form/login.form";
import { login } from "@/global-server-actions/auth.action";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
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
          <div className="bg-primary py-4 md:py-8">
            <h1 className="text-white text-center text-xl md:text-2xl font-semibold">
              Login to your Account
            </h1>
            <p className="mt-2 text-white text-center">
              To see update on your orders
            </p>
          </div>
          <div className="p-3 md:p-6 lg:p-8 bg-light-green text-white">
            <LoginForm />
          </div>
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
