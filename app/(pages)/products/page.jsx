"use client";
import Link from "next/link";
import React, { useState, useMemo } from "react";
import ProductCard from "../../../components/cards/product.card";
import FilterProduct from "../../../components/filter.product";
import FilterSlider from "../../../components/slider/product.filter.slider";
import { products } from "../../../data/all-products/data";
import { useFilterStore } from "../../../app/zustand-store/filterStore";

const ProductsPage = () => {
  const categories = Object.keys(products);
  const allProducts = Object.values(products).flat();
  const [activeCategory, setActiveCategory] = useState("Home");
  const [visibleCount, setVisibleCount] = useState(8);
  const [isSortOpen, setIsSortOpen] = useState(false);

  // Get filter states from store
  const {
    selectedCategories,
    selectedSizes,
    selectedLight,
    priceRange,
    sortBy,
    setSortBy,
  } = useFilterStore();

  // Helper function to get numeric price from price string
  const getNumericPrice = (priceString) => {
    if (typeof priceString === "number") return priceString;

    // Handle price strings like "2000 - 3400" by taking the maximum price
    const prices = priceString
      .toString()
      .split("-")
      .map((p) => parseInt(p.trim().replace(/[^\d]/g, "")));
    return prices.length > 1 ? prices[1] : prices[0];
  };

  // Filter products based on active category and filters
  const filteredProducts = useMemo(() => {
    let filtered =
      activeCategory === "Home" ? allProducts : products[activeCategory] || [];

    // Apply category filter (using tag property)
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) =>
        selectedCategories.includes(product.tag)
      );
    }

    // Apply size filter (only for products that have size property)
    if (selectedSizes.length > 0) {
      filtered = filtered.filter(
        (product) => product.size && selectedSizes.includes(product.size)
      );
    }

    // Apply light requirement filter (only for products that have light property)
    if (selectedLight.length > 0) {
      filtered = filtered.filter(
        (product) => product.light && selectedLight.includes(product.light)
      );
    }

    // Apply price range filter
    if (priceRange[1] < 10000) {
      filtered = filtered.filter((product) => {
        const productPrice = getNumericPrice(product.price);
        return productPrice >= priceRange[0] && productPrice <= priceRange[1];
      });
    }

    return filtered;
  }, [
    activeCategory,
    allProducts,
    products,
    selectedCategories,
    selectedSizes,
    selectedLight,
    priceRange,
  ]);

  // Sort products based on selected sort option
  const sortedAndFilteredProducts = useMemo(() => {
    const sorted = [...filteredProducts];

    switch (sortBy) {
      case "popular":
        // Sort by rating (highest first)
        return sorted.sort((a, b) => b.rating - a.rating);

      case "price-low-high":
        // Sort by price (lowest first)
        return sorted.sort(
          (a, b) => getNumericPrice(a.price) - getNumericPrice(b.price)
        );

      case "price-high-low":
        // Sort by price (highest first)
        return sorted.sort(
          (a, b) => getNumericPrice(b.price) - getNumericPrice(a.price)
        );

      case "name-a-z":
        // Sort by name (A-Z)
        return sorted.sort((a, b) => a.name.localeCompare(b.name));

      case "name-z-a":
        // Sort by name (Z-A)
        return sorted.sort((a, b) => b.name.localeCompare(a.name));

      default:
        return sorted;
    }
  }, [filteredProducts, sortBy]);

  // Current products to show
  const visibleProducts = sortedAndFilteredProducts.slice(0, visibleCount);

  // Load more handler
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  // Sort options
  const sortOptions = [
    { value: "popular", label: "Popular" },
    { value: "price-low-high", label: "Price: Low to High" },
    { value: "price-high-low", label: "Price: High to Low" },
    { value: "name-a-z", label: "Name: A to Z" },
    { value: "name-z-a", label: "Name: Z to A" },
  ];

  // Get current sort label
  const currentSortLabel =
    sortOptions.find((option) => option.value === sortBy)?.label || "Popular";

  // Reset visible count when filters change
  React.useEffect(() => {
    setVisibleCount(8);
  }, [
    selectedCategories,
    selectedSizes,
    selectedLight,
    priceRange,
    activeCategory,
    sortBy,
  ]);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (isSortOpen && !event.target.closest(".sort-dropdown")) {
        setIsSortOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSortOpen]);

  return (
    <div className="bg-[#F3F3F3] min-h-screen border">
      {/* top filter bar */}
      <div className="responsive mt-24 shadow bg-white space-y-6 pt-4 pb-4 sticky top-15 z-40">
        {/* category buttons */}
        <div className="flex flex-wrap md:gap-8 gap-4">
          <button
            onClick={() => {
              setActiveCategory("Home");
              setVisibleCount(8);
            }}
            className={`cursor-pointer ${
              activeCategory === "Home" &&
              "font-semibold border-b-2 border-primary text-primary"
            }`}
          >
            Home
          </button>

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setVisibleCount(8);
              }}
              className={`cursor-pointer ${
                activeCategory === category &&
                "font-semibold border-b-2 border-primary text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* breadcrumb */}
        <div className="flex gap-4 items-center">
          <Link href={"/"} className="hover:underline">
            Home
          </Link>
          <span>&gt;</span>
          <h1>Products</h1>
          {activeCategory !== "Home" && (
            <>
              <span>&gt;</span>
              <h1 className="text-primary font-semibold">{activeCategory}</h1>
            </>
          )}
        </div>

        {/* for mobile slider */}
        <FilterSlider />
      </div>

      {/* main section */}
      <div className="flex flex-col md:flex-row gap-8 mt-8 responsive">
        {/* filter section */}
        <FilterProduct className="hidden md:block sticky top-48 bg-white" />

        <div className="pb-10 flex-1">
          {/* header with sort */}
          <div className="w-full flex justify-between items-center sticky top-58 md:top-48 z-30 bg-white rounded-md p-4">
            <div>
              <h1 className="font-semibold lg:text-lg text-primary">
                {activeCategory === "Home" ? "All Products" : activeCategory}
              </h1>
              <p className="text-xs md:text-sm">
                Showing ({visibleProducts.length}) of (
                {sortedAndFilteredProducts.length}) products
              </p>
            </div>

            {/* Sort Dropdown */}
            <div className="relative sort-dropdown">
              <button
                onClick={() => setIsSortOpen(!isSortOpen)}
                className="border border-gray-400 rounded-md px-4 py-2 flex items-center gap-2 min-w-40 justify-between hover:border-gray-600 transition-colors"
              >
                <span>Sort By: {currentSortLabel}</span>
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

          {/* products grid */}
          {visibleProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-6 mt-6">
                {visibleProducts.map((item) => (
                  <ProductCard
                    key={item.id}
                    image={item.image}
                    name={item.name}
                    tag={item.tag}
                    price={item.price}
                    rating={item.rating}
                  />
                ))}
              </div>

              {/* Load more button */}
              {visibleCount < sortedAndFilteredProducts.length && (
                <div className="flex items-center justify-center mt-12">
                  <button
                    onClick={handleLoadMore}
                    className="px-5 py-2 text-white rounded-md bg-light-green cursor-pointer hover:bg-light-green/90 transition-colors"
                  >
                    Load More Products
                  </button>
                </div>
              )}
            </>
          ) : (
            /* Show message when no products found */
            <div className="flex items-center justify-center mt-12 py-12">
              <div className="text-center">
                <p className="text-gray-500 text-lg mb-4">
                  No products found matching your filters.
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="px-4 py-2 border border-gray-400 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
