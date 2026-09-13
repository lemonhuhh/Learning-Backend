import { Router } from "express";
import { handleLogin } from "../controllers/auth.controller.js";
import { handleSignup } from "../controllers/auth.controller.js";
import { deleteAccount } from "../controllers/auth.controller.js";

export const authRouter = Router();

authRouter.post("/signup", handleSignup);
authRouter.post("/:id", deleteAccount);
authRouter.post("/login", handleLogin);
