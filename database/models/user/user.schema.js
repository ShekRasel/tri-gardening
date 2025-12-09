const { Schema, model, models } = require("mongoose");

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: Number,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["customer" || "admin"],
      default: "customer",
    },
  },
  {
    timestamps: true,
  }
);

export const User = models.User || model("User", userSchema);
