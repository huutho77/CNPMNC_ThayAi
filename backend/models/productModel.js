import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      default: 0,
    },
    salsePrice: {
      type: Number,
      default: 0,
    },
    quantity: {
      type: Number,
      default: 0,
    },
    description: {
      type: String,
      default: "",
    },
    memoryRAM: Number,
    storage: Number,
    color: String,
    screenSize: String,
    operatingSystem: String,
    brandId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brand",
    },
  },
  {
    // Auto generate two fields: createdAt and updatedAt
    timestamps: true,
  }
);

export const ProductModel = mongoose.model("Product", productSchema);
