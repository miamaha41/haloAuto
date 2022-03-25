import express from "express";
import "dotenv/config";
import productRouter from "./routes/v1/productRouter.js";
import orderRouter from "./routes/v1/orderRouter.js";
import { connectDB } from "./config/mongoDb.js";

// connectDB()
//   .then(() => console.log("Connected successfully to database server!"))
//   .then(() => bootServer())
//   .catch((error) => {
//     console.log(error);
//     process.exit(1);
//   });
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use("/product", productRouter);
app.use("/order", orderRouter);
app.listen(PORT, () => {
  console.log(`running at :${PORT}/`);
});
