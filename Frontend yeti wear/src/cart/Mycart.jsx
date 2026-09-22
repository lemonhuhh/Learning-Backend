import { CartContext } from "../context/CartContext.jsx";
import { useContext } from "react";

function Mycart() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);
  const total = cart.reduce(
    (sum, item) =>
      sum + Number(item.productPrice || item.price) * (item.quantity || 1),
    0,
  );
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-950">
            Yeti Wear
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            My Cart
          </h1>
          <p className="mt-1 text-slate-500">
            {cart.length === 0
              ? "Your cart is currently empty."
              : `${cart.length} item${cart.length !== 1 ? "s" : ""} in your cart`}
          </p>
        </div>
        {/* Empty Cart */}
        {cart.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-3xl">
              🛒
            </div>
            <h2 className="mt-5 text-xl font-semibold text-slate-800">
              Your cart is empty
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Add some products to your cart and they will appear here.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1fr_350px]">
            {/* Cart Items */}
            <div className="space-y-4">
              {cart.map((item, index) => {
                const price = Number(item.productPrice || item.price || 0);
                const quantity = item.quantity || 1;
                return (
                  <div
                    key={item._id || index}
                    className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                      {/* Product Image */}
                      <div className="flex h-28 w-full shrink-0 items-center justify-center rounded-xl bg-slate-100 sm:h-28 sm:w-28">
                        {item.productImage || item.image ? (
                          <img
                            src={item.productImage || item.image}
                            alt={item.productName || item.name}
                            className="h-full w-full rounded-xl object-contain p-3"
                          />
                        ) : (
                          <span className="text-xs text-slate-400">
                            No Image
                          </span>
                        )}
                      </div>
                      {/* Product Info */}
                      <div className="flex-1">
                        <h2 className="text-lg font-bold text-slate-800">
                          {item.productName || item.name}
                        </h2>
                        <p className="mt-1 text-sm text-slate-500">
                          Rs. {price}
                        </p>
                        {/* Quantity */}
                        <div className="mt-4 flex items-center gap-3">
                          <span className="text-sm font-medium text-slate-600">
                            Quantity
                          </span>
                          <div className="flex items-center overflow-hidden rounded-lg border border-slate-200">
                            <button
                              onClick={() =>
                                decreaseQuantity(item._id || item.id)
                              }
                              className="flex h-9 w-9 items-center justify-center text-lg text-slate-700 transition hover:bg-slate-100"
                            >
                              −
                            </button>
                            <span className="flex h-9 min-w-10 items-center justify-center border-x border-slate-200 text-sm font-semibold">
                              {quantity}
                            </span>
                            <button
                              onClick={() =>
                                increaseQuantity(item._id || item.id)
                              }
                              className="flex h-9 w-9 items-center justify-center text-lg text-slate-700 transition hover:bg-slate-100"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* Price + Remove */}
                      <div className="flex items-center justify-between gap-5 sm:flex-col sm:items-end">
                        <p className="text-lg font-bold text-slate-800">
                          Rs. {(price * quantity).toLocaleString()}
                        </p>
                        <button
                          onClick={() => removeFromCart(item._id || item.id)}
                          className="text-sm font-medium text-red-500 transition hover:text-red-700"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Order Summary */}
            <div className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-800">
                Order Summary
              </h2>
              <div className="mt-6 space-y-4 text-sm">
                <div className="flex justify-between text-slate-500">
                  <span>Items</span> <span>{cart.length}</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Subtotal</span>
                  <span> Rs. {total.toLocaleString()} </span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Delivery</span> <span>Free</span>
                </div>
                <div className="border-t border-slate-200 pt-4">
                  <div className="flex justify-between text-lg font-bold text-slate-900">
                    <span>Total</span>
                    <span> Rs. {total.toLocaleString()} </span>
                  </div>
                </div>
              </div>
              <button className="mt-6 w-full rounded-lg bg-cyan-950 py-3 font-semibold text-white transition hover:bg-cyan-900">
                Proceed to Checkout
              </button>
              <p className="mt-3 text-center text-xs text-slate-400">
                Secure checkout • Free delivery
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Mycart;
