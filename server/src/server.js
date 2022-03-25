import express from "express";
import "dotenv/config";
import verifyToken from "./middlewares/verifyToken.js";
import api from "./routes/v1/api.js";
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
const hostname = "localhost";
app.use(express.json());
app.use("/api", api);
app.listen(PORT, hostname, () => {
  console.log(`running at ${hostname}:${PORT}/`);
});
