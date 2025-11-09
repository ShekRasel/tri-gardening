import React from "react";
import { useCartStore } from "../../../app/zustand-store/cart.store";

export const AddToCart = ({ children, className, item }) => {
  const addCart = useCartStore((state) => state.addCart);

  const handleAddToCart = () => {
    const cartItem = {
      ...item,
      quantity: 1,
    };
    addCart(cartItem);
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
