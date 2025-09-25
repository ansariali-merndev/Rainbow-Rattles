import { StaticImageData } from "next/image";

// ===== Imports =====
import b1 from "../assets/best1.webp";
import b2 from "../assets/best2.webp";
import b3 from "../assets/best3.webp";
import b4 from "../assets/best4.webp";

import fe1 from "../assets/features1.webp";
import fe2 from "../assets/features2.webp";
import fe3 from "../assets/features3.webp";
import fe4 from "../assets/features4.webp";

import n1 from "../assets/new1.webp";
import n2 from "../assets/new2.webp";
import n3 from "../assets/new3.webp";
import n4 from "../assets/new4.webp";

import p1 from "../assets/product1 (1).png";
import p2 from "../assets/product1 (2).png";
import p3 from "../assets/product1 (3).png";

// ===== Interfaces =====
export interface ShopType {
  id: number;
  img: StaticImageData;
  title: string;
  description: string;
  price: number;
  rating: number;
  category: string; // 👈 new field
}

export interface FeaturesType {
  id: number;
  img: StaticImageData;
  title: string;
  price: number;
}

// ===== Shop Data =====
export const ShopData: ShopType[] = [
  {
    id: 1,
    img: b1,
    title: "Water Play Set",
    description:
      "An exciting water-based playset designed for endless fun. Kids can slide boats, race through water channels, and explore interactive play. Perfect for both outdoor and indoor enjoyment.",
    price: 30,
    rating: 5,
    category: "Outdoor Play",
  },
  {
    id: 2,
    img: b2,
    title: "Remote Control Helicopter",
    description:
      "Durable RC helicopter toy built with lightweight materials for smooth flying. Provides hours of entertainment with easy controls for kids. Great for improving hand-eye coordination.",
    price: 45,
    rating: 4,
    category: "Vehicles",
  },
  {
    id: 3,
    img: b3,
    title: "Pink Doll House",
    description:
      "A beautiful doll house designed with intricate details for imaginative play. Encourages kids to build creative stories and roleplay. Sturdy and colorful design makes it a timeless toy.",
    price: 50,
    rating: 5,
    category: "Pretend Play",
  },
  {
    id: 4,
    img: b4,
    title: "Kids Karaoke Mic",
    description:
      "Colorful karaoke microphone toy with built-in music. Perfect for little singers to enjoy singing and dancing. Lightweight and safe for kids to hold during playtime.",
    price: 25,
    rating: 4,
    category: "Music & Fun",
  },
  {
    id: 5,
    img: fe1,
    title: "Dancing Cactus",
    description:
      "An interactive dancing cactus that sings and grooves with music. Brings laughter and joy with its funny moves. A perfect entertainer for toddlers and small kids.",
    price: 22,
    rating: 5,
    category: "Interactive Toys",
  },
  {
    id: 6,
    img: fe2,
    title: "Tricycle for Kids",
    description:
      "A safe and sturdy tricycle designed for toddlers. Encourages outdoor activity and helps in building motor skills. Bright design and comfortable seat make it kid-friendly.",
    price: 40,
    rating: 4,
    category: "Outdoor Ride",
  },
  {
    id: 7,
    img: fe3,
    title: "Blue Doll House",
    description:
      "A colorful doll house with spacious rooms for creative pretend play. Kids can enjoy endless storytelling with dolls and accessories. Made from durable materials for long-lasting fun.",
    price: 48,
    rating: 5,
    category: "Pretend Play",
  },
  {
    id: 8,
    img: fe4,
    title: "Monster Truck Set",
    description:
      "A pack of rugged monster trucks for adventurous kids. Designed for off-road style play with durable wheels. Great for racing, stunts, and imaginative adventures.",
    price: 35,
    rating: 4,
    category: "Vehicles",
  },
  {
    id: 9,
    img: n1,
    title: "Lion Baby Gym",
    description:
      "Activity gym with a playful lion theme and hanging toys. Encourages babies to kick, reach, and grasp. Soft, safe, and perfect for sensory development.",
    price: 28,
    rating: 5,
    category: "Baby Essentials",
  },
  {
    id: 10,
    img: n2,
    title: "Baby Play Mat",
    description:
      "A comfortable and colorful play mat with attached toys and arches. Helps in early learning and motor skill development. Lightweight and foldable for easy storage.",
    price: 32,
    rating: 4,
    category: "Baby Essentials",
  },
  {
    id: 11,
    img: n3,
    title: "Musical Keyboard Toy",
    description:
      "Mini keyboard toy designed for young music lovers. Produces fun sounds and tunes to spark creativity. Helps kids learn rhythm and enjoy musical playtime.",
    price: 20,
    rating: 4,
    category: "Music & Fun",
  },
  {
    id: 12,
    img: n4,
    title: "Animal Figurine Set",
    description:
      "Set of colorful animal figurines designed for learning and fun. Helps kids recognize animals while improving creativity. Perfect for storytelling and roleplay games.",
    price: 18,
    rating: 5,
    category: "Learning Toys",
  },
  {
    id: 13,
    img: p1,
    title: "Building Blocks Set",
    description:
      "Educational building blocks that boost creativity and problem-solving skills. Bright colors and shapes make them engaging for toddlers. A classic toy for endless play.",
    price: 26,
    rating: 5,
    category: "Learning Toys",
  },
  {
    id: 14,
    img: p2,
    title: "Cash Register Toy",
    description:
      "Pretend play cash register with realistic buttons and play money. Encourages roleplay while teaching basic math. Perfect for little shopkeepers in training.",
    price: 22,
    rating: 4,
    category: "Pretend Play",
  },
  {
    id: 15,
    img: p3,
    title: "Color Sorting Blocks",
    description:
      "Fun and educational toy designed to teach kids about colors and shapes. Enhances problem-solving and motor skills. Safe, durable, and engaging for toddlers.",
    price: 24,
    rating: 5,
    category: "Learning Toys",
  },
];

// ===== New Arrivals =====
export const newArrival: FeaturesType[] = [
  { id: 1, img: n1, title: "Lion Baby Gym", price: 28 },
  { id: 2, img: n2, title: "Baby Play Mat", price: 32 },
  { id: 3, img: n3, title: "Musical Keyboard Toy", price: 20 },
  { id: 4, img: n4, title: "Animal Figurine Set", price: 18 },
];

// ===== Best Sellers =====
export const bestSeller: FeaturesType[] = [
  { id: 1, img: b1, title: "Water Play Set", price: 30 },
  { id: 2, img: b2, title: "Remote Control Helicopter", price: 45 },
  { id: 3, img: b3, title: "Pink Doll House", price: 50 },
  { id: 4, img: b4, title: "Kids Karaoke Mic", price: 25 },
];

// ===== Features =====
export const FeaturesData: FeaturesType[] = [
  { id: 1, img: fe1, title: "Dancing Cactus", price: 22 },
  { id: 2, img: fe2, title: "Tricycle for Kids", price: 40 },
  { id: 3, img: fe3, title: "Blue Doll House", price: 48 },
  { id: 4, img: fe4, title: "Monster Truck Set", price: 35 },
];
