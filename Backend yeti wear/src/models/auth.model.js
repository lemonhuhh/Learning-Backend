import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
  },
  phone: {
    type: Number,
  },
  address: {
    type: String,
  },
});

export const Auth = mongoose.model("Auth", authSchema);
