"use client";

import { useCartStore } from "@/app/zustand-store/cart.store";
import Link from "next/link";
import { PiShoppingCartSimpleFill } from "react-icons/pi";

const CartBadge = ({ className }) => {
  const totalItems = useCartStore((s) => s.totalItems);

  return (
    <div className={className}>
      <Link href="/cart" className="relative">
        {totalItems > 0 && (
          <p className="text-xs h-5 w-5 pt-0.5 bg-orange text-center rounded-full absolute -top-4 -right-2">
            {totalItems}
          </p>
        )}
        <PiShoppingCartSimpleFill size={23} />
      </Link>
    </div>
  );
};

export default CartBadge;
