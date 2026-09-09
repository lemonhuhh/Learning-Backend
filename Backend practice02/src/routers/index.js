import { Router } from "express";
import { authRouter } from "./auth.router.js";

export const indexRouter = Router();

indexRouter.use("/login", authRouter);
