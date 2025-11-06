import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-primary py-8 lg:py-16 responsive">
      <div className="text-white grid grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h1 className="font-semibold">TriGardening</h1>
          <h2 className="text-sm lg:text-base">Your Slogan goes here</h2>
        </div>
        <div>
          <h2 className="font-semibold">Quick Links</h2>
          <div className="mt-3 text-sm lg:text-base space-y-2">
            <h3>About Us</h3>
            <h3>Contact</h3>
            <h3>Shippings</h3>
            <h3>Referal Program</h3>
          </div>
        </div>
        <div>
          <h2 className="font-semibold">Categories</h2>
          <div className="mt-3 text-sm lg:text-base space-y-2">
            <h3>Plants</h3>
            <h3>Tools</h3>
            <h3>Fertilizer</h3>
            <h3>Pesticides </h3>
          </div>
        </div>
        <div className="space-y-3">
          <h2 className="font-semibold">Connect With Us</h2>
          <div className="flex gap-3 items-center">
            <BsFacebook size={23} />
            <FaSquareInstagram size={23} />
            <AiFillTwitterCircle size={23} />
            <IoLogoYoutube size={23} />
          </div>
          <h2 className="text-sm lg:text-base wrap-break-word">
            supprot@trigardening.com
          </h2>
          <h2 className="text-sm lg:text-base">Call Now</h2>
          <h3 className="text-sm lg:text-base">+8801234567890</h3>
        </div>
      </div>

      <div className="w-full border-b border-white my-8" />
      <h1 className="text-center text-white">
        © 2025 TriGardening. All Rights Reserved
      </h1>
    </div>
  );
};

export default Footer;
