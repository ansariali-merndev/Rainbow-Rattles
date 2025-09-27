import { useRouter } from "next/navigation";

export const NoProduct = () => {
  const router = useRouter();

  return (
    <section className="h-screen text-center pt-10 font-extrabold text-2xl md:text-4xl">
      <h2>No Product Available</h2>
      <button
        onClick={() => router.push("/product")}
        className="mt-4 bg-[#FFE926] w-full py-3 rounded-md cursor-pointer"
      >
        Continue Shopping
      </button>
    </section>
  );
};
