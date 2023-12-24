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
      // Product already exists in the cart, update the quantity
      const updatedProducts = [...selectedProducts];
      updatedProducts[existingProductIndex].quantity += 1;
      setSelectedProducts(updatedProducts);
    } else {
      // Product is not in the cart, add it with quantity 1
      setSelectedProducts((prevSelected) => [
        ...prevSelected,
        { ...product, quantity: 1 },
      ]);
    }
  };

  const removeFromCart = (productId) => {
    setSelectedProducts((prevSelected) =>
      prevSelected.filter((item) => {
        if (item.id === productId) {
          // Decrease the quantity if greater than 1, otherwise remove the item
          return item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : false;
        }
        return true;
      })
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
