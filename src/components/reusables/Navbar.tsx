"use client";

import Link from "next/link";
import { Nav } from "../../utils/constant";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col lg:flex-row items-center gap-16 font-semibold">
      {Nav.map((item, idx) => {
        const isActive = pathname === item.href;

        return (
          <Link
            href={item.href}
            key={`${item.label}-${idx}`}
            className={`transition-all duration-200 border-b-2 ${
              isActive
                ? "border-gray-700 opacity-100 text-gray-700"
                : "border-transparent opacity-70 hover:opacity-80"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
};
