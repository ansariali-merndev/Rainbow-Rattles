import { Toolbox } from "../helper/Toolbar";
import logo from "../../assets/logo.png";
import Image from "next/image";
import { Navbar } from "../reusables/Navbar";
import { SideHeader } from "../helper/SideHeader";

export const Header = () => {
  return (
    <header>
      <Toolbox />
      <div className="h-[10vh] my-4 flex items-center justify-between">
        <Image src={logo} alt="logo" priority className="h-10 w-auto md:h-16" />
        <div className="hidden lg:inline-block">
          <Navbar />
        </div>
        <SideHeader />
      </div>
    </header>
  );
};
