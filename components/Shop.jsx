"use client";
import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const productsData = [
  { id: 1, name: "لباس ورزشی", category: "men", price: 4300 },
  { id: 2, name: "لباس ورزشی ", category: "women", price: 4300 },
  { id: 3, name: "لباس ورزشی ", category: "men", price: 4300 },
  { id: 4, name: "لباس ورزشی ", category: "women", price: 4300 },
  { id: 5, name: "لباس ورزشی ", category: "men", price: 4300 },
];

const App = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleBuyClick = (productId, category) => {
    setSelectedProducts((prevSelected) => {
      const isProductInCart = prevSelected.some(
        (item) => item.id === productId
      );

      if (isProductInCart) {
        return prevSelected.filter((item) => item.id !== productId);
      } else {
        return [...prevSelected, { id: productId, quantity: 1, category }];
      }
    });
  };

  const handleCheckboxChange = (category) => {
    setSelectedCategory((prevCategory) => {
      if (prevCategory === category) {
        return null;
      } else {
        return category;
      }
    });
  };

  const filteredProducts = productsData.filter((product) => {
    return selectedCategory === null || product.category === selectedCategory;
  });

  return (
    <>
      <div className="container flex items-start justify-between p-10">
        <div className=" grid grid-cols-3 gap-10">
          {filteredProducts.map((product) => (
            <div key={product.id} className=" p-5 border border-[#fff0] rounded-lg hover:border-black transition-all ">
              <div className="w-[250.816px] h-[276.744px]">
                <img src="/img/pr1.png" />
              </div>
              <h3 className="text-xl font-semibold mb-2 mt-6">{product.name}</h3>
              <div className="flex items-center justify-between">
                <p className="text-gray-700">تومان {product.price}</p>
                <button
                  className="bg-[#3DAC6A] text-white px-4 py-2 mt-2 rounded-md"
                  onClick={() => handleBuyClick(product.id, product.category)}
                >
                  {selectedProducts.find((item) => item.id === product.id)
                    ? "حذف"
                    : "خرید"}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="filters">
          <label>
            <input
              type="checkbox"
              checked={selectedCategory === "men"}
              onChange={() => handleCheckboxChange("men")}
            />
            Men's Products
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedCategory === "women"}
              onChange={() => handleCheckboxChange("women")}
            />
            Women's Products
          </label>
        </div>
      </div>
      <div className="selected-products">
        <ul>
          {selectedProducts.map((product) => (
            <li key={product.id}>
              {`Product ${product.id} (Category: ${product.category}) - Quantity: ${product.quantity}`}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
