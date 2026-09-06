import express from "express";
import cors from "cors";
import { env } from "./config/env.config.js";
export const app = express();
app.use(
  cors({
    origin: env.CLIENT_URL,
    methods: ["POST", "GET", "DELETE", "PUT"],
    allowedHeaders: ["content-type", "Authorization"],
  }),
);
app.use(express.json());

