const { products } = require("../data/all-products/data");
const { featuredProducts } = require("../data/featured-product/data");
const { popularProducts } = require("../data/popular-product/data");

const Products = Object.values(products).flat();
export const allProducts = [
  ...Products,
  ...featuredProducts,
  ...popularProducts,
];
