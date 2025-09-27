"use client";

import { addToCart, removeFromCart } from "@/lib/slices/CartSlices";
import { TypeStore } from "@/lib/store";
import { handleToastSwal } from "@/utils/Swal";
import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

export const CartButton = ({ itemId }: { itemId: number }) => {
  const cart = useSelector((s: TypeStore) => s.cart);
  const [isCartItem, setIsCartItem] = useState<boolean>(
    cart.some((c) => c.id === itemId)
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setIsCartItem(cart.some((c) => c.id === itemId));
  }, [cart, itemId]);

  const handleCart = () => {
    if (isCartItem) {
      dispatch(removeFromCart(itemId));
      handleToastSwal("info", "Item successfully removed from your cart.");
    } else {
      dispatch(addToCart(itemId));
      handleToastSwal("success", "Item added to your cart successfully!");
    }
  };

  return (
    <button
      onClick={handleCart}
      className="bg-[#0F83B2] text-white px-4 py-1.5 rounded-md cursor-pointer flex items-center justify-center gap-2 text-sm md:text-base"
    >
      <span className="pb-1">
        <FaShoppingCart />
      </span>{" "}
      {!isCartItem ? "Add To Cart" : "Remove From Cart"}
    </button>
  );
};
