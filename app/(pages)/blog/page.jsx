import Image from "next/image";
import React from "react";
import { blogs } from "../../../data/blog-data/data";
import BlogCard from "../../../components/cards/blog.card";
import Link from "next/link";
import BlogSearch from "../../../components/search.blog";
import BlogCategories from "../../../components/blog.categories";
import RecentPost from "../../../components/blog.recent-post";

const BlogPage = () => {
  return (
    <div className="responsive mt-18 bg-light-white py-12 flex flex-col md:flex-row min-h-screen gap-4">
      {/*===================== right side ========================= */}
      <div className="w-full">
        <h1 className="text-2xl lg:text-3xl font-semibold text-black text-center">
          The TriGardening Journal
        </h1>
        <h3 className="text-lg lg:text-xl text-center">
          Your slogan goes here
        </h3>

        <div className="mt-6">
          <div className="w-full h-[270px] md:h-[350px] rounded-xl overflow-hidden relative">
            <Image
              src={"/images/blog-images/blog-hero.jpg"}
              fill
              alt="blog-hero-image"
              className="object-cover"
            />
            <div className="absolute text-white bottom-0 left-0 px-4 md:px-7 py-5">
              <h1 className="text-xl font-semibold">
                Your Blogpost Title goes here:
              </h1>
              <p>Your blogpost first paragraph sentence goes here....</p>

              <p className="mt-6">Writer’s Name September 19, 2025</p>
            </div>
          </div>
        </div>

        {/* blog card */}
        <div className="mt-10">
          <div className="grid grid-cols-2 gap-3 md:gap-5 lg:gap-7">
            {blogs.map((blog) => (
              <Link key={blog.id} href={`blog-details/${blog.id}`}>
                <BlogCard item={blog} />
              </Link>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <button className="mt-7  bg-light-green px-5 py-1.5 rounded-md text-white cursor-pointer ">
            Load More
          </button>
        </div>
      </div>

      {/*====================== left side =========================== */}
      <div className=" space-y-6">
        <BlogSearch />
        <BlogCategories />
        <RecentPost />
      </div>
    </div>
  );
};

export default BlogPage;
