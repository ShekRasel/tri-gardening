"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { IoCall } from "react-icons/io5";
import CartBadge from "./cart.badge";

const SlidePanel = ({ links }) => {
  const [openSlidePanel, setIsOpenSlidePanel] = useState(false);

  const closeSlidePanel = () => {
    setIsOpenSlidePanel(false);
  };

  return (
    <div>
      <HiMiniBars3BottomLeft
        className="text-white cursor-pointer"
        size={23}
        onClick={() => setIsOpenSlidePanel(!openSlidePanel)}
      />

      {/* mobile views */}

      <div
        className={`bg-secondary w-full min-h-screen  absolute top-0 left-0 responsive py-3 ease-in-out duration-500 transform transition-all 
             ${openSlidePanel ? "translate-x" : "-translate-x-full"}`}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image src={"/logos/logo.png"} alt="logo" width={48} height={42} />
            <h2 className="font-semibold text-primary tracking-wider hidden sm:block">
              TriGardening
            </h2>
          </div>

          {/* close slide panel */}
          <RxCross2
            onClick={() => setIsOpenSlidePanel(false)}
            size={23}
            className="cursor-pointer text-primary"
          />
        </div>

        <div className="w-full flex justify-center mt-4">
          <div className="flex flex-col gap-4 text-primary">
            {links.map((link, id) => (
              <Link
                href={link.path}
                key={id}
                onClick={closeSlidePanel}
                className="hover:font-bold"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/*  */}
        <div className="flex justify-center gap-8 items-center mt-4">
          <button className="bg-orange rounded-md px-3 py-1.5 text-white flex items-center gap-2 cursor-pointer">
            <IoCall />
            <span>Call Now</span>
          </button>

          {/* cart badge */}
          <div onClick={closeSlidePanel}>
            <CartBadge className="text-primary" />
          </div>

          {/* user profile/dashboard */}
          <Link href={"/dashboard"} onClick={closeSlidePanel}>
            <CgProfile className="text-primary" size={23} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SlidePanel;
