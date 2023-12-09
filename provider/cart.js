"use client"
import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const addToCart = (product) => {
    setSelectedProducts((prevSelected) => [...prevSelected, product]);
  };

  const removeFromCart = (productId) => {
    setSelectedProducts((prevSelected) =>
      prevSelected.filter((item) => item.id !== productId)
    );
  };

  return (
    <CartContext.Provider value={{ selectedProducts, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
