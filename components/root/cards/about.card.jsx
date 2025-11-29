import Image from "next/image";
import React from "react";

const AboutCard = ({ imageLink, name, des, designation, className }) => {
  return (
    <div
      className={`${className} py-4 px-6 xl:px-6 bg-secondary rounded-xl space-y-2 xl:space-y-4 flex flex-col items-center shadow`}
    >
      <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center">
        <Image
          src={imageLink}
          alt="profile"
          height={100}
          width={40}
          className="rounded-full w-full h-full object-cover"
        />
      </div>
      <h1 className="text-black text-center font-semibold">{name}</h1>
      <h1 className="text-sm text-light-green">{designation}</h1>
      <p className="text-sm text-justify">{des}</p>
    </div>
  );
};

export default AboutCard;
