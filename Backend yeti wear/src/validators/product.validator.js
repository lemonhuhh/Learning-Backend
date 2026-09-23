export function validateCreateProduct(req, res, next) {
  const { productName, productDescription, productPrice, productImage } =
    req.body;

  if (!productName || !productDescription) {
    return res.status(400).json({
      status: "error",
      message: "All fields are required",
    });
  }
  // if (typeof productPrice !== "number") {
  //   return res.status(400).json({
  //     status: "error",
  //     message: "Product price must be a positive number ",
  //   });
  // }
  next();
}
