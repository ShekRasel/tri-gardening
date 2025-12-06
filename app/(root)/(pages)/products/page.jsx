import ProductList from "@/app/(root)/_components/product.list";
import { getCategories } from "@/global-server-actions/categories.action";
import { getProducts } from "@/global-server-actions/product.action";

import React from "react";

const ProductPage = async () => {
  const { data: products } = await getProducts();
  const { data: categories } = await getCategories();

  return <ProductList products={products} categories={categories} />;
};

export default ProductPage;
