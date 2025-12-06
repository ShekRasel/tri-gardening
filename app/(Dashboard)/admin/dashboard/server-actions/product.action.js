"use server";

import { connect_db } from "@/database/config/mongoose";
import { Category } from "@/database/models/category/category.schema";
import { ProductAndCategory } from "@/database/models/category/product-category.schema";
import { Product } from "@/database/models/product/product.schema";

import { updateTag } from "next/cache";

export const createProduct = async (productFormData) => {
  await connect_db();
  const { category, ...productData } = productFormData;
  const existProduct = await Product.findOne({ name: productData.name });

  if (!existProduct) {
    const newProduct = await Product.create(productData);
    const categoryData = await Category.findOne({ name: category });

    await ProductAndCategory.create({
      productId: newProduct._id,
      categoryId: categoryData._id,
    });

    updateTag("product");

    return {
      message: "product create successfully",
      data: JSON.parse(JSON.stringify(newProduct)),
    };
  } else {
    return { message: "Product exist" };
  }
};
