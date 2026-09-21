import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext.jsx";

function Productcard({ products = [] }) {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    alert(`${product.productName} added to cart.`);
    addToCart(product);
  };

  const handleViewDetails = (productName) => {
    navigate(`/product/${productName}`);
  };

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <div
          key={product._id}
          className="overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          {/* Image */}
          <div className="relative flex h-60 items-center justify-center bg-slate-100">
            {product.productImage ? (
              <img
                src={product.productImage}
                alt={product.productName}
                className="h-full w-full object-contain p-6"
              />
            ) : (
              <div className="text-sm text-slate-400">No image available</div>
            )}

            {/* Wishlist */}
            <button
              type="button"
              className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-2xl text-cyan-950 shadow-sm transition hover:bg-cyan-50"
            >
              ♡
            </button>
          </div>

          {/* Product Details */}
          <div className="p-4">
            <h2 className="text-xl font-bold text-slate-800">
              {product.productName}
            </h2>

            {/* Description */}
            <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
              {product.productDescription}
            </p>

            {/* Price */}
            <div className="mt-4">
              <p className="text-[10px] font-bold tracking-widest text-slate-400">
                PRICE
              </p>

              <p className="text-xl font-bold text-slate-800">
                Rs. {product.productPrice}
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-5 flex flex-col gap-2">
              <button
                onClick={() => handleAddToCart(product)}
                className="h-10 w-full cursor-pointer rounded-md bg-cyan-950 text-sm font-semibold text-white transition hover:bg-cyan-900"
              >
                Add to Cart
              </button>

              <button
                onClick={() => handleViewDetails(product.productName)}
                className="h-10 w-full cursor-pointer rounded-md border border-cyan-950 text-sm font-semibold text-cyan-950 transition hover:bg-cyan-950 hover:text-white"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Productcard;
