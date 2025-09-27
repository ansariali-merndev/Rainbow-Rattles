"use client";

import React from "react";
import { ProductCategories } from "@/components/helper/ProductCategories";
import { FaChevronRight } from "react-icons/fa";
import { ProductListng } from "@/components/ui/ProductListng";
import { useDispatch, useSelector } from "react-redux";
import { TypeStore } from "@/lib/store";
import { decrementPage, incrementPage } from "@/lib/slices/PageableSlices";


export default function Product() {
  const pages = useSelector((state: TypeStore) => state.pageable);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    if (!pages.isLastPage) {
      dispatch(incrementPage());
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleDecrement = () => {
    if (!pages.isFirstPage) {
      dispatch(decrementPage());
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <React.Fragment>
      <section className="grid grid-cols-1 lg:grid-cols-3 lg:gap-16">
        <ProductCategories />
        <ProductListng />
      </section>
      <div className="flex items-center justify-center my-8 gap-6 text-gray-600">
        <button
          onClick={handleDecrement}
          className="rounded-full border-rose-300 border w-8 h-8 flex items-center justify-center cursor-pointer"
        >
          <FaChevronRight className="rotate-180" />
        </button>
        <p className="font-extrabold">{pages.page}</p>
        <button
          onClick={handleIncrement}
          className="rounded-full border-rose-300 border w-8 h-8 flex items-center justify-center cursor-pointer"
        >
          <FaChevronRight />
        </button>
      </div>
    </React.Fragment>
  );
}
