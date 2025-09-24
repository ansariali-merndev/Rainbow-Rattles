import { VectorData } from "@/utils/constant";
import Image from "next/image";

export const Vector = () => {
  return (
    <section className="my-16 md:my-26 grid grid-cols-1 md:grid-cols-3 gap-8">
      {VectorData.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center justify-center text-center p-8 border border-rose-200 rounded-md"
          style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
        >
          <div className="h-20">
            <Image src={item.img} alt="Image" priority />
          </div>
          <h2
            style={{
              color: item.color,
            }}
            className="font-extrabold md:text-xl mt-2"
          >
            {item.title}
          </h2>
          <p>{item.para}</p>
        </div>
      ))}
    </section>
  );
};
