"use client";

import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { useFilterStore } from "@/app/zustand-store/filterStore";
import Button from "@/components/shared/buttons/button";

const FilterProduct = ({ className, OpenFilter, categories }) => {
  const {
    selectedCategories,
    selectedSizes,
    priceRange,
    toggleCategory,
    toggleSize,
    setPriceRange,
    resetFilters,
  } = useFilterStore();

  // Local state for slider to avoid too frequent updates
  const [localPrice, setLocalPrice] = useState(priceRange);

  const handlePriceChange = (e) => {
    const value = Number(e.target.value);
    setLocalPrice([0, value]);
  };

  const handlePriceCommit = () => {
    setPriceRange(localPrice);
  };

  return (
    <div
      className={`min-w-64 rounded-lg p-4 px-8 md:px-4 text-black shadow ${className}`}
    >
      <div className="flex justify-between">
        <h1 className="text-base lg:text-xl font-semibold text-black">
          Filter Products
        </h1>
        <RxCross2
          onClick={() => OpenFilter(false)}
          size={23}
          className="cursor-pointer text-primary md:hidden"
        />
      </div>

      {/* Category */}
      <div className="mt-4">
        <h2 className="font-semibold text-sm md:text-base">Category</h2>
        {categories?.map((category) => (
          <div
            key={category._id}
            className="flex items-center gap-2 mt-2 text-sm text-gray-600"
          >
            <input
              type="checkbox"
              checked={selectedCategories.includes(category._id)}
              onChange={() => toggleCategory(category._id)}
            />
            <h2>{category.name}</h2>
          </div>
        ))}
      </div>

      {/* Price Range */}
      <div className="mt-4">
        <h2 className="font-semibold text-sm md:text-base">Price Range</h2>
        <div className="flex items-center gap-2 mt-2 text-gray-600">
          <span className="text-sm">৳ {localPrice[0].toLocaleString()}</span>
          <input
            type="range"
            min={0}
            max={2000}
            value={localPrice[1]}
            onChange={handlePriceChange}
            onMouseUp={handlePriceCommit}
            onTouchEnd={handlePriceCommit}
            className="w-28 cursor-pointer accent-light-green"
          />
          <span className="text-sm">৳ {localPrice[1].toLocaleString()}+</span>
        </div>
      </div>

      {/* Size */}
      <div className="mt-4">
        <h2 className="font-semibold text-sm md:text-base">Size</h2>
        {["small", "medium", "large"].map((size) => (
          <div
            key={size}
            className="flex items-center gap-2 mt-2 text-sm text-gray-600"
          >
            <input
              type="checkbox"
              checked={selectedSizes.includes(size)}
              onChange={() => toggleSize(size)}
            />
            <h2>{size.charAt(0).toUpperCase() + size.slice(1)}</h2>
          </div>
        ))}
      </div>

      {/* Apply and Reset buttons */}
      <div className="flex items-center justify-center mt-8 pb-4 gap-3 w-full">
        <Button className="text-base py-2 px-4 w-full" callback={resetFilters}>
          Reset
        </Button>
      </div>
    </div>
  );
};

export default FilterProduct;
