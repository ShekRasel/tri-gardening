import ProductDetails from "@/app/(root)/_components/product.details";
import LoadingSpinner from "@/components/shared/loader/loader";
import React, { Fragment, Suspense } from "react";

const ProductDetailsPage = ({ params }) => {
  return (
    <Fragment>
      <Suspense fallback={<LoadingSpinner className="text-primary" />}>
        <ProductDetails params={params} />
      </Suspense>
    </Fragment>
  );
};

export default ProductDetailsPage;
