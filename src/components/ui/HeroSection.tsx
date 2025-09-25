import { Baloo_Bhaina_2 } from "next/font/google";
import Image from "next/image";
import hero from "../../assets/hero.png";
import Link from "next/link";

const baloo = Baloo_Bhaina_2({
  weight: "400",
  subsets: ["latin"],
});

export const HeroSection = () => {
  return (
    <section className="relative">
      <Image src={hero} alt="Hero" priority />
      <div className="absolute top-10 sm:top-1/3 left-2/4 text-xs text-gray-600">
        <h2
          className={`text-lg sm:text-2xl md:text-6xl ${baloo.className} text-[#1096B5] mb-1 md:mb-4`}
        >
          Play, learn, & grow!
        </h2>
        <p className="text-[7px] sm:text-sm md:text-base">
          Crafting smiles with every toy, made for learning, fun, and growth
        </p>
        <div className="mt-6 md:mt-10">
          <Link
            href={"/product"}
            className="bg-[#FFE926] text-[#000] px-4 py-1 rounded-md md:text-xl cursor-pointer"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};
