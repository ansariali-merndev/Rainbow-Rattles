import Image from "next/image";
import ft from "../../assets/Footer.png";

export const Footer = () => {
  return (
    <footer className="relative w-full h-40 sm:h-60 md:h-70 lg:h-110">
      <Image src={ft} alt="ft" fill={true} className="object-cover" />
    </footer>
  );
};
