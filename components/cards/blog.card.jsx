"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

const BlogCard = ({ item }) => {
  const image = item?.image;
  const name = item?.name;
  const title = item?.title;

  return (
    <div className="bg-white rounded-2xl cursor-pointer overflow-hidden relative shadow">
      <div>
        {/* blog Image */}
        <div className="h-44 md:h-56 w-full">
          <Image
            src={image}
            alt={name}
            height={1000}
            width={1000}
            className="h-full object-cover"
          />
        </div>

        {/* blog Info */}
        <div className="p-4">
          <h2 className="text-sm font-semibold text-green-400 mt-1">
            Post Type
          </h2>
          <h2 className="lg:text-sm md:text-base font-semibold text-black line-clamp-1 mt-2">
            {name}
          </h2>
          <p className="text-xs lg:text-sm line-clamp-3 mt-5 text-justify">
            {title}
          </p>
          <div className=" text-xs lg:text-sm text-gray mt-5 md:mt-4 font-semibold md:flex justify-between">
            <p>September 19, 2025</p>
            <p>5 min Read</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
