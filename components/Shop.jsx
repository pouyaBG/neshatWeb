"use client";
import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const productsData = [
  { id: 1, name: "لباس ورزشی", category: "men", type: "pants", price: 4300 },
  { id: 2, name: "لباس ورزشی", category: "women", type: "shirts", price: 4300 },
  { id: 3, name: "لباس ورزشی", category: "men", type: "pants", price: 4300 },
  { id: 4, name: "لباس ورزشی", category: "women", type: "shirts", price: 4300 },
  { id: 5, name: "لباس ورزشی", category: "men", type: "pants", price: 4300 },
];

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4">
      <div
        className="flex items-center justify-between p-3 cursor-pointer w-[250px]"
        onClick={toggleAccordion}
      >
        <span>{title}</span>
        <span>
          {isOpen ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
              >
                <path
                  d="M13 6.4856L7.62817 1.42975C7.3696 1.1864 6.96803 1.18068 6.70264 1.41658L1 6.4856"
                  stroke="black"
                  stroke-opacity="0.7"
                  stroke-width="1.82857"
                  stroke-linecap="round"
                />
              </svg>
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
              >
                <path
                  d="M1 1L6.37183 6.05584C6.6304 6.2992 7.03197 6.30492 7.29736 6.06901L13 1"
                  stroke="black"
                  stroke-opacity="0.7"
                  stroke-width="1.82857"
                  stroke-linecap="round"
                />
              </svg>
            </>
          )}
        </span>
      </div>
      {isOpen && <div className="p-3 flex flex-col gap-2">{children}</div>}
    </div>
  );
};

const App = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  const handleBuyClick = (productId, category, type) => {
    setSelectedProducts((prevSelected) => {
      const isProductInCart = prevSelected.some(
        (item) => item.id === productId
      );

      if (isProductInCart) {
        return prevSelected.filter((item) => item.id !== productId);
      } else {
        return [
          ...prevSelected,
          { id: productId, quantity: 1, category, type },
        ];
      }
    });
  };

  const handleCheckboxChange = (filterType, value) => {
    if (filterType === "category") {
      setSelectedCategory((prevCategory) =>
        prevCategory === value ? null : value
      );
    } else if (filterType === "type") {
      setSelectedType((prevType) => (prevType === value ? null : value));
    }
  };

  const filteredProducts = productsData.filter((product) => {
    const categoryCondition =
      selectedCategory === null || product.category === selectedCategory;
    const typeCondition =
      selectedType === null || product.type === selectedType;
    return categoryCondition && typeCondition;
  });

  return (
    <>
      <div className="container flex items-start justify-between p-10">
        <div className=" grid grid-cols-3 gap-10">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className=" p-5 border border-[#fff0] rounded-lg hover:border-[#0000003B] transition-all "
            >
              <div className="w-[250.816px] h-[276.744px]">
                <img src="/img/pr1.png" alt={`Product ${product.id}`} />
              </div>
              <h3 className="text-xl font-semibold mb-2 mt-6">
                {product.name}
              </h3>
              <div className="flex items-center justify-between">
                <p className="text-gray-700">تومان {product.price}</p>
                <button
                  className="bg-[#3DAC6A] text-white px-4 py-2 mt-2 rounded-md"
                  onClick={() =>
                    handleBuyClick(product.id, product.category, product.type)
                  }
                >
                  {selectedProducts.find((item) => item.id === product.id)
                    ? "حذف"
                    : "خرید"}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="p-5">
          <Accordion title="دسته بندی ها">
            <label className="text-black text-right text-[15px] not-italic font-thin leading-[normal]">
              <input
                type="checkbox"
                checked={selectedCategory === "men"}
                className="ml-2"
                onChange={() => handleCheckboxChange("category", "men")}
              />
              لباس ورزشی زنانه
            </label>
            <label className="text-black text-right text-[15px] not-italic font-thin leading-[normal]">
              <input
                type="checkbox"
                checked={selectedCategory === "women"}
                className="ml-2"
                onChange={() => handleCheckboxChange("category", "women")}
              />
              لباس ورزشی مردانه
            </label>
          </Accordion>
          <label>
            <input
              type="checkbox"
              checked={selectedType === "pants"}
              onChange={() => handleCheckboxChange("type", "pants")}
            />
            Pants
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedType === "shirts"}
              onChange={() => handleCheckboxChange("type", "shirts")}
            />
            Shirts
          </label>
        </div>
      </div>
      <div className="selected-products">
        <ul>
          {selectedProducts.map((product) => (
            <li key={product.id}>
              {`Product ${product.id} (Category: ${product.category}, Type: ${product.type}) - Quantity: ${product.quantity}`}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
