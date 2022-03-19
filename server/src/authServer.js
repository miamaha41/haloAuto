import express from "express";
import "dotenv/config";
import jwt from "jsonwebtoken";
const app = express();
const PORT = 5500;

let refreshTokens = [];
app.use(express.json());

app.post("/login", (req, res) => {
  //Authentication

  //Authorization
  const data = req.body;
  const accessToken = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET_KEY, {
    expiresIn: "30s",
  });
  const refreshToken = jwt.sign(data, process.env.REFRESH_TOKEN_SECRET_KEY);
  refreshTokens.push(refreshToken);
  res.json({ accessToken, refreshTokens });
});
app.post("/refreshToken", (req, res) => {
  const refreshToken = req.body.token;
  if (!refreshToken) res.status(401);
  if (!refreshTokens.includes(refreshToken)) res.sendStatus(403);
  try {
    const decoded = jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET_KEY
    );
    console.log(decoded);
    if (decoded) {
      const accessToken = jwt.sign(
        { username: decoded.username },
        process.env.ACCESS_TOKEN_SECRET_KEY,
        { expiresIn: "30s" }
      );
      res.json({ accessToken });
    } else {
      res.sendStatus(403);
    }
  } catch (error) {}
});
app.post("/logout", (req, res) => {
  const refreshToken = req.body.token;
  refreshTokens = refreshTokens.filter((refToken) => refToken !== refreshToken);
  res.sendStatus(200);
});
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
