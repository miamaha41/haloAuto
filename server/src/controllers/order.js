import { Order } from "../models/Order.js";

export const insertedOrder = async (req, res) => {
  // const {
  //   listProduct: [quantity, nameProduct],
  //   ...order
  // } = req.body;
  // const _id = listProduct.nameProduct;
  const order = req.body;
  if (!req.body) res.send({ message: "Must have order" });

  try {
    const insertOrder = new Order(order);
    await insertOrder.save();
    // insertOrder.markModified("listProduct");
    // insertOrder.create();
    if (!insertOrder) res.send({ message: insertOrder.error.message });
    res.send({ insertOrder, message: "Order inserted successfully" });
  } catch (error) {
    res.send({ message: error.message });
  }
};
export const getOrders = async (req, res) => {
  try {
    const listOrder = await Order.find();
    res.send({ listOrder });
  } catch (error) {
    res.send({ message: error.message });
  }
};
