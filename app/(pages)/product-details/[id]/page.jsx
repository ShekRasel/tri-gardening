"use client";

import React from "react";
import { useCartStore } from "../../../zustand-store/cart.store";

const ProductDetails = () => {
  const { items } = useCartStore();
  console.log(items);
  console.log("detials", items.length);
  return <div>ProductDetails</div>;
};

export default ProductDetails;
