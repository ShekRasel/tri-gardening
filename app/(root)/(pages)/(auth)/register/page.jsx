import RegisterForm from "@/components/shared/form/register.form";
import { register } from "@/global-server-actions/auth.action";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RegisterPage = () => {
  return (
    <div>
      <Image src={"/images/login-background.png"} fill alt="bg-image" />
      <div className="w-full h-full absolute top-0 left-0 flex px-2">
        <div className="shadow-md border-3 border-primary rounded-xl md:min-w-2xl mx-auto my-auto">
          <div className="bg-primary py-4 md:py-8">
            <h1 className="text-white text-center text-xl md:text-2xl font-semibold">
              Register to your Account
            </h1>
            <p className="mt-2 text-white text-center">
              To see update on your orders
            </p>
          </div>
          <div className="p-3 md:p-6 lg:p-8 bg-light-green text-white">
            <RegisterForm />
          </div>
          <p className="text-right text-sm py-3 md:py-3 bg-primary text-white px-3 md:px-6 lg:px-8">
            Already have an account ?
            <Link href={"/login"} className="underline">
              {" "}
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
