import { Category } from "@/database/models/category/category.schema";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const body = await req.json();
  const existCategory = await Category.findOne({ name: body.name });

  if (existCategory) {
    const deletedCategory = await Category.findOneAndDelete({
      name: body.name,
    });

    return NextResponse.json(
      {
        message: "Category delete successfully",
        data: deletedCategory,
      },
      {
        status: 200,
      }
    );
  }

  if (!existCategory) {
    return NextResponse.json(
      {
        message: "Category not found",
      },
      {
        status: 404,
      }
    );
  }
};
