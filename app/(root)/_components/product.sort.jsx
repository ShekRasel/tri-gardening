"use client";
import FilterSlider from "@/app/(root)/_components/filter.slider";
import { useFilterStore } from "@/app/zustand-store/filterStore";
import Button from "@/components/shared/buttons/button";
import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";

const SortProduct = ({ l1, l2, categories }) => {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const setSortBy = useFilterStore((s) => s.setSortBy);
  const sortBy = useFilterStore((s) => s.sortBy);
  const [filter, setIsOpenFilter] = useState(false);

  const sortOptions = [
    { value: "all", label: "All" },
    { value: "popular", label: "Popular" },
    { value: "non-popular", label: "Non-Popular" },
  ];

  const handleOpenFilter = () => {
    setIsOpenFilter(true);
  };

  return (
    <div className="w-full flex justify-between items-center sticky z-30 bg-white rounded-md p-4 top-20">
      <div>
        <h1 className="font-semibold lg:text-lg text-primary">All Products</h1>
        <p className="text-xs md:text-sm">
          Showing {l1} of ({l2}) products
        </p>
      </div>
      <div className="flex gap-2">
        <Button className="md:hidden py-2" callback={handleOpenFilter}>
          <FaFilter />
        </Button>

        <FilterSlider
          categories={categories}
          OpenFilter={setIsOpenFilter}
          filter={filter}
        />

        {/* Sort Dropdown */}
        <div className="relative sort-dropdown text-sm md:text-base">
          <button
            onClick={() => setIsSortOpen(!isSortOpen)}
            className="border border-gray-300 rounded-md px-2 md:px-4 py-2 flex items-center gap-2 justify-between hover:border-gray-600 transition-colors cursor-pointer"
          >
            <span>Sort By :</span>
            <svg
              className={`w-4 h-4 transition-transform ${
                isSortOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isSortOpen && (
            <div className="absolute top-full right-0 mt-1 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-40">
              {sortOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    setSortBy(option.value);
                    setIsSortOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors ${
                    sortBy === option.value
                      ? "bg-light-green text-white hover:bg-light-green/90"
                      : "text-gray-700"
                  } first:rounded-t-md last:rounded-b-md`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SortProduct;
