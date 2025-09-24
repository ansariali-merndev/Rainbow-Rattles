import Image from "next/image";
import star from "../../assets/star.png";

export const Star = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1 items-center">
      {Array.from({ length: rating }).map((_, i) => (
        <Image key={i} src={star} alt="star" width={20} height={20} priority />
      ))}
    </div>
  );
};
