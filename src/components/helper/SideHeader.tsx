import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import search from "../../assets/search.png";
import Image from "next/image";
import { Sidebar } from "../blocks/Sidebar";

export const SideHeader = () => {
  return (
    <div className="flex items-center gap-6 h-full pb-1.5">
      <div className="border border-gray-400 flex gap-1 items-center rounded-3xl cursor-pointer">
        <input
          type="text"
          className="outline-none cursor-pointer w-26 sm:w-34 md:w-auto search-input"
          readOnly
          placeholder="  Search"
          name="search"
        />
        <Image
          src={search}
          alt="search"
          priority
          className="w-6 h-6 sm:w-9 sm:h-9"
        />
      </div>
      <Link href={"/cart"} className="relative">
        <FaShoppingCart size={22} className="text-gray-600" />
        <div className="absolute -top-2 -right-2 bg-neutral-700 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
          0
        </div>
      </Link>
      <Sidebar />
    </div>
  );
};
