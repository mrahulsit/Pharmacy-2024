import { createTransport } from "nodemailer";
import express from "express";
import dotenv from "dotenv";
const router = express.Router();
dotenv.config();

// Nodemailer transporter setup
const transporter = createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});

// Route to send email
router.post("/", async (req, res) => {
  const { email } = req.body;
  try {
    const info = await transporter.sendMail({
      from: "mrahuls104@gmail.com",
      to: email,
      subject: "Hello ✔",
      text: "Hello world?",
      html: "<b>Hello world?</b>",
    });
    console.log("Message sent: %s", info.messageId);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Failed to send email");
  }
});

export default router;
