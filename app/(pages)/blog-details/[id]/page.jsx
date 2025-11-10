import React from "react";
import { blogs } from "../../../../data/blog-data/data";
import Image from "next/image";
import BlogSearch from "../../../../components/search.blog";
import BlogCategories from "../../../../components/blog.categories";
import RecentPost from "../../../../components/blog.recent-post";
import SecondaryButton from "../../../../components/ui/static-buttons/secondary.button";

const BlogDetailsPage = async ({ params }) => {
  const data = await params;

  const filterBlog = blogs.find((blog) => blog.id === Number(data.id));

  return (
    <div className="responsive mt-12 bg-light-white py-12 flex flex-col md:flex-row gap-8">
      <div>
        <div className="bg-white rounded-2xl shadow overflow-hidden">
          {/* blog Image */}
          <div className="">
            <Image
              src={filterBlog.image}
              alt={filterBlog.name}
              height={100}
              width={7000}
              className="h-76 lg:h-96 object-fill"
            />
          </div>

          {/* blog Info */}
          <div className="p-4 md:px-8">
            <div className="flex justify-between">
              <h2 className="text-sm font-semibold text-green-400 mt-1">
                Post Type
              </h2>
              <div className=" text-xs lg:text-sm text-gray mt-5 md:mt-4 font-semibold flex gap-10">
                <p>September 19, 2025</p>
                <p>5min Read</p>
              </div>
            </div>
            <h2 className="lg:text-sm md:text-lg font-semibold text-black line-clamp-1 mt-6">
              {filterBlog.name}
            </h2>
            <p className="text-xs md:text-sm mt-5 text-justify leading-relaxed">
              {filterBlog.description}
            </p>
          </div>
        </div>

        {/*  comment section*/}
        <div className="bg-white shadow rounded-2xl mt-10 p-4">
          <h1 className="text-black font-semibold">Comments</h1>
          <div className="relative">
            <textarea
              className="w-full h-32 border border-light-gray rounded-md p-2 mt-1 text-sm"
              placeholder="Write your comments"
            />
            <div className="absolute bottom-4 right-4">
              <SecondaryButton className="py-1">Submit</SecondaryButton>
            </div>
          </div>

          <div className="mt-10 flex gap-4">
            <Image
              src={"/images/person/smita.png"}
              height={20}
              width={40}
              alt="person"
              className="rounded-full"
            />
            <div>
              <h2 className="text-sm font-semibold">Ismita Chowdhury</h2>
              <div className="flex text-xs gap-6 m-1">
                <button className="text-xs bg-green-100 px-2 rounded-md  text-primary">
                  Verified Purchase
                </button>
                <p className="text-primary">4 Day ago (12 September,2025)</p>
              </div>
            </div>
          </div>

          <p className="mt-7 p-3 border border-light-gray text-xs rounded-md text-primary">
            এই গাছটা একেবারেই দারুণ! একদম ভালো অবস্থায় পৌঁছেছে এবং আমার বাগানে
            দারুণভাবে বেড়ে উঠছে। এর মান আমার প্রত্যাশার থেকেও ভালো এবং
            ইতিমধ্যেই নতুন কুঁড়ি গজাচ্ছে। নতুন কিংবা অভিজ্ঞ উভয় ধরনের মালীদের
            জন্যই আমি এটি অত্যন্ত সুপারিশ করছি।
          </p>
        </div>
      </div>

      <div className="space-y-6 xl:min-w-96">
        <BlogSearch />
        <BlogCategories />
        <RecentPost />
      </div>
    </div>
  );
};

export default BlogDetailsPage;
