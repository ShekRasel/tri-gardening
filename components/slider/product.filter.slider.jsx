"use client";

import React, { useState } from "react";
import FilterProduct from "../filter.product";
import { FaFilter } from "react-icons/fa";

const FilterSlider = () => {
  const [openSlidePanel, setIsOpenSlidePanel] = useState(false);

  return (
    <div className="relative">
      <div className="flex items-center justify-center sticky md:hidden">
        <button
          className="px-5 py-2 text-white rounded-md bg-light-green flex items-center gap-2 cursor-pointer"
          onClick={() => setIsOpenSlidePanel(!openSlidePanel)}
        >
          <span> Filter Now</span>
          <FaFilter size={14} className="text-white" />
        </button>
      </div>

      <div
        className={`w-full absolute left-0 z-50 responsive ease-in-out duration-500 transform transition-all -top-3 ${
          openSlidePanel ? "-translate-x" : "-translate-x-full"
        }`}
      >
        <FilterProduct
          className="bg-[#F3F3F3]"
          setIsOpenSlidePanel={setIsOpenSlidePanel}
        />
      </div>
    </div>
  );
};

export default FilterSlider;
