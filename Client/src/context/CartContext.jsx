/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    // Simulate storing to a database
    storeCartToDatabase([...cart, item]);
  };

  const removeFromCart = (title) => {
    const updatedCart = cart.filter((item) => item.Title !== title);
    setCart(updatedCart);
    // Simulate storing to a database
    storeCartToDatabase(updatedCart);
  };

  const getTotalPrice = () => {
    return cart.reduce(
      (total, item) => total + parseFloat(item.Price.replace("₹", "")),
      0
    );
  };

  const storeCartToDatabase = (cart) => {
    // Simulate a database call
    console.log("Storing cart to database:", cart);
  };

  const contextValue = {
    cart,
    addToCart,
    removeFromCart,
    getTotalPrice,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
