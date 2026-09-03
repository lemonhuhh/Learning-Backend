import express from "express";
import cors from "cors";
import { env } from "../../Backend yeti wear/src/config/env.config";

export const app = express();
app.use(
  cors({
    origin: env.CLIENT_URL,
    methods: ["POST", "GET", "DELETE", "PUT"],
    allowedHeaders: ["content-type", "Authorization"],
  }),
);
app.use(express.json());
