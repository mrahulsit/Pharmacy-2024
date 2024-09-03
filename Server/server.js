// server.js
import express, { json } from "express";
import registerRoute from "./RegisterRoute/register.js";
import loginRoute from "./LoginRoute/login.js";
import mail from "./Mail/Mail.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

// Middleware
app.use(json());
app.use(cors(corsOptions));

// Use routes
app.use("/api/register", registerRoute);
app.use("/api/login", loginRoute);
app.use("/api/mail", mail);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
