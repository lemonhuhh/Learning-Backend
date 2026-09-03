import React from "react";
import product from "../../data/data";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

function Productcard() {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const handelAddtocart = (products) => {
    alert(`${products.name} added to cart.`)
    addToCart(products);
  };

  const handleViewDetails = (productName) => {
    navigate(`/product/${productName}`);
  };

  return (
    <div className="grid min-h-screen grid-cols-4 items-center justify-center gap-5">
      {product.map((products) => (
        <div
          key={products.id}
          className="w-77.5 overflow-hidden rounded-2xl bg-white shadow-lg transition hover:shadow-xl"
        >
          {/* Image Section */}
          <div className="relative flex h-57.5 items-center justify-center bg-slate-100">
            <img
              src={products.image}
              alt={products.name}
              className="w-61.25 object-contain rotate-[-8deg]"
            />

            {/* Heart */}
            <button className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-2xl text-cyan-950 shadow-sm transition hover:bg-cyan-50">
              ♡
            </button>
          </div>

          {/* Product Details */}
          <div className="px-4 py-3">
            <h2 className="text-xl font-bold text-slate-800">
              {products.name}
            </h2>

            {/* Tags */}
            <div className="mt-2 flex gap-2">
              <span className="rounded border border-slate-300 px-2 py-1 text-xs text-slate-600">
                EU38
              </span>

              <span className="rounded border border-slate-300 px-2 py-1 text-xs text-slate-600">
                BLACK/WHITE
              </span>
            </div>

            {/* Description */}
            <p className="mt-3 text-sm leading-6 text-slate-500">
              {products.description}
            </p>

            {/* Price + Button */}
            <div className="mt-6 flex items-end justify-between gap-2">
              <div>
                <p className="text-[10px] font-bold tracking-widest text-slate-400">
                  PRICE
                </p>

                <p className="text-xl font-bold text-slate-800">
                  ${products.price}
                </p>
              </div>

              <button
                onClick={() => handelAddtocart(products)}
                className="h-10 w-40 cursor-pointer rounded-md bg-cyan-950 text-sm font-semibold text-white transition hover:bg-cyan-900"
              >
                Add to cart
              </button>

              <button
                onClick={() => handleViewDetails(products.name)}
                className="h-10 w-40 cursor-pointer rounded-md border border-cyan-950 text-sm font-semibold text-cyan-950 transition hover:bg-cyan-950 hover:text-white"
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
