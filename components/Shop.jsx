"use client";
import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import SwiperSlideShop from "./SwiperSlideShop";

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
  const [searchQuery, setSearchQuery] = useState("");

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
  const handleSearch = () => {
    window.scrollTo({
      top: document.getElementById("productsSection").offsetTop,
      behavior: "smooth",
    });
  };

  const filteredProducts = productsData.filter((product) => {
    const categoryCondition =
      selectedCategory === null || product.category === selectedCategory;
    const typeCondition =
      selectedType === null || product.type === selectedType;
    const searchCondition = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return categoryCondition && typeCondition && searchCondition;
  });
  return (
    <>
      <div className="search-box w-full flex items-center justify-center  p-5">
        <input
          type="text"
          placeholder="جستوجو کنید..."
          value={searchQuery}
          className="px-5 py-2 rounded-[10px] w-[379px] outline-none border-[#7C7B7B] border "
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <button
          onClick={handleSearch}
          className="mr-2 border p-2 rounded-md border-black"
        >
          <img src="/svg/search.svg" alt="Search" />
        </button>
        <div className="flex mr-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="21"
            viewBox="0 0 19 21"
            fill="none"
          >
            <path
              d="M14.5026 5.29171C14.5026 2.4198 12.1661 0.083374 9.29427 0.083374C6.42236 0.083374 4.08594 2.4198 4.08594 5.29171H0.179688V17.6615C0.179688 19.4593 1.63708 20.9167 3.4349 20.9167H15.1536C16.9515 20.9167 18.4089 19.4593 18.4089 17.6615V5.29171H14.5026ZM9.29427 2.0365C11.0892 2.0365 12.5495 3.49679 12.5495 5.29171H6.03906C6.03906 3.49679 7.49935 2.0365 9.29427 2.0365ZM16.4557 17.6615C16.4557 18.3795 15.8716 18.9636 15.1536 18.9636H3.4349C2.71692 18.9636 2.13281 18.3795 2.13281 17.6615V7.24483H4.08594V8.87244C4.08594 9.41178 4.52315 9.849 5.0625 9.849C5.60185 9.849 6.03906 9.41178 6.03906 8.87244V7.24483H12.5495V8.87244C12.5495 9.41178 12.9867 9.849 13.526 9.849C14.0654 9.849 14.5026 9.41178 14.5026 8.87244V7.24483H16.4557V17.6615Z"
              fill="#484848"
              stroke="#484848"
              stroke-width="0.0406901"
            />
          </svg>
          <span className="bg-[#FF0606] px-2 text-white rounded-full">{selectedProducts.length}</span>
        </div>
      </div>
      <SwiperSlideShop />
      <div className="container flex items-start justify-between p-10">
        <div className=" grid grid-cols-3 gap-10" id="productsSection">
          {filteredProducts.length > 0 ? (
            <>
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className=" p-5 border border-[#fff0] rounded-lg hover:border-[#0000003B] transition-all "
                >
                  <div className="w-[250px] h-[276.744px]">
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
                        handleBuyClick(
                          product.id,
                          product.category,
                          product.type
                        )
                      }
                    >
                      {selectedProducts.find((item) => item.id === product.id)
                        ? "حذف"
                        : "خرید"}
                    </button>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              <p>محصول مورد نظر یافت نشد</p>
            </>
          )}
        </div>
        <div className="flex items-start gap-5 flex-col p-5">
          <div className=" border-b ">
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
          </div>
          <label>
            <input
              type="checkbox"
              checked={selectedType === "pants"}
              onChange={() => handleCheckboxChange("type", "pants")}
              className={`hidden ${
                selectedType === "pants" ? "checked:bg-[#C5E3FF]" : ""
              }`}
            />
            <div
              className={`cursor-pointer  w-[250px] bg-gray-200 p-3 rounded-md ${
                selectedType === "pants" ? "bg-[#C5E3FF]" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <p>شلوار </p>
                <div>
                  <img src="/svg/p.svg" alt="" />
                </div>
              </div>
            </div>
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedType === "shirts"}
              onChange={() => handleCheckboxChange("type", "shirts")}
              className={`hidden ${
                selectedType === "shirts" ? "checked:bg-[#C5E3FF]" : ""
              }`}
            />
            <div
              className={`cursor-pointer  w-[250px] bg-gray-200 p-3 rounded-md ${
                selectedType === "shirts" ? "bg-[#C5E3FF]" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <p>تی شرت </p>
                <div>
                  <img src="/svg/t.svg" alt="" />
                </div>
              </div>
            </div>
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
