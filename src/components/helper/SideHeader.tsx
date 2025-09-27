"use client";

import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { Sidebar } from "../blocks/Sidebar";
import { useSelector } from "react-redux";
import { TypeStore } from "@/lib/store";

export const SideHeader = () => {
  const cart = useSelector((s: TypeStore) => s.cart);
  const wishlist = useSelector((s: TypeStore) => s.wishlist);
  return (
    <div className="flex items-center gap-6 h-full pb-1.5 px-2">
      <Link href={"/wishlist"} className="relative">
        <FaHeart size={22} className="text-gray-600" />
        <div className="absolute -top-2 -right-2 bg-neutral-700 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
          {wishlist.length}
        </div>
      </Link>
      <Link href={"/cart"} className="relative">
        <FaShoppingCart size={22} className="text-gray-600" />
        <div className="absolute -top-2 -right-2 bg-neutral-700 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
          {cart.length}
        </div>
      </Link>

      <Sidebar />
    </div>
  );
};
