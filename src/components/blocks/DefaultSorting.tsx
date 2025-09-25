"use client";

import {
  defaultSorting,
  sortHighToLow,
  sortLowToHigh,
} from "@/lib/slices/ProductSlices";
import { TypeStore } from "@/lib/store";
import { ITEM_PER_PAGE } from "@/utils/constant";
import { useDispatch, useSelector } from "react-redux";

export const DefaultSorting = () => {
  const pages = useSelector((s: TypeStore) => s.pageable);
  const product = useSelector((s: TypeStore) => s.product);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;

    if (value === "LOW_TO_HIGH") {
      dispatch(sortLowToHigh());
    } else if (value === "HIGH_TO_LOW") {
      dispatch(sortHighToLow());
    } else {
      dispatch(defaultSorting());
    }
  };

  return (
    <div className="flex items-center justify-between">
      <select
        className="outline-none border border-gray-200 px-4 py-1"
        onChange={handleChange}
      >
        <option value="DEFAULT">Default Sorting</option>
        <option value="LOW_TO_HIGH">Low To High</option>
        <option value="HIGH_TO_LOW">High To Low</option>
      </select>
      <p className="text-xs md:text-base">
        Showing {pages.firstIdx + 1} to{" "}
        {Math.min(pages.firstIdx + ITEM_PER_PAGE, product.length)} result
      </p>
    </div>
  );
};
