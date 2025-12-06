"use server";

import { connect_db } from "@/database/config/mongoose";
import { Product } from "@/database/models/product/product.schema";

export const getSingleProduct = async (productId) => {
  await connect_db();
  const product = await Product.findOne({ _id: productId });
  return {
    message: "Product find successfully",
    data: JSON.parse(JSON.stringify(product)),
  };
};
