import Image from "next/image";
import React from "react";
import PrimaryButton from "./ui/static-buttons/primary.button";

const HeroSection = () => {
  return (
    <div className="relative h-[300px] md:h-[420px] 2xl:h-[530px] text-white">
      <Image
        src={"/images/about-hero-image.jpg"}
        fill
        alt="hero-image"
        priority
        className="object-cover"
      />

      {/* overlay for readability */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 px-4 text-center">
        {/* Title */}
        <h1 className="text-lg sm:text-xl md:text-3xl 2xl:text-4xl font-semibold">
          Your Trusted Partner in
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl 2xl:text-4xl font-semibold mt-1">
          Gardening
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base mt-3 leading-relaxed">
          Cultivating expertise, growing communities, and nurturing your{" "}
          <br className="hidden sm:block" />
          green dreams for over a decade
        </p>

        {/* Button */}
        <div className="flex items-center justify-center mt-6 md:mt-10">
          <PrimaryButton className="px-5 py-2 md:px-8 md:py-3 text-sm md:text-base">
            Meet Our Team
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
