import mongoose from "mongoose";

const product = mongoose.Schema({
  nameProduct: {
    // type: mongoose.Schema.Types.ObjectId,
    // ref: "Product",
    type: "String",
    required: true,
  },
  quantity: {
    type: "Number",
    required: true,
    min: 1,
  },
  // },
});
const orderSchema = new mongoose.Schema(
  {
    email: {
      type: "String",
      required: true,
    },
    address: {
      type: "String",
      required: true,
    },
    phone: {
      type: "Number",
      required: true,
    },
    name: {
      type: "String",
      required: true,
    },
    listProducts: [product],
    payment: {
      type: "String",
      default: "COD",
    },
    note: {
      type: "String",
      default: "",
    },
  },
  { timestamps: true }
);
export const Order = mongoose.model("Order", orderSchema);
