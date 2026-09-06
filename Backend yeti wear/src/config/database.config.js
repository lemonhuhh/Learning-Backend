import mongoose from "mongoose";
import { env } from "./env.config.js";

export async function connectDB() {
  await mongoose.connect(env.MONGO_URL);
  console.log("Connected to MongoDB");
}
