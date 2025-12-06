"use server";

import { connect_db } from "@/database/config/mongoose";
import { Category } from "@/database/models/category/category.schema";
import { updateTag } from "next/cache";

export const createCategory = async (catData) => {
  await connect_db();
  const existCategory = await Category.findOne({ name: catData.name });

  if (existCategory) {
    return {
      message: "category already exist",
    };
  }

  if (!existCategory) {
    const newCategory = await Category.create(catData);
    updateTag("categories");
    return {
      message: "Category Create Successfully",
      data: JSON.parse(JSON.stringify(newCategory)),
    };
  }
};
