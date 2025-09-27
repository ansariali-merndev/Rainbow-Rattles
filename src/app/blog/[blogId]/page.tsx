import { BlogData } from "@/utils/Blog";
import Image from "next/image";
import Link from "next/link";
import { FaRegCalendar } from "react-icons/fa";

interface props {
  blogId: string;
}

export default async function BlogPage({ params }: { params: props }) {
  const { blogId } = await params;

  const item = BlogData.find((f) => f.id === parseInt(blogId));

  if (!item) {
    return <p>Error</p>;
  }

  return (
    <div
      className="p-6 rounded-md bg-rose-100 my-8"
      style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
    >
      <Image src={item.img} alt="title" className="w-full h-auto" />
      <div
        className="flex items-center gap-2 h-10 border border-gray-300 w-fit px-5 rounded-md my-4"
        style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
      >
        <FaRegCalendar style={{ paddingBottom: "5px" }} size={20} />
        <p>{new Date(item.date).toLocaleString()}</p>
      </div>
      <h2 className="font-extrabold text-lg md:text-2xl">{item.title}</h2>
      <div className="space-y-6 my-4">
        <p>{item.description1}</p>
        <p>{item.description2}</p>
        <p>{item.description3}</p>
        <p>{item.description4}</p>
        <p>{item.description5}</p>
        <p>{item.description6}</p>
      </div>
      <Link
        className="bg-[#0F83B2] text-white px-4 py-1.5 rounded-md cursor-pointer flex items-center justify-center gap-2 text-sm md:text-base w-fit"
        href={"/blog"}
      >
        Back
      </Link>
    </div>
  );
}
