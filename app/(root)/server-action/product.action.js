"use server";

import { connect_db } from "@/database/config/mongoose";
import { Product } from "@/database/models/product/product.schema";
import { cacheTag } from "next/cache";

export const getSingleProduct = async (productId) => {
  await connect_db();
  const product = await Product.findOne({ _id: productId });
  return {
    message: "Product find successfully",
    data: JSON.parse(JSON.stringify(product)),
  };
};

export const getFeaturedProducts = async () => {
  "use cache";
  cacheTag("product");
  await connect_db();
  const featuredProducts = await Product.find({ special: true });
  return {
    message: "Product find successfully",
    data: JSON.parse(JSON.stringify(featuredProducts)),
  };
};

export const getPopularProducts = async () => {
  "use cache";
  cacheTag("product");
  await connect_db();
  const popularProducts = await Product.find({ popular: true });
  return {
    message: "Product find successfully",
    data: JSON.parse(JSON.stringify(popularProducts)),
  };
};
