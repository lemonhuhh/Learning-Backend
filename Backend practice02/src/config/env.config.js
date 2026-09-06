import dotenv from "dotenv";
dotenv.config();

export const env = {
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
    MONGO_URL: process.env.MONGO_URL,
    CLIENT_URL: process.env.CLIENT_URL
}