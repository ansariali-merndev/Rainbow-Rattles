"use client";

import { useRouter } from "next/navigation";

export const BackButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="w-full bg-blue-600 cursor-pointer px-4 py-2 text-white"
    >
      BackButton
    </button>
  );
};
