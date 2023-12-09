"use client";
import Link from "next/link";
import { useCart } from "@/provider/cart";
import Image from "next/image";

const Cart = () => {
  const { selectedProducts } = useCart();
  console.log(selectedProducts);
  return (
    <div className="container p-10 w-full ">
      <div className="border-b-2 border-[#2594FF] w-fit pb-1">
        <h1 className="text-black  text-[25px] not-italic font-bold leading-6">
          سبد خرید
        </h1>
      </div>
      <div>
        {selectedProducts?.length > 0 ? (
          <div>
            {selectedProducts.map((product) => (
              <div key={product.id} className="border-b-2 p-2">
                <div className="flex items-center gap-2 p-5">
                  <div className="w-[118.006px] h-[168px]">
                    <Image src={product.img} width={500} height={500} />
                  </div>
                  <div>
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                    <p>{product.quantity}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>سبد خرید شما خالی است.</p>
        )}
      </div>
      <div>
        <Link href="/checkout">پرداخت</Link>
      </div>
    </div>
  );
};

export default Cart;
