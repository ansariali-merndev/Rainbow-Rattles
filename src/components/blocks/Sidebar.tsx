"use client";

import { HiMenu } from "react-icons/hi";
import React, { useState } from "react";
import { Navbar } from "../reusables/Navbar";

export const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="lg:hidden">
      <HiMenu
        onClick={() => setOpenSidebar((p) => !p)}
        size={28}
        className="text-gray-600 cursor-pointer"
      />
      <div
        onClick={() => setOpenSidebar(false)}
        className={`bg-black fixed inset-0 z-10 transition-opacity duration-200 ease-in-out ${
          openSidebar ? "opacity-25 visible" : "opacity-0 invisible"
        }`}
      ></div>
      <div
        className={`fixed top-0 left-0 h-screen w-64 flex items-center justify-center bg-gray-300 transition-transform duration-300 ease-in-out z-30 ${
          openSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <p
          className="fixed top-2 right-4 cursor-pointer text-3xl text-gray-500"
          onClick={() => setOpenSidebar(false)}
        >
          &times;
        </p>
        <div onClick={() => setOpenSidebar(false)}>
          <Navbar />
        </div>
      </div>
    </div>
  );
};
