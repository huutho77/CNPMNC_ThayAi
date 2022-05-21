import mongoose from "mongoose";

const cartDetailSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  productName: String,
  productSalePrice: Number,
  productAmount: Number,
});

export const cartDetailModel = mongoose.model("cartDetail", cartDetailSchema);
