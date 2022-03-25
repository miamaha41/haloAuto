import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    types: {
      type: "String",
      required: true,
    },
    name: {
      type: "String",
      required: true,
      unique: true,
    },
    currentPrice: {
      type: "Number",
      required: true,
    },
    oldPrice: {
      type: "Number",
      default: 0,
    },
    imgSrc: {
      type: "String",
      required: true,
    },
    saleFlash: {
      type: "Number",
      default: 0,
    },
    desc: {
      type: "String",
      required: true,
    },
    brand: {
      type: "String",
      default: "Đang cập nhật",
    },
    quantity: {
      type: "Number",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
