"use client";
import FilterProduct from "@/app/(root)/_components/filter.product";
import SortProduct from "@/app/(root)/_components/product.sort";
import { useFilterStore } from "@/app/zustand-store/filterStore";
import ProductCard from "@/components/root/cards/product.card";
import Button from "@/components/shared/buttons/button";
import React, { useMemo } from "react";

const ProductList = ({ products, categories }) => {
  const selectedCategories = useFilterStore((s) => s.selectedCategories);
  const priceRange = useFilterStore((s) => s.priceRange);
  const selectedSizes = useFilterStore((s) => s.selectedSizes);
  const resetFilters = useFilterStore((s) => s.resetFilters);
  const sortBy = useFilterStore((s) => s.sortBy);

  //filtering
  const filterProducts = useMemo(() => {
    let filtered = products;

    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) =>
        product.categories.some((cat) => selectedCategories.includes(cat._id))
      );
    }

    if (priceRange.length === 2) {
      const [minPrice, maxPrice] = priceRange;

      filtered = filtered.filter((product) =>
        product.variants.some((variant) => {
          if (!variant || typeof variant !== "object") return false;
          if (
            variant.price === null ||
            variant.price === undefined ||
            isNaN(variant.price)
          ) {
            return false;
          }

          return variant.price >= minPrice && variant.price <= maxPrice;
        })
      );
    }

    if (selectedSizes.length > 0) {
      filtered = filtered.filter((product) =>
        product.variants.some((variant) => {
          if (!variant || typeof variant !== "object") return false;
          if (!variant.label || variant.label.trim() === "") return false;
          const size = variant.label;
          return selectedSizes.includes(size.toLowerCase());
        })
      );
    }

    return filtered;
  }, [products, selectedCategories, priceRange, selectedSizes]);

  // Sort products
  const sortedAndFilteredProducts = useMemo(() => {
    switch (sortBy) {
      case "all":
        return filterProducts;
      case "popular":
        return filterProducts.filter((product) => product.popular === true);

      case "non-popular":
        return filterProducts.filter((product) => product.popular === false);

      default:
        break;
    }
    return filterProducts;
  }, [filterProducts, sortBy]);

  const l1 = products?.length;
  const l2 = sortedAndFilteredProducts?.length;

  return (
    <div className="flex responsive gap-8 lg:gap-10 py-4 md:py-8 bg-light-white">
      <div className="items-start hidden md:block">
        <FilterProduct
          className="sticky top-20 bg-white"
          categories={categories}
        />
      </div>
      <div className="w-full">
        <SortProduct l1={l1} l2={l2} categories={categories} />
        {sortedAndFilteredProducts && sortedAndFilteredProducts.length > 0 ? (
          <div>
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-6 pt-4">
              {sortedAndFilteredProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>

            {/* Load more button */}
            <div className="flex items-center justify-center mt-12">
              <Button className={"py-3 px-4 bg-primary"}>
                Load More Products
              </Button>
            </div>
          </div>
        ) : (
          /* Show message when no products found */
          <div className="flex items-center justify-center mt-12 py-12">
            <div className="text-center">
              <p className="text-gray-500 text-lg mb-4">
                No products found matching your filters.
              </p>
              <Button className="text-base py-2 px-4" callback={resetFilters}>
                Reset All Filters
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
