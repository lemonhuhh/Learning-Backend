import jwt from "jsonwebtoken";
import { env } from "../config/env.config.js";

export const generateToken = (user) => {
  const token = jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    env.JWT_SECRET,
    {
      expiresIn: env.JWT_EXPIRES_IN,
    },
  );

  return token;
};
