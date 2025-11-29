const { Schema, models, model } = require("mongoose");

const userRoleSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    role: {
      type: Schema.Types.ObjectId,
      ref: "Role",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const UserRole = models.UserRole || model("UserRole", userRoleSchema);
