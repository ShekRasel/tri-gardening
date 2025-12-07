import ProductImages from "@/app/(root)/_components/product.images";
import ProductInfo from "@/app/(root)/_components/product.info";
import { getSingleProduct } from "@/app/(root)/server-action/product.action";
import React from "react";

const ProductDetails = async ({ params }) => {
  const { id } = await params;
  const { data: product } = await getSingleProduct(id);

  return (
    <div className="responsive max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-start justify-between gap-4 lg:gap-8  py-4 md:py-8">
        <div className="md:w-1/2 w-full">
          <ProductImages images={product.images} />
        </div>
        <div className="md:w-1/2 w-full">
          <ProductInfo product={product} />
        </div>
      </div>
      <div className="text-light-green bg-light-white p-3 md:p-5 lg:p-6 rounded-md">
        <h2 className="text-lg font-semibold text-primary pb-2">
          Descriptions
        </h2>
        <p className="text-justify">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
