import React from "react";

const Button = ({ children, type = "submit", className, callback }) => {
  return (
    <button
      type={type}
      className={`text-white text-sm bg-light-green px-2 py-1 rounded-md cursor-pointer ${className}`}
      onClick={() => callback && callback()}
    >
      {children}
    </button>
  );
};

export default Button;
