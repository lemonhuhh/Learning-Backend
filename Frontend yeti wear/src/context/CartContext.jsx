import { createContext, useState } from "react";
export const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (products) => {
    setCart([...cart, products]);
  };
  return (
    <>
      <CartContext.Provider value={{ cart, setCart, addToCart }}>
        {children}
      </CartContext.Provider>
    </>
  );
}

export default CartProvider;
