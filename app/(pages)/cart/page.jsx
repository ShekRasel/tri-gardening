"use client";
import React from "react";
import { useCartStore } from "../../zustand-store/cart.store";
import Link from "next/link";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const CartPage = () => {
  const { items, removeCart, updateQuantity, getTotalItems, getTotalPrice } =
    useCartStore();

  const deliveryCharge = 100;

  const handleQuantityChange = (id, change) => {
    const item = items.find((item) => item.id === id);
    if (item) {
      const newQuantity = item.quantity + change;
      if (newQuantity > 0) {
        updateQuantity(id, newQuantity);
      } else {
        removeCart(id);
      }
    }
  };

  return (
    <div className="min-h-screen mt-14 bg-light-white py-10 responsive">
      <h1 className="text-xl md:text-2xl font-semi-bold text-primary">
        Your Shopping Cart
      </h1>
      <span>
        <Link
          href={"/products"}
          className="text-gray flex gap-3 items-center mt-1"
        >
          <FaLongArrowAltLeft size={18} className="text-light-green" />{" "}
          <span>Back to product page</span>
        </Link>
      </span>
      <p className="text-primary font-semibold text-sm mt-5">
        {getTotalItems()} Items
      </p>

      {/* all items */}
      {items.length === 0 ? (
        <div className="bg-white w-full rounded-md shadow py-10 space-y-4 mt-2">
          <h1 className="text-xl md:text-2xl text-center text-primary font-semibold">
            No Products Added Yet !
          </h1>
          <div className="flex justify-center">
            <Link
              href={"/products"}
              className="bg-light-green text-white px-6 py-2  shadow rounded-md cursor-pointer"
            >
              Shop Now
            </Link>
          </div>
        </div>
      ) : (
        <div className="mt-2 flex flex-col lg:flex-row gap-4 xl:gap-8">
          <div className="bg-white w-full rounded-md shadow">
            {items.map((item) => (
              <div className="flex justify-between shadow p-4" key={item.id}>
                <div className="flex gap-3 md:gap-4">
                  <Image
                    src={item.image}
                    height={32}
                    width={72}
                    alt="items-image"
                    className="rounded-md h-18 shadow object-cover"
                  />
                  <div className="text-xs md:text-sm text-primary">
                    <h3 className="font-semibold">{item.name}</h3>
                    <h3 className="text-black">{item.tag}</h3>
                    <h3 className="text-orange font-semibold">
                      ৳ {item.price}
                    </h3>
                  </div>
                </div>

                {/* quantity handle */}
                <div className="">
                  <h1 className="text-black ml-7 md:ml-5 text-xs md:text-sm pb-1 md:p-0">
                    Quantity
                  </h1>
                  <div className="flex flex-col md:flex-row gap-1 md:gap-10 text-sm items-center mt-0.5">
                    <div className="border border-gray px-4 py-1 rounded-md flex gap-5 items-center">
                      <span
                        className="cursor-pointer"
                        onClick={() => handleQuantityChange(item.id, -1)}
                      >
                        <AiOutlineMinus />
                      </span>
                      <span>{item.quantity}</span>
                      <span
                        className="cursor-pointer"
                        onClick={() => handleQuantityChange(item.id, 1)}
                      >
                        <AiOutlinePlus />
                      </span>
                    </div>
                    <h1 className="text-orange font-semibold">
                      ৳ {item.price * item.quantity}
                    </h1>
                    <span
                      className="cursor-pointer"
                      onClick={() => removeCart(item.id)}
                    >
                      <RxCross2 size={23} className="text-red-500" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="min-w-72 py-4 bg-white shadow rounded-md text-sm">
            <h1 className="text-xl md:text-2xl text-primary px-4">
              Order Summary
            </h1>
            <div className="text-sm  pb-4 mt-2 border-b border-light-white px-4 flex justify-between">
              <span>Sub Total</span>{" "}
              <span className="text-orange font-semibold">
                ৳ {getTotalPrice()}
              </span>
            </div>
            <div className="text-sm  pb-4 mt-4 border-b border-light-white px-4 flex justify-between">
              <span>Delivery Charge</span>{" "}
              <span className="text-orange font-semibold">
                ৳ {deliveryCharge}
              </span>
            </div>

            <div className="pb-6 border-b border-gray px-4 pt-2">
              <h1>Coupon Code</h1>
              <div className="flex pt-2 gap-2 lg:justify-between">
                <input
                  type="text"
                  placeholder="Enter Code"
                  className="border border-gray rounded-md px-5 py-2 w-44"
                />
                <button className="bg-primary rounded-md text-sm text-white font-semibold px-4 py-2">
                  Apply
                </button>
              </div>
            </div>

            <div className="p-4">
              <div className="text-sm  pb-2 mt-2 flex justify-between">
                <span className="text-black font-semibold text-base">
                  Total
                </span>{" "}
                <span className="text-orange  font-semibold text-base">
                  ৳ {getTotalPrice() + deliveryCharge}
                </span>
              </div>
              <div className="flex justify-center">
                <button className="bg-primary rounded-md  text-white font-semibold px-5 py-2 lg:w-full cursor-pointer">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
