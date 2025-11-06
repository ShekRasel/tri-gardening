import React from "react";

const PrimaryButton = ({ children, className }) => {
  return (
    <div
      className={`${className} text-white bg-orange rounded-full py-1.5 px-6 cursor-pointer`}
    >
      {children}
    </div>
  );
};

export default PrimaryButton;
