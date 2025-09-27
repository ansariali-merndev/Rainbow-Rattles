"use client";

import { Star } from "@/components/reusables/Star";
import Image from "next/image";
import { DefaultSorting } from "@/components/blocks/DefaultSorting";
import { useDispatch, useSelector } from "react-redux";
import { TypeStore } from "@/lib/store";
import { useEffect } from "react";
import { setTotalPages } from "@/lib/slices/PageableSlices";
import { ITEM_PER_PAGE } from "@/utils/constant";
import { CartButton } from "../blocks/CartButton";
import { WishlistButton } from "../blocks/WishlistButton";

export const ProductListng = () => {
  const product = useSelector((s: TypeStore) => s.product);
  const pages = useSelector((s: TypeStore) => s.pageable);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTotalPages(Math.ceil(product.length / ITEM_PER_PAGE)));
  }, [product, dispatch]);

  return (
    <ul className="grid grid-cols-1 gap-8 col-span-2 mt-12 md:mt-0 relative pt-0">
      <DefaultSorting />
      {product.slice(pages.firstIdx, pages.lastIdx).map((item, idx) => (
        <li
          key={`${item.id}-${idx}`}
          className="grid grid-cols-1 md:grid-cols-4 p-7 rounded-md gap-2 md:gap-26"
          style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
        >
          <div className="w-50 h-50 flex items-center justify-center col-span-1 border border-gray-300 rounded-md">
            <Image
              src={item.img}
              alt="shop-data"
              priority
              className="h-45 w-45"
            />
          </div>
          <div className="col-span-3">
            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-xl">{item.title}</h2>
              <p className="text-sm">
                {item.description.slice(0, 180)}{" "}
                {item.description.length > 180 && "..."}
              </p>
              <p>{item.category}</p>
              <p className="text-xl md:text-2xl font-extrabold">
                ${item.price}
              </p>
              <Star rating={item.rating} />
            </div>
            <div className="mt-8 flex gap-4 items-center">
              <CartButton itemId={item.id} />
              <WishlistButton itemId={item.id} />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
