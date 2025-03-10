import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

// **1️⃣ User Registration**
router.post("/register", async (req, res) => {
  try {
    const { fullName, email, password, role } = req.body; // Accept role in request

    console.log("Incoming request:", { fullName, email, role });

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ fullName, email, password: hashedPassword, role }); // Save role
    await newUser.save();

    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    console.error("Registration Error:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

// **2️⃣ User Login**
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role }, // Include role in token
      process.env.JWT_SECRET || "fallback_secret",
      { expiresIn: "1h" }
    );

    res.json({ token, userId: user._id, role: user.role }); // Return role
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

// **3️⃣ MetaMask Login (Wallet Authentication)**
router.post("/metamask", async (req, res) => {
  try {
    const { wallet } = req.body;

    let user = await User.findOne({ walletAddress: wallet });

    if (!user) {
      user = new User({ walletAddress: wallet, role: "regular" }); // Default role for MetaMask users
      await user.save();
    }

    const token = jwt.sign(
      { id: user._id, walletAddress: user.walletAddress, role: user.role }, // Include role
      process.env.JWT_SECRET || "fallback_secret",
      { expiresIn: "1h" }
    );

    res.json({ token, role: user.role, message: "MetaMask login successful!" }); // Return role
  } catch (error) {
    console.error("MetaMask Login Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;
