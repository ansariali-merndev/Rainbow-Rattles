import React from "react";

type props = {
  text: string;
  subText: string;
};

export const Heading = ({ text, subText }: props) => {
  return (
    <div className="my-6 sm:my-12 md:my-16">
      <h2 className="font-extrabold text-lg sm:text-2xl lg:text-4xl text-center">
        {text}
      </h2>
      <p className="text-center text-xs sm:text-sm md:text-base">{subText}</p>
    </div>
  );
};
