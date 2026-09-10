import { Router } from "express";
import { getProducts } from "../controllers/product.controller.js";
import { deleteProducts } from "../controllers/product.controller.js";
import { deleteOneProducts } from "../controllers/product.controller.js";
import { addProducts } from "../controllers/product.controller.js";

export const productRouter = Router();

productRouter.post("/", addProducts);
productRouter.get("/", getProducts);
productRouter.delete("/", deleteProducts);
productRouter.delete("/:id", deleteOneProducts);
