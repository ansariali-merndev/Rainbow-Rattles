import { FeaturesType } from "@/utils/featuresSection";
import Image from "next/image";
import React from "react";

export const PicksCard = ({ data }: { data: FeaturesType[] }) => {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
      {data.map((item) => (
        <li
          style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
          key={item.id}
          className="flex flex-col justify-center items-center h-50 p-2 border border-rose-200 rounded-md"
        >
          <Image
            src={item.img}
            alt="Image"
            priority
            className="min-h-16 max-h-45 w-auto"
          />
          <div className="mt-2">
            <h2 className="font-semibold text-sm">{item.title}</h2>
            <p className="text-xs">${item.price}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
