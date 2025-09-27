"use client";

import { TypeStore } from "@/lib/store";
import { ShopData, ShopType } from "@/utils/featuresSection";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "@/lib/slices/WishlistSlice";
import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import { CartButton } from "@/components/blocks/CartButton";
import { NoProduct } from "@/components/reusables/NoProduct";
import { handleToastSwal } from "@/utils/Swal";

export default function Wishlist() {
  const wishlist = useSelector((s: TypeStore) => s.wishlist);
  const [data, setData] = useState<ShopType[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setData(
      ShopData.filter((item) => wishlist.some((val) => val.id === item.id))
    );
  }, [wishlist]);

  const handleDelete = (id: number) => {
    handleToastSwal("info", "The item has been removed from your wishlist.");
    dispatch(removeFromWishlist(id));
  };

  return (
    <section className="my-6">
      <h2 className="text-xl md:text-3xl font-extrabold">Your Wishlist</h2>
      <div className="hidden bg-[#EAEAEA] md:grid grid-cols-4 p-2 mt-2 text-center">
        <p className="col-span-2 text-start">Product</p>
        <p>Price</p>
        <p>Actions</p>
      </div>

      {data.length === 0 ? (
        <NoProduct />
      ) : (
        <ul className="my-6 space-y-4">
          {data.map((item) => (
            <li
              key={item.id}
              className="border-b rounded-lg flex flex-col gap-4 md:grid md:grid-cols-4 md:items-center md:text-center relative p-4"
            >
              {/* Image + Title */}
              <div className="flex flex-col md:flex-row md:items-center gap-4 col-span-2 text-start">
                <div className="flex items-center justify-center">
                  <Image
                    src={item.img}
                    alt={item.title}
                    className="object-contain rounded-lg h-40 w-40"
                  />
                </div>
                <p className="text-lg font-semibold md:font-extrabold">
                  {item.title}
                </p>
              </div>

              {/* Price */}
              <p className="text-gray-700 font-medium">${item.price}</p>

              {/* Actions */}
              <div className="flex items-center md:justify-center gap-3">
                <CartButton itemId={item.id} />
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-gray-600 text-lg absolute top-2 right-4 cursor-pointer"
                >
                  <FaTrash />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
