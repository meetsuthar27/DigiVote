import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  walletAddress: { type: String, unique: true, sparse: true },
  role: { type: String, enum: ["regular", "gov"], default: "regular" } // New role field
});

const User = mongoose.model("User", UserSchema);
export default User;
