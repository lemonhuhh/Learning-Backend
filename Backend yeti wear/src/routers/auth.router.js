import { Router } from "express";
import { handleLogin } from "../controllers/auth.controller.js";
import { handleSignup } from "../controllers/auth.controller.js";
import { deleteAccount } from "../controllers/auth.controller.js";
import { getAllUsers } from "../controllers/auth.controller.js";

export const authRouter = Router();

authRouter.get("/", getAllUsers);
authRouter.post("/signup", handleSignup);
authRouter.delete("/:id", deleteAccount);
authRouter.post("/login", handleLogin);
