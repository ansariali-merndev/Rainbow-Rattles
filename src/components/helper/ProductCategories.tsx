"use client";

import { filterByCategories } from "@/lib/slices/ProductSlices";
import { ShopData } from "@/utils/featuresSection";
import React, { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { useDispatch } from "react-redux";

export const ProductCategories = () => {
  const categories = [...new Set(ShopData.map((item) => item.category))];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const dispatch = useDispatch();

  const handleSelectedCategory = (item: string, checked: boolean) => {
    if (checked) {
      setSelectedCategory((prev) => [...prev, item]);
    } else {
      setSelectedCategory((prev) => prev.filter((c) => c !== item));
    }
  };

  useEffect(() => {
    dispatch(filterByCategories(selectedCategory));
    console.log(selectedCategory);
  }, [dispatch, selectedCategory]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <aside
      className={`border py-4 px-4 md:px-6 ${
        isOpen ? "h-fit" : "h-15"
      } col-span-1 lg:h-fit border-gray-300 w-full`}
    >
      <div className="flex items-center gap-1">
        <h2 className="font-extrabold text-lg md:text-xl">
          Product Categories
        </h2>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer lg:hidden"
        >
          <FaChevronRight
            className={`transition-transform duration-200 ${
              isOpen ? "rotate-90" : "rotate-0"
            }`}
          />
        </div>
      </div>
      <div
        className={`transition-opacity duration-300 ease-in-out lg:opacity-100 visible ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className={`my-4 md:my-8 flex flex-col gap-2`}>
          {categories.map((item) => (
            <li key={`${item} - abc`} className="flex gap-2 items-center">
              <input
                type="checkbox"
                name={`${item}`}
                checked={selectedCategory.includes(item)}
                onChange={(e) => handleSelectedCategory(item, e.target.checked)}
              />
              <p className="text-md md:text-lg">{item}</p>
            </li>
          ))}
        </ul>
        <div className="grid my-7">
          <label htmlFor="price">Filter by Price</label>
          <input type="range" name="price" className="w-full" />
          <div className="text-[10px] md:text-md flex items-center justify-between">
            <p>$2.00</p>
            <p>$200.00</p>
          </div>
        </div>
      </div>
    </aside>
  );
};
