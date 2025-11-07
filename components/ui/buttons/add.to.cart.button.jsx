import React from "react";

export const AddToCart = ({ children, className }) => {
  return (
    <button
      className={`${className} bg-primary text-white w-full rounded-lg text-base py-2 cursor-pointer`}
    >
      {children}
    </button>
  );
};
