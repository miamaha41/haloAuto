import express from "express";
import "dotenv/config";
import verifyToken from "./middlewares/verifyToken.js";
import { connectDB } from "./config/mongoDb.js";
// Connect mongoDB
// const connectDB = async () => {
//   try {
//     await mongoose.connect(
//       `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@haluaauto.uxxwz.mongodb.net/haluaAuto?retryWrites=true&w=majority`
//     );
//     console.log("Connected MongoDB");
//   } catch (error) {
//     console.log(error);
//     process.exit(1);
//   }
// };
// connectDB();
connectDB();
const books = {
  name: "NodeJS",
};
const app = express();
const PORT = process.env.PORT || 5000;
const hostname = "localhost";
app.use(express.json());

app.get("/product", verifyToken, (req, res) => {
  res.json({ status: "success", data: books });
});
app.listen(PORT, hostname, () => {
  console.log(`running at ${hostname}:${PORT}/`);
});
