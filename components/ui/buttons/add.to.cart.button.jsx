import React from "react";
import { useCartStore } from "../../../app/zustand-store/cart.store";

export const AddToCart = ({ children, className, item }) => {
  const addCart = useCartStore((state) => state.addCart);

  const handleAddToCart = () => {
    const quantity = item.quantity || 1;

    const priceRange = item.price;
    const highestPrice = priceRange.includes("-")
      ? parseInt(priceRange.split("-")[1].trim())
      : parseInt(priceRange);

    const cartItem = {
      ...item,
      quantity: quantity,
      price: highestPrice,
    };

    addCart(cartItem, quantity);
  };

  return (
    <button
      className={`${className} bg-primary text-white w-full rounded-lg text-base py-2 cursor-pointer`}
      onClick={handleAddToCart}
    >
      {children}
    </button>
  );
};
