import React from "react";

const ProductBreadcrumb = async () => {
  try {
    const res = await fetch("api/category/all");
    const { data: categories } = await res.json();
    console.log(categories);
  } catch (error) {
    console.log(error);
  }

  return <div></div>;
};

export default ProductBreadcrumb;
