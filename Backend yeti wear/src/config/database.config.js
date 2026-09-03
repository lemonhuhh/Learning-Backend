import mongoose from "mongoose";
import { env } from "./env.config.js";

export async function connectDB() {
  try {
    await mongoose.connect(env.MONGO_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connectiong to MongoDB" + error);
  }
}
