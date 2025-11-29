import Image from "next/image";
import React from "react";

const CategoryCard = ({ LogoLink, name, des, className }) => {
  return (
    <div
      className={`${className} py-7 px-5 lg:px-3 xl:px-6 bg-secondary rounded-xl space-y-2 xl:space-y-4 flex flex-col items-center shadow`}
    >
      <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center">
        <Image src={LogoLink} alt="logo" height={100} width={40} />
      </div>
      <h1 className="text-black text-center font-semibold">{name}</h1>
      <p className="text-center">{des}</p>
    </div>
  );
};

export default CategoryCard;
