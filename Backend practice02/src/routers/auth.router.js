import { Router } from "express";

export const authRouter = Router();

authRouter.post("/", (req, res) => {
  res.status(200).json({ message: "Account created" });
});
