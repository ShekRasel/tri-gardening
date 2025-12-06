const { Schema, model, models } = require("mongoose");

const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },

    images: {
      type: [String],
      default: [],
    },

    types: {
      type: [String],
      default: [],
    },

    description: String,

    variants: [{ label: String, price: Number, stock: Number }],

    rating: Number,
    popular: Boolean,
  },
  {
    timestamps: true,
  }
);

export const Product = models.Product || model("Product", ProductSchema);
