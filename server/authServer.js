import express from "express";
import "dotenv/config";
import jwt from "jsonwebtoken";
const app = express();
const PORT = 5500;
app.use(express.json());

app.post("/login", (req, res) => {
  //Authentication

  //Authorization
  const data = req.body;
  const accessToken = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET_KEY, {
    expiresIn: "120s",
  });
  res.json({ accessToken });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
