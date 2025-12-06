import ProductImages from "@/app/(root)/_components/product.images";
import ProductInfo from "@/app/(root)/_components/product.info";
import { getSingleProduct } from "@/app/(root)/server-action/product.action";
import React from "react";

const ProductDetails = async ({ params }) => {
  const { id } = await params;
  const { data: product } = await getSingleProduct(id);

  return (
    <div className="flex flex-col md:flex-row items-start justify-between gap-4 lg:gap-8 responsive max-w-7xl mx-auto py-4 md:py-8">
      <div className="md:w-1/2 w-full">
        <ProductImages images={product.images} />
      </div>
      <div className="md:w-1/2 w-full">
        <ProductInfo product={product} />
      </div>
    </div>
  );
};

export default ProductDetails;
