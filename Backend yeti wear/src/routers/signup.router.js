import { Router } from "express";

export const signupRouter = Router();

signupRouter.post("/", (req, res) => {
  res.status(200).json({ message: "acount created" });
});
