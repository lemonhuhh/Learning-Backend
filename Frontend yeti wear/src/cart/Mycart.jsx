import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Mycart() {
  const { cart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + Number(item.price), 0);

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">My Cart ({cart.length})</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between border rounded-lg p-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />

                  <div>
                    <h2 className="font-semibold">{item.name}</h2>
                    <p className="text-gray-500">Rs. {item.price}</p>
                  </div>
                </div>

                <p className="font-semibold">Rs. {item.price}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-end">
            <div className="text-lg font-bold">Total: Rs. {total}</div>
          </div>
        </>
      )}
    </div>
  );
}

export default Mycart;
