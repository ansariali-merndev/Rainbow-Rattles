import { Heading } from "../reusables/Heading";
import { PhotoshopData } from "../../utils/PhotoShop";
import Image from "next/image";

export const Photoshop = () => {
  return (
    <div>
      <Heading text="Recent photoshoots" subText="Check gallery" />
      <ul className="grid grid-cols-4">
        {PhotoshopData.map((item) => (
          <li key={item.id}>
            <Image src={item.img} alt="item" priority />
          </li>
        ))}
      </ul>
    </div>
  );
};
