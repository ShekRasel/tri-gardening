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
          <p
            className={` text-xs h-5 w-5 pt-0.5 bg-orange text-center rounded-full absolute -top-4 -right-2 ${className}`}
          >
            {getTotalItems()}
          </p>
        )}
        <PiShoppingCartSimpleFill className={`${className}`} size={23} />
      </Link>
    </div>
  );
};

export default CartBadge;
