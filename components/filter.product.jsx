"use client";

import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { useFilterStore } from "../app/zustand-store/filterStore";

const FilterProduct = ({ className, setIsOpenSlidePanel }) => {
  const {
    selectedCategories,
    selectedSizes,
    selectedLight,
    priceRange,
    toggleCategory,
    toggleSize,
    toggleLight,
    setPriceRange,
    resetFilters,
  } = useFilterStore();

  // Local state for slider to avoid too frequent updates
  const [localPrice, setLocalPrice] = useState(priceRange);

  const handlePriceChange = (e) => {
    const value = Number(e.target.value);
    setLocalPrice([0, value]); // assuming min=0
  };

  const handlePriceCommit = () => {
    setPriceRange(localPrice);
  };

  return (
    <div
      className={`min-w-64 rounded-lg p-4 px-8 md:px-4 text-black h-[550px] shadow mt-2 ${className}`}
    >
      <div className="flex justify-between">
        <h1 className="text-base lg:text-xl font-semibold text-black">
          Filter Products
        </h1>
        <RxCross2
          onClick={() => setIsOpenSlidePanel(false)}
          size={23}
          className="cursor-pointer text-primary md:hidden"
        />
      </div>

      {/* Category */}
      <div className="mt-4">
        <h2 className="font-semibold text-sm md:text-base">Category</h2>
        {["Indoor Plant", "Outdoor Plant"].map((cat) => (
          <div
            key={cat}
            className="flex items-center gap-2 mt-2 text-sm text-gray-600"
          >
            <input
              type="checkbox"
              checked={selectedCategories.includes(cat)}
              onChange={() => toggleCategory(cat)}
            />
            <h2>{cat}</h2>
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
            max={10000}
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
        {["Small", "Medium", "Large"].map((size) => (
          <div
            key={size}
            className="flex items-center gap-2 mt-2 text-sm text-gray-600"
          >
            <input
              type="checkbox"
              checked={selectedSizes.includes(size)}
              onChange={() => toggleSize(size)}
            />
            <h2>{size}</h2>
          </div>
        ))}
      </div>

      {/* Light Requirement */}
      <div className="mt-4">
        <h2 className="font-semibold text-sm md:text-base">
          Light Requirements
        </h2>
        {["Low Light", "Medium Light", "Bright Light"].map((light) => (
          <div
            key={light}
            className="flex items-center gap-2 mt-2 text-sm text-gray-600"
          >
            <input
              type="checkbox"
              checked={selectedLight.includes(light)}
              onChange={() => toggleLight(light)}
            />
            <h2>{light}</h2>
          </div>
        ))}
      </div>

      {/* Apply and Reset buttons */}
      <div className="flex items-center justify-center mt-8 pb-4 gap-3 w-full">
        <button
          className="px-4 py-2 bg-light-green text-white rounded-md w-full"
          onClick={resetFilters}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default FilterProduct;
