import { Router } from "express";
import { contact } from "../controllers/contact.controller.js";

export const contactRouter = Router();

contactRouter.get("/", contact);
