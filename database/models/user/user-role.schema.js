const { Schema, models, model } = require("mongoose");

const userRoleSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    roleId: {
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
