import { BlogData } from "@/utils/Blog";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaRegCalendar } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Blog",
};


export default function Blog() {
  return (
    <section>
      <ul className="space-y-8">
        {BlogData.map((item) => (
          <li
            key={item.id}
            className="p-6 rounded-md bg-rose-100"
            style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
          >
            <Image src={item.img} alt="Item Image" className="h-auto w-full" />
            <div
              className="flex items-center gap-2 h-10 border border-gray-300 w-fit px-5 rounded-md my-4"
              style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
            >
              <FaRegCalendar style={{ paddingBottom: "5px" }} size={20} />
              <p>{new Date(item.date).toLocaleString()}</p>
            </div>
            <h2 className="font-extrabold text-lg md:text-2xl">{item.title}</h2>
            <div>
              {item.description1.slice(0, 200)}...{" "}
              <Link
                href={`/blog/${item.id}`}
                className="text-blue-600 cursor-pointer text-sm"
              >
                Know more
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
