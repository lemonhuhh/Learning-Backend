import { useState } from "react";
import axios from "axios";
import API_URL from "../../api/api";
function AddProducts() {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const addProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/products`, {
        productName,
        productPrice,
        productDescription,
      });
      console.log(response.data);
      setProductName("");
      setProductPrice("");
      setProductDescription("");
    } catch (error) {
      console.log("Error adding product:", error.message);
    }
  };
  return (
    <div className="min-h-screen bg-[#0A0F18] p-6 text-white md:p-8">
      {" "}
      {/* Header */}{" "}
      <div className="mb-8">
        {" "}
        <p className="mb-1 text-sm text-[#5CC8FF]"> ADMIN PANEL </p>{" "}
        <h1 className="text-3xl font-semibold"> Add Product </h1>{" "}
        <p className="mt-1 text-sm text-[#8B98AA]">
          {" "}
          Add a new product to your store.{" "}
        </p>{" "}
      </div>{" "}
      {/* Form */}{" "}
      <form
        onSubmit={addProduct}
        className="max-w-2xl rounded-xl border border-white/10 bg-[#111827] p-6"
      >
        {" "}
        {/* Product Name */}{" "}
        <div className="mb-5">
          {" "}
          <label className="mb-2 block text-sm text-[#8B98AA]">
            {" "}
            Product Name{" "}
          </label>{" "}
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Enter product name"
            className="w-full rounded-lg border border-white/10 bg-[#172033] p-3 text-white outline-none focus:border-[#5CC8FF]"
            required
          />{" "}
        </div>{" "}
        {/* Product Price */}{" "}
        <div className="mb-5">
          {" "}
          <label className="mb-2 block text-sm text-[#8B98AA]">
            {" "}
            Product Price{" "}
          </label>{" "}
          <input
            type="number"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            placeholder="Enter product price"
            className="w-full rounded-lg border border-white/10 bg-[#172033] p-3 text-white outline-none focus:border-[#5CC8FF]"
            required
          />{" "}
        </div>{" "}
        {/* Product Description */}{" "}
        <div className="mb-6">
          {" "}
          <label className="mb-2 block text-sm text-[#8B98AA]">
            {" "}
            Product Description{" "}
          </label>{" "}
          <textarea
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            placeholder="Enter product description"
            rows="5"
            className="w-full resize-none rounded-lg border border-white/10 bg-[#172033] p-3 text-white outline-none focus:border-[#5CC8FF]"
            required
          />{" "}
        </div>{" "}
        {/* Submit */}{" "}
        <button
          type="submit"
          className="rounded-lg bg-[#5CC8FF] px-6 py-3 font-medium text-[#0A0F18] transition hover:bg-[#8B9CFF]"
        >
          {" "}
          Add Product{" "}
        </button>{" "}
      </form>{" "}
    </div>
  );
}
export default AddProducts;
