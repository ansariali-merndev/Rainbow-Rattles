"use client";

import { TypeStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const CartTotal = () => {
  const cart = useSelector((s: TypeStore) => s.cart);
  const product = useSelector((s: TypeStore) => s.product);
  const router = useRouter();

  const [subTotal, setSubTotal] = useState(0);
  const shippingFee = 200; // Fixed value
  const grandTotal = subTotal + shippingFee;

  useEffect(() => {
    const total = cart.reduce((acc, c) => {
      const pro = product.find((item) => item.id === c.id);
      if (pro) {
        acc += c.qty * pro.price;
      }
      return acc;
    }, 0);
    setSubTotal(total);
  }, [cart, product]);

  return (
    <section
      className={`flex items-center justify-end ${
        subTotal === 0 ? "hidden" : ""
      }`}
    >
      <div className="w-lg border border-gray-300 p-8">
        <h2 className="font-extrabold text-2xl mb-4">Cart Total</h2>

        <div className="flex items-center justify-between">
          <h2 className="font-extrabold">Sub Total</h2>
          <p className="font-extrabold">${subTotal}</p>
        </div>

        <div className="flex items-center justify-between">
          <h2 className="font-extrabold">Shipping Fee</h2>
          <p className="font-extrabold">${shippingFee}</p>
        </div>

        <div className="flex items-center justify-between border-t mt-2 pt-2">
          <h2 className="font-extrabold">Grand Total</h2>
          <p className="font-extrabold">${grandTotal}</p>
        </div>

        <div className="flex gap-3">
          <button className="mt-4 bg-[#FFE926] w-full py-3 rounded-md cursor-pointer">
            Proceed to checkout
          </button>
          <button
            onClick={() => router.push("/product")}
            className="mt-4 bg-[#FFE926] w-full py-3 rounded-md cursor-pointer"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </section>
  );
};
