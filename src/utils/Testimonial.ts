import { StaticImageData } from "next/image";
import t1 from "../assets/t1.png";
import t2 from "../assets/t2.png";
import t3 from "../assets/t3.png";
import t4 from "../assets/t4.jpeg";
import t5 from "../assets/t5.webp";

export interface TestimonialType {
  id: number;
  name: string;
  location: string;
  review: string;
  img: StaticImageData;
}

export const testimonials: TestimonialType[] = [
  {
    id: 1,
    name: "Sophia M.",
    location: "USA",
    review:
      "The toys are safe, durable, and high quality. My daughter enjoys playing with them every single day with endless joy.",
    img: t1,
  },
  {
    id: 2,
    name: "James R.",
    location: "UK",
    review:
      "I bought a fun play set for my son, and it kept him entertained for hours. Truly worth the money spent here.",
    img: t3,
  },
  {
    id: 3,
    name: "Ayesha K.",
    location: "UAE",
    review:
      "The toys are adorable and child-friendly. Delivery was quick and smooth, the entire experience delightful",
    img: t2,
  },
  {
    id: 4,
    name: "Daniel S.",
    location: "Canada",
    review:
      "I gifted a plush toy for my niece's birthday. The quality were wonderful, and she loved it instantly.",
    img: t5,
  },
  {
    id: 5,
    name: "Ritu Sharma",
    location: "India",
    review:
      "I prioritize safety above everything. These toys are non-toxic, reliable, and bring genuine joy to my kids.",
    img: t4,
  },
];
