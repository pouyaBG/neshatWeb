"use client"
import Link from "next/link";
import { useCart } from "@/provider/cart";

const Cart = () => {
  const { selectedProducts } = useCart();
  console.log(selectedProducts);
  return (
    <div>
      <h1>سبد خرید</h1>
      {selectedProducts?.length > 0 ? (
        <ul>
          {selectedProducts.map((product) => (
            <li key={product.id}>
              {`Product ${product.id} (Category: ${product.category}, Type: ${product.type}) - Quantity: ${product.quantity}`}
            </li>
          ))}
        </ul>
      ) : (
        <p>سبد خرید شما خالی است.</p>
      )}
      <div>
        <Link href="/checkout">پرداخت</Link>
      </div>
    </div>
  );
};

export default Cart;
