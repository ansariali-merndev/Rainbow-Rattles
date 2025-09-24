import Image from "next/image";
import b1 from "../../assets/banner 1.png";
import b2 from "../../assets/Banner 2.png";
export const Banner = () => {
  return (
    <section className="my-6 md:my-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
      <Image src={b1} alt="banner 1" priority />
      <Image src={b2} alt="banner 2" priority />
    </section>
  );
};
