import Image from "next/image";
import toolbar from "../../assets/Toolbar.png";

export const Toolbox = () => {
  return (
    <div className="max-w-full overflow-hidden">
      <Image src={toolbar} alt="toolbar" priority />
      <div className="w-60 h-2 sm:h-4 md:h-5 lg:h-8 bg-[#0F83B2] absolute top-0 right-10 md:right-20"></div>
    </div>
  );
};
