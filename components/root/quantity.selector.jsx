"use client";

import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const QuantitySelector = ({ item, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(item.quantity || 1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  const increaseQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  return (
    <div className="border border-gray px-4 py-1 rounded-md flex gap-5 items-center">
      <span className="cursor-pointer" onClick={decreaseQuantity}>
        <AiOutlineMinus />
      </span>
      <span>{quantity}</span>
      <span className="cursor-pointer" onClick={increaseQuantity}>
        <AiOutlinePlus />
      </span>
    </div>
  );
};

export default QuantitySelector;
