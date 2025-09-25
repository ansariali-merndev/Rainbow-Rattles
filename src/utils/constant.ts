import f1 from "../assets/Frame 42.png";
import f2 from "../assets/Frame 43.png";
import f3 from "../assets/Frame 49.png";
import f4 from "../assets/Frame 50.png";
import f5 from "../assets/Frame 51.png";

import v1 from "../assets/Vector.png";
import v2 from "../assets/Vector-1.png";
import v3 from "../assets/Vector-2.png";

export const VectorData = [
  {
    id: 1,
    img: v1,
    title: "Customer care",
    color: "#12AEE0",
    para: "24h hour follow up",
  },
  {
    id: 2,
    img: v2,
    title: "free ship",
    color: "#E87B16",
    para: " Free shipping for 150$ and up",
  },
  {
    id: 3,
    img: v3,
    title: "Return Policy",
    color: "#06C825",
    para: "Within 7 Days",
  },
];

export const ImageArray = [
  { img: f1 },
  { img: f2 },
  { img: f3 },
  { img: f4 },
  { img: f5 },
];

export const Nav = [
  { label: "Home", href: "/" },
  { label: "Product", href: "/product" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const CollectionFilter = [
  { id: 1, label: "Featured" },
  { id: 2, label: "Best seller" },
  { id: 3, label: "New arrivals" },
];


export const ITEM_PER_PAGE: number = 6;