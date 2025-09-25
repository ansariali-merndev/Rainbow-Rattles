import React from "react";
import { ProductCategories } from "@/components/helper/ProductCategories";
import { FaChevronRight } from "react-icons/fa";
import { ProductListng } from "@/components/ui/ProductListng";

export default function Product() {
  return (
    <React.Fragment>
      <section className="grid grid-cols-1 lg:grid-cols-3 lg:gap-16">
        <ProductCategories />
        <ProductListng />
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
