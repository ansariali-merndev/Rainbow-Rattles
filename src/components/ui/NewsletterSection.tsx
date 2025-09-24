import { Heading } from "../reusables/Heading";

export const NewsletterSection = () => {
  return (
    <div>
      <Heading
        text="Newsletter"
        subText="Get 15% off your first purchase! Plus, be the first to know about sales, new product launches, and exclusive offers!"
      />
      <div className="w-fit mx-auto mb-20 space-x-4 flex">
        <input
          type="text"
          className="border border-gray-600 outline-none px-2 py-1 rounded-md w-63"
          name="subscribe"
          placeholder="Enter Your Email"
        />
        <button className="bg-[#0F83B2] px-4 py-1 rounded-md text-[#fff] cursor-pointer">
          Join
        </button>
      </div>
    </div>
  );
};
