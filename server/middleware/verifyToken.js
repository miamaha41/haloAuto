import jwt from "jsonwebtoken";
const authenToken = (req, res, next) => {
  const authorizationHeader = req.headers["authorization"];
  const token = authorizationHeader.split(" ")[1];
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Access token not found!" });
  }
  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY);
    // req.userId = decoded.userId;
    if (decoded) next();
  } catch (error) {
    console.error(error);
    return res.status(403).json({ success: false, message: "Invalid token!" });
  }
};
export default authenToken;
