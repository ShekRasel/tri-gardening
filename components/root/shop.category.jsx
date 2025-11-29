import React from "react";
import CategoryCard from "./cards/category.card";

const ShopCategory = () => {
  const items = [
    {
      logoLink: "/logos/shop-category/plant.png",
      name: "Plants",
      des: "Indoor  & Outdoor Plants for every space",
    },

    {
      logoLink: "/logos/shop-category/medicine.png",
      name: "Medicine",
      des: "Professional Gardening tools",
    },
    {
      logoLink: "/logos/shop-category/equipment.png",
      name: "Equipment",
      des: "Professional Gardening tools",
    },
    {
      logoLink: "/logos/shop-category/fartilizer.png",
      name: "Fertilizers",
      des: "Safe & effective plant protection",
    },
  ];
  return (
    <div className="space-y-6 lg:space-y-10 responsive">
      <h1 className="text-primary text-2xl md:text-3xl text-center font-semibold">
        Shop by Category
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-8 xl:gap-10">
        {items.map((item, index) => (
          <CategoryCard
            name={item.name}
            des={item.des}
            LogoLink={item.logoLink}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopCategory;
