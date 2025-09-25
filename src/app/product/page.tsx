import React from "react";
import { ProductCategories } from "@/components/helper/ProductCategories";
import { Star } from "@/components/reusables/Star";
import { ShopData } from "@/utils/featuresSection";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { DefaultSorting } from "@/components/blocks/DefaultSorting";

export default function Product() {
  return (
    <React.Fragment>
      <section className="grid grid-cols-1 lg:grid-cols-3 lg:gap-16">
        <ProductCategories />
        {/* <DefaultSorting /> */}
        <ul className="grid grid-cols-1 gap-8 col-span-2 mt-12 md:mt-0 relative pt-0">
          <DefaultSorting />
          {ShopData.slice(0, 6).map((item, idx) => (
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
                  <p className="text-xl md:text-2xl font-extrabold">
                    ${item.price}
                  </p>
                  <Star rating={item.rating} />
                </div>
                <div className="mt-8 flex gap-4 items-center">
                  <button className="bg-[#0F83B2] text-white px-4 py-1.5 rounded-md cursor-pointer flex items-center justify-center gap-2">
                    <span className="pb-1">
                      <FaShoppingCart />
                    </span>{" "}
                    Add To Cart
                  </button>
                  <button
                    className="px-4 py-1.5 rounded-md bg-[#0F83B2] pb-1 cursor-pointer"
                    style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                  >
                    <FaHeart fill="#fff" size={21} />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <div className="flex items-center justify-center my-8 gap-6 text-gray-600">
        <button className="rounded-full border-rose-300 border w-8 h-8 flex items-center justify-center cursor-pointer">
          <FaChevronRight className="rotate-180" />
        </button>
        <p className="font-extrabold">1</p>
        <button className="rounded-full border-rose-300 border w-8 h-8 flex items-center justify-center cursor-pointer">
          <FaChevronRight />
        </button>
      </div>
    </React.Fragment>
  );
}
