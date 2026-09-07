import { Router } from "express";

export const productRouter = Router();

productRouter.get("/", (req, res) => {
  return res.status(200).json({ message: "Products endpoint" });
});

productRouter.delete("/", (req, res) => {
  return res.status(200).json({ message: "All products deleted" });
});

productRouter.delete("/:id", (req, res) => {
  return res.status(200).json({ message: "Product Delted" });
});
