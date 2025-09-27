"use client";

import { addToCart, removeFromCart } from "@/lib/slices/CartSlices";
import { TypeStore } from "@/lib/store";
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
    } else {
      dispatch(addToCart(itemId));
    }
  };

  return (
    <button
      onClick={handleCart}
      className="bg-[#0F83B2] text-white px-4 py-1.5 rounded-md cursor-pointer flex items-center justify-center gap-2"
    >
      <span className="pb-1">
        <FaShoppingCart />
      </span>{" "}
      {!isCartItem ? "Add To Cart" : "Remove From Cart"}
    </button>
  );
};
