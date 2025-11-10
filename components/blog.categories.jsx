import React from "react";

const BlogCategories = () => {
  return (
    <div className="bg-white rounded-md shadow p-4 py-6">
      <h1 className="text-lg  lg:text-xl font-semibold text-black">
        Blog Categories
      </h1>
      <div className="mt-5 text-sm">
        <div className="flex justify-between pb-1 text-gray">
          <h2>Plant Care</h2>
          <span className="p-1 rounded-md bg-light-white">12</span>
        </div>
        <div className="flex justify-between pb-1 text-gray">
          <h2>Pest Control</h2>
          <span className="p-1 rounded-md bg-light-white">7</span>
        </div>
        <div className="flex justify-between pb-1 text-gray">
          <h2>DIY Gardening</h2>
          <span className="p-1 rounded-md bg-light-white">11</span>
        </div>
        <div className="flex justify-between pb-1 text-gray">
          <h2>Seasonal Tips</h2>
          <span className="p-1 rounded-md bg-light-white">20</span>
        </div>
        <div className="flex justify-between pb-1 text-gray">
          <h2>Sustainability</h2>
          <span className="p-1 rounded-md bg-light-white">4</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCategories;
