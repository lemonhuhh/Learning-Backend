import mongoose from "mongoose";
import { env } from "./env.config.js";
import dns from "dns";

dns.setDefaultResultOrder("ipv4first");
export async function connectDB() {
  try {
    await mongoose.connect(env.MONGO_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB" + error);
  }
}
