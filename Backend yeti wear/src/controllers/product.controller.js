import { Product } from "../models/product.model.js";

export async function getProducts(req, res) {
  try {
    const products = await Product.find();
    return res.status(200).json({
      status: "success",
      message: "Product fetched successful",
      products,
    });
  } catch (error) {
    return res.status(500).json({ message: "Product fetching failed" });
  }
}

export async function deleteProducts(req, res) {
  const product = await Product.deleteMany({});
  return res.status(200).json({
    status: "success",
    message: "All products deleted",
  });
}

export async function deleteOneProducts(req, res) {
  const { id } = req.params;
  const product = await Product.findByIdAndDelete(id);
  return res.status(200).json({
    status: "success",
    message: "This product has been deleted",
    product,
  });
}

export async function addProducts(req, res) {
  try {
    const products = await Product.create(req.body);
    return res.status(200).json({
      status: "success",
      message: "Product creating successful",
      products,
    });
  } catch (error) {
    return res.status(200).json({ message: "Error creating product" });
  }
}
