"use client";

import FilterProduct from "@/app/(root)/_components/filter.product";

const FilterSlider = ({ OpenFilter, categories, filter }) => {
  return (
    <div
      className={`absolute md:hidden left-0 transition-all ease-in-out duration-500 ${
        filter ? "opacity-100 scale-100" : "opacity-0 scale-0"
      }`}
    >
      <FilterProduct
        categories={categories}
        className="bg-[#F3F3F3]"
        OpenFilter={OpenFilter}
      />
    </div>
  );
};

export default FilterSlider;
