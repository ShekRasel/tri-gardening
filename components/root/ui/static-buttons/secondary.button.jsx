import React from "react";

const SecondaryButton = ({ children, className }) => {
  return (
    <button
      className={`bg-primary text-white px-4 rounded-md cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
