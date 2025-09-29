import { BackButton } from "@/components/blocks/BackButton";
import Link from "next/link";

export const Error = () => {
  return (
    <section className="my-24 flex flex-col items-center justify-center text-center py-8">
      <h2 className="text-base md:text-2xl font-extrabold">
        Oops! Something went wrong.
      </h2>
      <p className="text-xl md:text-3xl">
        The page you are looking for cannot be found here.
      </p>
      <div className="my-4 flex items-center gap-3">
        <Link
          className="w-full bg-blue-600 cursor-pointer px-4 py-2 text-white"
          href={"/"}
        >
          Home
        </Link>
        <BackButton />
      </div>
    </section>
  );
};

export default Error;
