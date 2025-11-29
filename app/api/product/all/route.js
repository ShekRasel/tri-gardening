import { connect_db } from "@/database/db-config/mongoose";
import { Product } from "@/database/models/product/product.schema";
import { NextResponse } from "next/server";

export const GET = async () => {
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
        name: 1,
        slug: 1,
        images: 1,
        types: 1,
        variants: 1,
        description: 1,
        rating: 1,
        popular: 1,
        categories: 1,
      },
    },
  ]);

  if (products) {
    return NextResponse.json(
      {
        message: "All product find seccussfully",
        data: products,
      },
      {
        status: 200,
      }
    );
  }

  return NextResponse.json(
    {
      message: "No products found",
    },
    {
      status: 400,
    }
  );
};
