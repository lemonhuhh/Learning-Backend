import { Router } from "express";
import { customerRouter } from "./customer.router.js";
import { productRouter } from "./product.router.js";
import { authRouter } from "./auth.router.js";
import { contact } from "../controllers/contact.controller.js";

export const indexRouter = Router();

indexRouter.use("/customers", customerRouter);
indexRouter.use("/products", productRouter);
indexRouter.use("/auth", authRouter);
indexRouter.use("/contact", contact);
