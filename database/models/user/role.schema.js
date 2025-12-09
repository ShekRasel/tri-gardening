const { Schema, models, model } = require("mongoose");

const roleSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Role = models.Role || model("Role", roleSchema);
