import { useParams } from "react-router-dom";
import product from "../data/data";

function ProductDetails() {
  const { name } = useParams();

  const products = product.find((products) => products.name === name);

  if (!products) {
    return <h1>Product not found</h1>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="mx-auto flex max-w-5xl gap-10 rounded-xl bg-white p-8 shadow">
        {/* Product Image */}
        <div className="w-1/2">
          <img
            src={products.image}
            alt={products.name}
            className="h-[450px] w-full object-contain"
          />
        </div>

        {/* Product Details */}
        <div className="flex w-1/2 flex-col justify-center">
          <h1 className="text-3xl font-bold">{products.name}</h1>

          <p className="mt-4 text-2xl font-semibold text-cyan-950">
            Rs. {products.price}
          </p>

          <p className="mt-5 leading-7 text-gray-600">{products.description}</p>

          <button className="mt-8 rounded-lg bg-cyan-950 px-6 py-3 font-semibold text-white hover:bg-cyan-900">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
