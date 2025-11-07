import Image from "next/image";
import React from "react";
import { FaCamera } from "react-icons/fa";

const PlantAnalysis = () => {
  return (
    <div className="responsive flex flex-col md:flex-row items-center md:justify-between py-10 space-y-5">
      <div className="md:w-3/5 space-y-4">
        <h1 className="text-2xl lg:text-3xl font-semibold text-primary text-center md:text-start">
          Plant Clinic Analysis
        </h1>
        <p className="text-black text-center md:text-start">
          Upload a photo of your plant and get instant AI-powered diagnosis with
          treatment recommendations from our experts
        </p>
        <button className="bg-light-green rounded-full px-4 py-2 flex gap-4 text-white items-center w-full md:w-auto justify-center">
          <FaCamera size={20} className="text-white" />
          <span> Diagnose Your Plant</span>
        </button>
      </div>

      <Image
        src={"/images/plant-analysis.jpg"}
        height={44}
        width={300}
        alt="analysis-image"
        className="rounded-xl h-96"
      />
    </div>
  );
};

export default PlantAnalysis;
