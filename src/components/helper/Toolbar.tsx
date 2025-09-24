import Image from "next/image";
import toolbar from "../../assets/Toolbar.png";
import Link from "next/link";

export const Toolbox = () => {
  return (
    <div className="max-w-full overflow-hidden">
      <Image src={toolbar} alt="toolbar" priority />
      <Link
        href={"/login"}
        className="h-4 lg:h-8 w-5 md:w-8 lg:w-16 absolute top-0 md:top-2 right-19 md:right-32  lg:right-52"
      ></Link>
      <Link
        href={"/register"}
        className="h-4 lg:h-8 w-5 md:w-8 lg:w-16 absolute top-0 md:top-2 right-10 md:right-16 lg:right-26"
      ></Link>
    </div>
  );
};
