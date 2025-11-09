"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./cards/product.card";
import { MdOutlineNavigateNext, MdNavigateBefore } from "react-icons/md";
import { popularProducts } from "../data/popular-product/data";

const PopularProduct = () => {
  const maxCount = popularProducts.length;
  const [count, setCount] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) setCardsPerView(4);
      else if (window.innerWidth >= 640) setCardsPerView(6);
      else setCardsPerView(8);
    };
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const goRight = () => {
    if (count < maxCount - 1) {
      if (count === cardsPerView) {
        setCount(0);
      } else {
        setCount((prev) => prev + 1);
      }
    } else {
      setCount(0);
    }
  };

  const goLeft = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    } else {
      if (cardsPerView === 8) {
        setCount(maxCount - 1);
      } else {
        setCount(cardsPerView);
      }
    }
  };

  return (
    <div className="relative">
      <div className="responsive py-8 space-y-6">
        <h1 className="text-2xl lg:text-3xl font-semibold text-primary text-center">
          Popular Products
        </h1>

        <p className="text-center text-primary">
          Discover our most popular gardening essentials
        </p>

        <div className="flex overflow-hidden py-4">
          {popularProducts.map((plant, id) => (
            <div
              key={id}
              className={`min-w-full sm:min-w-[50%] lg:min-w-[25%] transition-all ease-out duration-500 px-8 lg:px-4`}
              style={{ transform: `translateX(-${count * 100}%)` }}
            >
              <ProductCard item={plant} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between px-1 2xl:px-20 w-full absolute top-1/2">
        <button
          className="border-primary rounded-full cursor-pointer border-2"
          onClick={goLeft}
        >
          <MdNavigateBefore size={32} className="text-primary" />
        </button>
        <button
          className="border-2 border-primary rounded-full cursor-pointer"
          onClick={goRight}
        >
          <MdOutlineNavigateNext size={32} className="text-primary" />
        </button>
      </div>
    </div>
  );
};

export default PopularProduct;
