import { connect_db } from "@/database/config/mongoose";
import { Category } from "@/database/models/category/category.schema";

const { NextResponse } = require("next/server");

export const POST = async (req) => {
  const body = await req.json();
  await connect_db();

  const existCategory = await Category.findOne({ name: body.name });

  if (existCategory) {
    return NextResponse.json(
      {
        message: "category already exist",
      },
      {
        status: 409,
      }
    );
  }

  if (!existCategory) {
    const newCategory = await Category.create(body);
    return NextResponse.json(
      {
        message: "Category Create Successfully",
        data: newCategory,
      },
      {
        status: 201,
      }
    );
  }
};
