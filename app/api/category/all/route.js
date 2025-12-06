import { connect_db } from "@/database/config/mongoose";
import { Category } from "@/database/models/category/category.schema";
import { NextResponse } from "next/server";

export const GET = async () => {
  await connect_db();
  const allCategories = await Category.find();

  if (allCategory.length > 0) {
    return NextResponse.json(
      {
        message: "Categories find successfully",
        data: allCategories,
      },
      {
        status: 200,
      }
    );
  }

  return NextResponse.json(
    {
      message: "Not found any category",
    },
    {
      status: 404,
    }
  );
};
