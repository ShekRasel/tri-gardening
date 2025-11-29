import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

const BlogSearch = () => {
  return (
    <div className="bg-white rounded-md shadow p-4 py-6">
      <h1 className="text-lg  lg:text-xl font-semibold text-black">
        Search Blog
      </h1>
      <div className="flex items-center px-3 border border-light-gray rounded-md py-1 mt-4 justify-between">
        <input
          type="text"
          className="rounded-lg outline-none"
          placeholder="Search articles..."
        />
        <HiMagnifyingGlass />
      </div>
    </div>
  );
};

export default BlogSearch;
