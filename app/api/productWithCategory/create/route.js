import { connect_db } from "@/database/config/mongoose";
import { ProductAndCategory } from "@/database/models/category/product-category.schema";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  await connect_db();
  const body = await req.json();
  const { productId, categoryId } = body;

  const existProductAndCategory = await ProductAndCategory.findOne({
    productId,
    categoryId,
  });

  if (!existProductAndCategory) {
    const productWithCategory = await ProductAndCategory.create(body);
    return NextResponse.json(
      {
        message: "Product With Category created.",
        data: productWithCategory,
      },
      {
        status: 201,
      }
    );
  }

  return NextResponse.json(
    {
      message: "Already exist",
    },
    {
      status: 409,
    }
  );
};
