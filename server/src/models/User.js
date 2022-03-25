// import ajv from "../config/ajv.js";
// const schema = {
//   type: "object",
//   properties: {
//     firstName: { type: "string" },
//     lastName: { type: "string" },
//     userName: { type: "string" },
//     password: { type: "string", format: "password" },
//     email: { type: "string", format: "email" },
//     phoneNumber: { type: "string", format: "number" },
//   },
//   required: [
//     "lastName",
//     "lastName",
//     "userName",
//     "password",
//     "phoneNumber",
//     "email",
//   ],
//   additionalProperties: false,
// };
// const validate = ajv.compile(schema);

// export default User;
import mongoose from "mongoose";
const Schema = mongoose.Schema;
const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const User = mongoose.model("users", UserSchema);
export default User;
