import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col p-4 items-center justify-center h-screen text-center bg-gray-50">
      <h1 className="text-6xl lg:text-9xl font-extrabold text-themeText">
        404
      </h1>
      <p className="text-2xl font-semibold mt-4 text-gray-800">
        Oops! Page not found
      </p>
      <p className="text-gray-500 mt-2">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        href="/"
        className="text-primary font-semibold mt-6 px-6 py-3 bg-brand hover:bg-brandHover font-medium rounded-lg transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
