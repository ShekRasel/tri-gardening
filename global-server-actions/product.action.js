"use server";

import { connect_db } from "@/database/config/mongoose";
import { Product } from "@/database/models/product/product.schema";
import { cacheTag } from "next/cache";

export const getProducts = async () => {
  "use cache";
  cacheTag("product");
  await connect_db();

  const products = await Product.aggregate([
    {
      $lookup: {
        from: "productandcategories",
        localField: "_id",
        foreignField: "productId",
        as: "productCategories",
      },
    },
    {
      $lookup: {
        from: "categories",
        localField: "productCategories.categoryId",
        foreignField: "_id",
        as: "categories",
      },
    },

    {
      $project: {
        _id: 1,
        name: 1,
        slug: 1,
        images: 1,
        types: 1,
        description: 1,
        variants: 1,
        rating: 1,
        popular: 1,
        categories: 1,
      },
    },
  ]);

  if (products) {
    return {
      message: "Product find successfully.",
      data: JSON.parse(JSON.stringify(products)),
    };
  } else {
    return {
      message: "products not found",
    };
  }
};
