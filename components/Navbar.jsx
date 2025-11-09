import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";
import { IoCall } from "react-icons/io5";
import SlidePanel from "./slide.panel";
import CartBadge from "./cart.bedge";

const Navbar = () => {
  const links = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Products",
      path: "/products",
    },
    {
      id: 3,
      name: "Blog",
      path: "/blog",
    },
    {
      id: 4,
      name: "Plant Clinic",
      path: "/plant-clinic",
    },
  ];

  return (
    <nav className="bg-primary fixed top-0 z-50 w-full flex items-center  justify-between py-2 lg:py-3 shadow-xl responsive">
      {/* =================== left side/logo section  ================== */}
      <Link href={"/"}>
        <div className="flex items-center">
          <Image src={"/logos/logo.png"} alt="logo" width={48} height={42} />
          <h2 className="font-semibold text-white tracking-wider hidden sm:block">
            TriGardening
          </h2>
        </div>
      </Link>

      {/* =================== middle/links ================== */}
      <div className="hidden lg:flex gap-4 xl:gap-10 text-white">
        {links.map((link, id) => (
          <Link href={link.path} key={id} className="hover:font-semibold">
            {link.name}
          </Link>
        ))}
      </div>

      {/* =================== right side ================== */}
      <div className="flex items-center gap-3 xl:gap-5 2xl:gap-7">
        {/* call button */}
        <button className="hidden bg-orange rounded-md px-3 py-1.5 text-white lg:flex items-center gap-2">
          <IoCall />
          <span>Call Now</span>
        </button>
        {/* product search area */}
        <div className="border flex text-white rounded-full items-center px-4 py-1">
          <input
            type="text"
            placeholder="Search plants,tools"
            className="outline-none w-44 xl:w-auto text-sm md:text-base"
          />
          <HiMagnifyingGlass className="text-white cursor-pointer" size={18} />
        </div>

        {/* cart */}
        <CartBadge />

        {/* user profile/dashboard */}
        <Link href={"/"} className="hidden lg:block">
          <CgProfile className="text-white" size={23} />
        </Link>
      </div>

      {/* ============ mobile bar for slide panel ============= */}
      <div className="lg:hidden">
        <SlidePanel links={links} />
      </div>
    </nav>
  );
};

export default Navbar;
