"use client";
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  
  const addToCart = (product) => {
    const existingProductIndex = selectedProducts.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      // Product already exists in the cart, increase the quantity by 1
      const updatedProducts = [...selectedProducts];
      updatedProducts[existingProductIndex].quantity += 1;
      setSelectedProducts(updatedProducts);
    } else {
      // Product is not in the cart, add it with the quantity set to 1
      setSelectedProducts((prevSelected) => [
        ...prevSelected,
        { ...product, quantity: 1 },
      ]);
    }
  };

  const removeFromCart = (productId) => {
    setSelectedProducts((prevSelected) =>
      prevSelected.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: Math.max(0, item.quantity - 1), // Ensure quantity is at least 0
            }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        selectedProducts,
        addToCart,
        removeFromCart,
        setSelectedProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
