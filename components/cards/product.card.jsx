"use client";

import Image from "next/image";
import React, { useState } from "react";
import { AddToCart } from "../ui/buttons/add.to.cart.button";
import Link from "next/link";

const ProductCard = ({ image, name, tag, price, rating }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="bg-white rounded-2xl cursor-pointer overflow-hidden relative shadow"
      onMouseLeave={() => setIsHovered(false)}
      onMouseEnter={() => setIsHovered(true)}
    >
      <div>
        {/* Product Image */}
        <div className="h-44 md:h-56 w-full">
          <Image
            src={image}
            alt={name}
            height={1000}
            width={1000}
            className="h-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="p-4 xl:p-6">
          <h2 className="text-sm md:text-base font-semibold text-primary">
            {name}
          </h2>
          <h2 className="text-gray tracking-wide text-xs  md:text-sm">{tag}</h2>
          <p className="text-orange text-lg md:text-xl font-bold mt-3">
            ৳ {price}
          </p>
          <div className="text-sm text-primary mt-2 md:mt-4 font-semibold">
            ⭐⭐⭐⭐⭐ ({rating})
          </div>
        </div>
      </div>

      <div className="p-4 xl:p-6">
        <AddToCart className="text-sm md:text-base">Add to Cart</AddToCart>
      </div>

      {/* detials showing buttons */}
      <div
        className={`w-full absolute bottom-0  h-full bg-white/70 transition-all ease-in-out duration-500 ${
          isHovered ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="px-6">
          <AddToCart className={"mt-16"}>Add to Cart</AddToCart>
        </div>
        <div>
          <Link
            href={"/"}
            className="bg-light-green text-white w-full text-base py-4 xl:py-5 cursor-pointer bottom-0 text-center absolute font-semibold tracking-wider rounded-b-2xl"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
