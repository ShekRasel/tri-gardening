"use client";

import React, { useState } from "react";
import Image from "next/image";
import { allProducts } from "../../../../helpers/helper";
import { AddToCart } from "../../../../components/ui/buttons/add.to.cart.button";
import QuantitySelector from "../../../../components/quantity.selector";
import { useParams } from "next/navigation";

const ProductDetails = () => {
  const data = useParams();
  const product = allProducts.find((item) => item.id.toString() === data.id);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  // Mock description since it's not in your current data
  const productDescription =
    "গোল্ডেন পাথোস (Golden Pothos / Epipremnum aureum) ঘর সাজানোর জন্য অন্যতম সেরা ও সহজে পরিচর্যা করা যায় এমন ইনডোর প্ল্যান্ট। এর হৃদয় আকৃতির ";

  // Mock "You may also like" products
  const recommendedProducts = [
    {
      id: 2,
      image: "/images/all-products/Snake Plant.avif",
      name: "Snake Plant",
      price: "1500 - 2800",
      tag: "Indoor Plant",
    },
    {
      id: 3,
      image: "/images/all-products/Lavender.avif",
      name: "Fiddle Leaf Fig",
      price: "3200 - 4500",
      tag: "Indoor Plant",
    },
    {
      id: 4,
      image: "/images/all-products/Bamboo plant.avif",
      name: "Golden Pothos",
      price: "800 - 1800",
      tag: "Climbing Plant",
    },
    {
      id: 5,
      image: "/images/all-products/Snake Plant.avif",
      name: "Snake Plant",
      price: "1500 - 2800",
      tag: "Indoor Plant",
    },
    {
      id: 6,
      image: "/images/all-products/Lavender.avif",
      name: "Fiddle Leaf Fig",
      price: "3200 - 4500",
      tag: "Decorative Plant",
    },
  ];

  const priceRange = product.price;
  const highestPrice = priceRange.includes("-")
    ? parseInt(priceRange.split("-")[1].trim())
    : parseInt(priceRange);

  const handleQuantityChange = (newQuantity) => {
    setSelectedQuantity(newQuantity);
  };

  // Create a product object with the selected quantity to pass to AddToCart
  const productWithQuantity = {
    ...product,
    quantity: selectedQuantity,
  };

  return (
    <div className="min-h-screen bg-light-white py-8 responsive mt-16 ">
      <div className="flex flex-col lg:flex-row gap-6 justify-evenly">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Product Image Section */}
          <div className="md:w-5/6">
            <div className="rounded-2xl">
              <div className="aspect-square relative rounded-xl overflow-hidden ">
                <Image
                  src={product.image}
                  fill
                  alt={product.name}
                  className="object-cover"
                  priority
                />
              </div>
              {/* Additional images can be added here */}
              <div className="grid grid-cols-3 gap-6 mt-4">
                <div className="aspect-square relative rounded-lg overflow-hidden">
                  <Image
                    src={product.image}
                    fill
                    alt={`${product.name} thumbnail 1`}
                    className="object-cover"
                  />
                </div>
                <div className="aspect-square relative rounded-lg overflow-hidden">
                  <Image
                    src={product.image}
                    fill
                    alt={`${product.name} thumbnail 2`}
                    className="object-cover"
                  />
                </div>
                <div className="aspect-square relative rounded-lg overflow-hidden">
                  <Image
                    src={product.image}
                    fill
                    alt={`${product.name} thumbnail 3`}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Section */}
          <div className="">
            <div className="rounded-2xl h-fit">
              {/* Product Name */}
              <h1 className="text-2xl font-bold text-black mb-2">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4 text-primary font-semibold">
                ⭐⭐⭐⭐⭐
                <span className="text-sm">({product.rating} reviews)</span>
              </div>

              {/* Tag */}
              <div className="mb-4">
                <span className="inline-block text-sm font-medium text-gray py-1 rounded-full">
                  {product.tag}
                </span>
              </div>

              {/* Size */}
              <div className="mb-6">
                {product.size && (
                  <div>
                    <h3 className="font-bold">Size</h3>
                    <span className="text-xs text-primary">
                      ({product.size})
                    </span>
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="mb-6">
                <p className="text-primary text-sm leading-relaxed">
                  {productDescription}
                </p>
              </div>

              {/* Price and Quantity */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xl font-bold text-orange">
                      ৳ {highestPrice}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-2 text-center">
                      Quantity
                    </h3>
                    <QuantitySelector
                      item={product}
                      onQuantityChange={handleQuantityChange}
                    />
                  </div>
                </div>
              </div>

              {/* Add to Cart Button */}
              <AddToCart className="w-full" item={productWithQuantity}>
                Add to Cart
              </AddToCart>
            </div>
          </div>
        </div>

        {/* You May Also Like Section */}
        <div className="max-w-52 md:hidden lg:block">
          <div className="bg-white rounded-2xl shadow p-4">
            <h2 className="text-md font-semibold text-black mb-2">
              You May Also Like
            </h2>
            <div className="space-y-2">
              {recommendedProducts.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 py-1 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors text-xs"
                >
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden">
                    <Image
                      src={item.image}
                      fill
                      alt={item.name}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0 space-y-1">
                    <h3 className="truncate font-semibold">{item.name}</h3>
                    <h3 className="font-medium truncate text-gray">
                      {item.tag}
                    </h3>

                    <p className="text-orange font-semibold">৳{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
