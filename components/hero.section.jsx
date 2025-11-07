import Image from "next/image";
import React from "react";
import PrimaryButton from "./ui/buttons/primary.button";

const Hero = () => {
  return (
    <div className="relative h-[300px] md:h-[500px] 2xl:h-[650px] text-white mt-15 lg:mt-18">
      <Image
        src={"/images/hero-image.jpg"}
        fill
        alt="hero-image"
        priority
        className="object-"
      />
      <div className="absolute  left-8 top-1/2 -translate-y-1/2 md:left-10 2xl:left-44 space-y-4">
        <h1 className="text-2xl md:text-3xl 2xl:text-4xl font-semibold">
          Nurture Your Green Paradise
        </h1>
        <h2>Your slogan goes here</h2>
        <div className="flex gap-6">
          <PrimaryButton className="md:px-8 md:py-3">Shop Now</PrimaryButton>
          <PrimaryButton className="md:px-8 md:py-3">Call Now</PrimaryButton>
        </div>
      </div>

      {/* dotted div */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2 pb-6">
        <span className="w-2 h-2 bg-orange rounded-full"></span>
        <span className="w-2 h-2 bg-white rounded-full"></span>
        <span className="w-2 h-2 bg-white rounded-full"></span>
      </div>
    </div>
  );
};

export default Hero;
