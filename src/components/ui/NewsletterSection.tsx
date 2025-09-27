"use client";

import { useState } from "react";
import { Heading } from "../reusables/Heading";
import { handleSwal } from "@/utils/Swal";

export const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      handleSwal("error", "Please enter a valid email address to subscribe.");
      return;
    }

    handleSwal(
      "success",
      `Thank you for subscribing! You will now receive exclusive offers and updates at ${email}.`
    );

    setEmail("");
  };

  return (
    <div>
      <Heading
        text="Newsletter"
        subText="Get 15% off your first purchase! Plus, be the first to know about sales, new product launches, and exclusive offers!"
      />
      <form
        onSubmit={handleSubmit}
        className="w-fit mx-auto mb-20 space-x-4 flex"
      >
        <input
          type="text"
          className="border border-gray-600 outline-none px-2 py-1 rounded-md w-63"
          name="subscribe"
          placeholder="Enter Your Email"
          required
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="bg-[#0F83B2] px-4 py-1 rounded-md text-[#fff] cursor-pointer"
        >
          Join
        </button>
      </form>
    </div>
  );
};
