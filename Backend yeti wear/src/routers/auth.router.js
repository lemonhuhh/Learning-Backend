import { Router } from "express";

export const authRouter = Router();

authRouter.post("/register", (req, res) => {
  return res.status(201).json({ message: "User registered" });
});

authRouter.post("/login", (req, res) => {
  return res.status(200).json({ message: "User Logged in" });
});
