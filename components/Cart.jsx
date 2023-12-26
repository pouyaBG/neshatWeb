"use client";
import Link from "next/link";
import { useCart } from "@/provider/cart";
import Image from "next/image";
import { useState } from "react";
import PaymentConfirmationModal from "./modal";

const Cart = () => {
  const { selectedProducts, setSelectedProducts, removeFromCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const totalPrice = selectedProducts.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  const handlePaymentConfirmation = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setSelectedProducts([]);
    setIsModalOpen(false);
  };
  return (
    <div className="container p-10 w-full m-auto">
      <div className="border-b-2 border-[#2594FF] w-fit pb-1">
        <h1 className="text-black  text-[25px] not-italic font-bold leading-6">
          سبد خرید
        </h1>
      </div>
      <div className="flex w-full gap-5 justify-between items-start">
        {selectedProducts?.length > 0 ? (
          <div className="w-full">
            {selectedProducts.map((product) => (
              <div key={product.id} className="  border-b-2 p-1">
                <div className="flex items-start gap-2 p-5">
                  <div className="w-[220px] h-[300px] ml-5">
                    <Image src={product.img} width={700} height={700} />
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="text-black text-[23.723px] not-italic font-medium leading-[normal]">
                      {product.name}
                    </p>
                    <p className="text-[#656565] text-right text-[15px] not-italic font-medium leading-6">
                      موجود در انبار
                    </p>
                    <p className="text-[#656565] text-right text-[15px] not-italic font-medium leading-6">
                      سایز: {product.size}
                    </p>
                    <p className="text-[#656565] text-right text-[15px] not-italic font-medium leading-6">
                      رنگ: {product.color}
                    </p>
                    <p className="text-[#656565] text-right text-[15px] not-italic font-medium leading-6">
                      تعداد: {product.tedad}
                    </p>
                    <p className="text-black text-[20.723px] not-italic font-medium leading-[normal]">
                      {product.price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                      تومان
                    </p>
                    <button
                      className="text-white px-5 py-2 rounded bg-[#FF4040] text-right text-[15px] not-italic font-medium leading-6 cursor-pointer"
                      onClick={() => removeFromCart(product.id)}
                    >
                      حذف از سبد خرید
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full m-auto">
            <p>سبد خرید شما خالی است.</p>
          </div>
        )}
        <div className="bg-white w-[336px]  shadow-[0px_0px_6px_1px_rgba(37,124,255,0.15)] rounded-[15px] p-7 mt-5">
          <div className="flex justify-between w-full">
            <p className="text-neutral-500 text-center text-base not-italic font-medium leading-6">
              قیمت کالا ها ({selectedProducts.length})
            </p>
            <p className="text-neutral-500 text-center text-base not-italic font-medium leading-6">
              {totalPrice} تومان
            </p>
          </div>
          <div className="flex justify-between w-full mt-5">
            <p className="text-neutral-500 text-center text-base not-italic font-medium leading-6">
              جمع کل سبد خرید
            </p>
            <p className="text-neutral-500 text-center text-base not-italic font-medium leading-6">
              {totalPrice} تومان
            </p>
          </div>
          <div
            className="w-full bg-[#59AC49] rounded-[8px] mt-5"
            onClick={handlePaymentConfirmation}
          >
            <Link href="#">
              <p className=" p-2 text-center text-white">پرداخت</p>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <PaymentConfirmationModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onConfirm={handleCloseModal} // You can customize this function as needed
        />
      </div>
    </div>
  );
};

export default Cart;
