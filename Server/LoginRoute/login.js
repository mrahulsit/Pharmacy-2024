import { Router } from "express";
const router = Router();
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../Schema/models.js";
const { sign } = jwt;
import dotenv from "dotenv";
dotenv.config();

// Login Route
router.post("/", async (req, res) => {
  const { username, password } = req.body;
  console.log("Login request received:", username);

  try {
    // Validate request body
    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Username and password are required" });
    }

    // Check if the user exists
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    console.log("User logged in successfully:", username);
    res.json({ token });
  } catch (error) {
    console.error("Error during login:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
