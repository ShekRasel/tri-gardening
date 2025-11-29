const { Schema, models, model } = require("mongoose");

const ProductCategorySchema = new Schema({
  productId: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
});

export const ProductAndCategory =
  models.ProductAndCategory ||
  model("ProductAndCategory", ProductCategorySchema);
