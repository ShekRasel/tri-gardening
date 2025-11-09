"use client";

import Link from "next/link";
import React from "react";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { useCartStore } from "../app/zustand-store/cart.store";

const CartBadge = ({ className }) => {
  const { getTotalItems } = useCartStore();

  return (
    <div className={`${className}`}>
      <Link href="/cart" className="relative">
        {/* Only show badge if there’s at least one item */}
        {getTotalItems() > 0 && (
          <span
            className={` text-sm rounded-full absolute -top-4 right-0 ${className}`}
          >
            {getTotalItems()}
          </span>
        )}
        <PiShoppingCartSimpleFill className={`${className}`} size={23} />
      </Link>
    </div>
  );
};

export default CartBadge;
