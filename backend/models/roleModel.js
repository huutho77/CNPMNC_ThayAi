import mongoose from "mongoose";

const roleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    description: String,
  },
  {
    timestamps: true,
  }
);

export const RoleModel = mongoose.model("Role", roleSchema);
