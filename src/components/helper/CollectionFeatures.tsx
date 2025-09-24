"use client";

import { CollectionFilter } from "@/utils/constant";
import React, { useEffect, useState } from "react";
import { PicksCard } from "../reusables/PicksCard";
import {
  FeaturesData,
  bestSeller,
  FeaturesType,
  newArrival,
} from "@/utils/featuresSection";

export const CollectionFeatures = () => {
  const [activeId, setActiveId] = useState<number>(1);
  const [data, setData] = useState<FeaturesType[]>(FeaturesData);

  useEffect(() => {
    if (activeId === 1) setData(FeaturesData);
    else if (activeId === 2) setData(bestSeller);
    else setData(newArrival);
  }, [activeId]);

  return (
    <div>
      <ul className="w-fit mx-auto flex gap-4 md:gap-12">
        {CollectionFilter.map((item) => (
          <li
            className={`border border-gray-400 rounded-lg px-6 py-1 cursor-pointer text-[9px] sm:text-xs md:text-base text-center ${
              activeId === item.id ? "bg-[#F8EDF8]" : ""
            } `}
            key={item.id}
            onClick={() => setActiveId(item.id)}
          >
            {item.label}
          </li>
        ))}
      </ul>
      <PicksCard data={data} />
    </div>
  );
};
