import Image from "next/image";
import React from "react";

const recentPosts = [
  {
    id: 1,
    image: "/images/blog-images/neture3.jpg",
    title: "Caring for succulent: a beginner’s guide",
    date: "May 24, 2025",
  },
  {
    id: 2,
    image: "/images/blog-images/neture2.jpg",
    title: "Growing perfect tomatoes for this season",
    date: "May 23, 2025",
  },
  {
    id: 3,
    image: "/images/blog-images/neture4.jpg",
    title: "Compost fertilizer preparing procedures",
    date: "May 21, 2025",
  },
  {
    id: 4,
    image: "/images/blog-images/neture1.jpg",
    title: "Natural pest control methods that actually work",
    date: "May 20, 2025",
  },
];

const RecentPost = () => {
  return (
    <div className="bg-white rounded-md shadow p-4 py-6">
      <h1 className="text-lg lg:text-xl font-semibold text-black">
        Recent Posts
      </h1>

      <div className="mt-5 text-sm space-y-3">
        {recentPosts.map((post) => (
          <div key={post.id} className="flex text-gray gap-4">
            <div className="w-2/5 relative">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-fill rounded-md"
              />
            </div>

            <div className="w-3/5">
              <p className="text-black">{post.title}</p>
              <p className="text-xs mt-1.5">{post.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPost;
