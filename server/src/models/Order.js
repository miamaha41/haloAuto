import mongoose from "mongoose";

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
    listProducts: {
      type: "Array",
      required: true,
    },

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
