import { Router } from "express";
import { getProducts } from "../controllers/product.controller.js";
import { deleteProducts } from "../controllers/product.controller.js";
import { deleteOneProducts } from "../controllers/product.controller.js";
import { addProducts } from "../controllers/product.controller.js";
import { validateCreateProduct } from "../validators/product.validator.js";
import { upload } from "../config/multer.config.js";

export const productRouter = Router();

productRouter.post(
  "/",
  upload.single("productImage"),
  validateCreateProduct,
  addProducts,
);
productRouter.get("/", getProducts);
productRouter.delete("/", deleteProducts);
productRouter.delete("/:id", deleteOneProducts);
