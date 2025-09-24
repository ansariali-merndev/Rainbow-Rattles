import { StaticImageData } from "next/image";
import fe1 from "../assets/features1.webp";
import fe2 from "../assets/features2.webp";
import fe3 from "../assets/features3.webp";
import fe4 from "../assets/features4.webp";

import b1 from "../assets/best1.webp";
import b2 from "../assets/best2.webp";
import b3 from "../assets/best3.webp";
import b4 from "../assets/best4.webp";

import n1 from "../assets/new1.webp";
import n2 from "../assets/new2.webp";
import n3 from "../assets/new3.webp";
import n4 from "../assets/new4.webp";

export interface FeaturesType {
  id: number;
  img: StaticImageData;
  title: string;
  price: number;
}

export const newArrival: FeaturesType[] = [
  { id: 1, img: n1, title: "Kids Toy Set", price: 15 },
  { id: 2, img: n2, title: "Creative Toy Pack", price: 18 },
  { id: 3, img: n3, title: "Fun Play Toy", price: 12 },
  { id: 4, img: n4, title: "Classic Kids Toy", price: 20 },
];

export const bestSeller: FeaturesType[] = [
  { id: 1, img: b1, title: "Popular Kids Toy", price: 25 },
  { id: 2, img: b2, title: "Best Play Toy", price: 30 },
  { id: 3, img: b3, title: "Top Rated Toy", price: 28 },
  { id: 4, img: b4, title: "All-time Favorite Toy", price: 35 },
];

export const FeaturesData: FeaturesType[] = [
  { id: 1, img: fe1, title: "Durable Kids Toy", price: 22 },
  { id: 2, img: fe2, title: "Educational Toy", price: 27 },
  { id: 3, img: fe3, title: "Fun Learning Toy", price: 32 },
  { id: 4, img: fe4, title: "Playtime Essential Toy", price: 19 },
];
