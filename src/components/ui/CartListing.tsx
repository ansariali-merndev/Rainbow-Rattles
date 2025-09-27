"use client";

import { TypeStore } from "@/lib/store";
import { ShopData, ShopType } from "@/utils/featuresSection";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Card } from "../helper/Card";
import { NoProduct } from "../reusables/NoProduct";

export const CartListing = () => {
  const cart = useSelector((s: TypeStore) => s.cart);
  const [data, setData] = useState<ShopType[]>([]);

  useEffect(() => {
    setData(ShopData.filter((item) => cart.some((c) => c.id === item.id)));
  }, [cart]);

  if (data.length === 0) {
    return <NoProduct />;
  }

  return (
    <div>
      <ul className="my-6 space-y-4">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};
