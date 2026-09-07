import express from "express";
import cors from "cors";
import { env } from "./config/env.config.js";
import { indexRouter } from "./routers/index.js";

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

app.use("/api", indexRouter);
