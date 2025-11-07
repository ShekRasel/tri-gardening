"use client";
import React, { useEffect, useState } from "react";
import { plants } from "../data/featured-product/data";
import ProductCard from "./cards/product.card";
import { MdOutlineNavigateNext, MdNavigateBefore } from "react-icons/md";

const FeaturedProduct = ({}) => {
  const maxCount = plants.length;
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
    <div className="bg-secondary relative">
      <div className="responsive py-8 space-y-6 lg:space-y-10">
        <h1 className="text-2xl lg:text-3xl font-semibold text-primary text-center">
          Featured Products
        </h1>

        <div className="flex overflow-hidden py-4">
          {plants.map((plant, id) => (
            <div
              key={id}
              className={`min-w-full px-8 lg:px-4 sm:min-w-[50%] lg:min-w-[25%] transition-all ease-out duration-500`}
              style={{ transform: `translateX(-${count * 100}%)` }}
            >
              <ProductCard
                image={plant.image}
                name={plant.name}
                tag={plant.tag}
                price={plant.price}
                rating={plant.rating}
              />
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

export default FeaturedProduct;
