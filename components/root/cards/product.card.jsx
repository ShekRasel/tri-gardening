"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import AddToCart from "@/components/root/ui/buttons/add.to.cart.button";

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const available = product.variants[0]?.stock > 0;
  const firstVariantPrice = product?.variants[0]?.price;
  const lastVariantPrice =
    product?.variants?.length > 1 && product.variants?.at(-1)?.price;
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
            src={
              product?.images[0] ||
              "/images/place-holder/Placeholder_view_vector.svg.png"
            }
            alt={product?.name}
            height={1000}
            width={1000}
            className="h-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="p-4 xl:p-6">
          <h2 className="text-sm md:text-base font-semibold text-primary">
            {product?.name}
          </h2>
          <h2 className="text-gray tracking-wide text-xs  md:text-sm">
            {product?.categories?.map((category) => (
              <span key={category._id}>{category.name}</span>
            ))}
          </h2>
          {product?.variants?.length > 0 && (
            <p className="text-orange text-lg md:text-xl font-bold mt-3">
              {firstVariantPrice && `৳ ${firstVariantPrice}`}

              {lastVariantPrice && ` - ৳ ${lastVariantPrice}`}
            </p>
          )}

          {!available && <h1 className="text-red-500">Out of Stock</h1>}

          <div className="text-sm text-primary mt-2 md:mt-4 font-semibold">
            ⭐⭐⭐⭐⭐ ({product?.rating})
          </div>
        </div>
      </div>

      <div className="p-4 xl:p-6">
        <AddToCart className="text-sm md:text-base" disabled={!available}>
          Add to Cart
        </AddToCart>
      </div>

      {/* detials showing buttons */}
      <div
        className={`w-full absolute bottom-0  h-full bg-white/70 transition-all ease-in-out duration-500 ${
          isHovered ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="px-6">
          <AddToCart
            className={"mt-16"}
            disabled={!available}
            product={product}
            selectedPrice={
              lastVariantPrice ? lastVariantPrice : firstVariantPrice
            }
          >
            Add to Cart
          </AddToCart>
        </div>
        <div>
          <Link
            href={`product-details/${product?._id}`}
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
