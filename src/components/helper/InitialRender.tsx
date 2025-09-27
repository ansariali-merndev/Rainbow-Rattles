"use client";

import { CartType, initCartData } from "@/lib/slices/CartSlices";
import { TypeStore } from "@/lib/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const InitialRender = () => {
  const cart = useSelector((s: TypeStore) => s.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const localData = localStorage.getItem("cart");
    if (localData) {
      const data: CartType[] = JSON.parse(localData);
      dispatch(initCartData(data));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return <></>;
};
