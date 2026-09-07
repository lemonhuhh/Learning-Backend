import express from "express";
import cors from "cors";
import { env } from "./config/env.config.js";

export const app = express();
app.use(
  cors({
    origin: env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["content-type", "Authorization"],
  }),
);
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello, World!" });
});

app.get("/api/health", (req, res) => {
  return res.status(200).json({
    status: "ok",
    message: "Server is healthy",
    uptime: 12345,
    database: "connected",
  });
});

app.get("/api/customers", (req, res) => {
  return res.status(200).json({
    success: "true",
    customers: [
      {
        id: 1,
        fullName: "Krul Heaven",
        email: "krul22@gmail.com",
        phone: 9838574809,
        address: "Kathmandu, Nepal",
      },
      {
        id: 2,
        fullName: "Mambik",
        email: "mambik42@gmail.com",
        phone: 976336363,
        address: "Lalitpur, Nepal",
      },
    ],
  });
});
