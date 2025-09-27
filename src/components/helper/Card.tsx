"use client";

import { ShopType } from "@/utils/featuresSection";
import { FaTrash } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "@/lib/slices/CartSlices";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { TypeStore } from "@/lib/store";
import { handleToastSwal } from "@/utils/Swal";

export const Card = ({ item }: { item: ShopType }) => {
  const cart = useSelector((s: TypeStore) => s.cart);
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);

  useEffect(() => {
    setQty(cart.find((val) => val.id === item.id)?.qty || 1);
  }, [item.id, cart]);

  const handleDelete = (id: number) => {
    handleToastSwal("info", "Item successfully removed from your cart.");
    dispatch(removeFromCart(id));
  };

  return (
    <li className="border-b p-4 rounded-lg flex flex-col gap-4 md:grid md:grid-cols-5 md:items-center md:justify-center md:text-center relative">
      {/* Image */}
      <div className="h-40 w-40 mx-auto md:mx-0 flex items-center justify-center">
        <Image
          src={item.img}
          alt={item.title}
          className="object-contain rounded-lg"
          priority
        />
      </div>

      {/* Title */}
      <p className="text-lg font-semibold md:font-extrabold">{item.title}</p>

      {/* Price */}
      <p className="text-gray-700 font-medium">${item.price}</p>

      {/* Quantity Controls */}
      <div className="flex items-center gap-4 justify-center">
        <button
          onClick={() => dispatch(decreaseQuantity(item.id))}
          className="border px-3 py-1 rounded hover:bg-gray-200"
        >
          -
        </button>
        <p className="font-bold">{qty}</p>
        <button
          onClick={() => dispatch(increaseQuantity(item.id))}
          className="border px-3 py-1 rounded hover:bg-gray-200"
        >
          +
        </button>
      </div>

      {/* Total */}
      <p className="font-bold text-green-600">${item.price * qty}</p>

      <p
        onClick={() => handleDelete(item.id)}
        className="text-gray-600 absolute top-2 right-6 cursor-pointer"
      >
        <FaTrash />
      </p>
    </li>
  );
};
