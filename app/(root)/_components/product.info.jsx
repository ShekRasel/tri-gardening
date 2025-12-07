"use client";
import { useCartStore } from "@/app/zustand-store/cart.store";
import AddToCart from "@/components/root/ui/buttons/add.to.cart.button";
import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FiMinus, FiPlus } from "react-icons/fi";

const ProductInfo = ({ product }) => {
  const available = product.variants[0]?.stock > 0;
  const [price, setPrice] = useState(product.variants[0]?.price);
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="">
      <h1 className="text-lg md:text-xl font-semibold">{product.name}</h1>
      <div className="flex items-center gap-10">
        <span className="text-light-green">⭐⭐⭐⭐⭐ ({product.rating})</span>
        <div>
          {available ? (
            <p className="text-light-green flex gap-2 items-center">
              <span className="h-5 w-5 rounded-full bg-light-green inline-block" />
              <span>In Stock</span>
            </p>
          ) : (
            <p className="text-red-500 flex gap-2 items-center">
              <span className="h-5 w-5 rounded-full bg-red-500 inline-block" />
              <span>Out of Stock</span>
            </p>
          )}
        </div>
      </div>
      {/* size */}
      {product.variants.length > 0 && (
        <div className="flex gap-2 mt-6">
          {product.variants.map((variant, index) => (
            <div
              key={index}
              className={`border rounded-md  py-1.5 px-6 cursor-pointer ${
                price === variant.price
                  ? "border-light-green bg-lime-100"
                  : "border-light-gray"
              }`}
              onClick={() => setPrice(variant.price)}
            >
              <h3>{variant.label}</h3>
              <h3 className="text-light-green">৳ - {variant.price}</h3>
            </div>
          ))}
        </div>
      )}

      {/* price and add to cart */}
      <div className="mt-4 flex justify-between items-center">
        {/* price */}
        {price && (
          <h1 className="text-xl md:text-2xl text-orange font-semibold">
            {" "}
            ৳ - {price}
          </h1>
        )}

        {/* quantity and wishlist */}
        <div className="flex items-center gap-4 pb-4">
          <div className="flex flex-col items-center">
            <p className="text-primary">Quantity</p>
            <div className="border flex gap-3 items-center px-4 py-1.5 rounded-md border-light-gray">
              <button className="text-light-green cursor-pointer">
                <FiMinus
                  size={20}
                  onClick={() =>
                    setQuantity((prev) => (prev < 2 ? 1 : prev - 1))
                  }
                />
              </button>
              <p>{quantity}</p>
              <button
                className="text-light-green cursor-pointer"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                <FiPlus size={20} />
              </button>
            </div>
          </div>
          <button className="border border-light-gray rounded-md p-1.5 text-light-green mt-5 cursor-pointer">
            <FaHeart size={23} />
          </button>
        </div>
      </div>
      {/* add to cart */}
      <AddToCart
        className={"w-full"}
        product={product}
        selectedPrice={price}
        quantity={quantity}
        disabled={!available}
      >
        Add to Cart
      </AddToCart>
    </div>
  );
};

export default ProductInfo;
