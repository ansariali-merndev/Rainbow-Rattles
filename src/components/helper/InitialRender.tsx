"use client";

import { CartType, initCartData } from "@/lib/slices/CartSlices";
import { initWishlist, WishlistType } from "@/lib/slices/WishlistSlice";
import { TypeStore } from "@/lib/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const InitialRender = () => {
  const cart = useSelector((s: TypeStore) => s.cart);
  const wishlist = useSelector((s: TypeStore) => s.wishlist);
  const dispatch = useDispatch();

  useEffect(() => {
    const localDataCart = localStorage.getItem("cart");
    const localDataWish = localStorage.getItem("wishlist");
    if (localDataWish) {
      const data: WishlistType[] = JSON.parse(localDataWish);
      dispatch(initWishlist(data));
    }
    if (localDataCart) {
      const data: CartType[] = JSON.parse(localDataCart);
      dispatch(initCartData(data));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return <></>;
};
