"use client";

import Link from "next/link";
import React from "react";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { useCartStore } from "../app/zustand-store/cart.store";

const CartBadge = () => {
  const { getTotalItems } = useCartStore();

  return (
    <div>
      <Link href="/cart" className="relative">
        {/* Only show badge if there’s at least one item */}
        {getTotalItems() > 0 && (
          <span className="text-white text-sm rounded-full absolute -top-4 right-0">
            {getTotalItems()}
          </span>
        )}
        <PiShoppingCartSimpleFill className="text-white" size={23} />
      </Link>
    </div>
  );
};

export default CartBadge;
