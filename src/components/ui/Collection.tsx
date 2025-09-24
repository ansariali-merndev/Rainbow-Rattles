import React from "react";
import { Heading } from "../reusables/Heading";
import { ImageArray } from "@/utils/constant";
import Image from "next/image";
import { CollectionFeatures } from "../helper/CollectionFeatures";

export const Collection = () => {
  return (
    <section>
      <Heading text="Find the Perfect Toy" subText="Our Collections" />
      <ul className="flex items-center justify-between">
        {ImageArray.map((item, idx) => (
          <li key={idx} className="">
            <Image
              src={item.img}
              alt="Image"
              priority
              className="w-auto h-10 sm:h-16 md:h-22 lg:h-30"
            />
          </li>
        ))}
      </ul>
      <Heading
        text="Top picks for your little ones"
        subText="Discover the best toys and outfits perfect for your little ones."
      />
      <CollectionFeatures />
    </section>
  );
};
