import mongoose from "mongoose";
import { env } from "./env.config.js";
import dns from "node:dns";

export async function connectDB() {
  if (env.DNS_SERVERS) {
    dns.setServers(env.DNS_SERVERS.split(",").map((server) => server.trim()));
  }
  await mongoose.connect(env.MONGO_URL);
  console.log(`MongoDB connected: ${mongoose.connection.host}`);
}
