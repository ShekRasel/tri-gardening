import { connect_db } from "@/database/config/mongoose";
import { uploadToCloudinary } from "@/database/config/upload";
import { Product } from "@/database/models/product/product.schema";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    await connect_db();

    const formData = await req.formData();
    const imageFile = formData.get("images");

    const imageUrl = await uploadToCloudinary(imageFile);

    const newProduct = await Product.create({
      name: formData.get("name"),
      slug: formData.get("slug"),
      description: formData.get("description"),
      popular: formData.get("popular") === "true",
      images: [imageUrl],
    });

    return NextResponse.json(
      { message: "Product created", data: newProduct },
      { status: 201 }
    );
  } catch (error) {
    console.log("Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
};
