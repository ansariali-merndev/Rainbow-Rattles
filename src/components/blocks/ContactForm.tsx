import React from "react";

const formData = [
  { name: "name", type: "text", placeHolder: "Your Name" },
  { name: "phone", type: "text", placeHolder: "Phone Number" },
  { name: "email", type: "email", placeHolder: "Email Address" },
];

export const ContactForm = () => {
  return (
    <form className="flex flex-col gap-8 my-8">
      <h2 className="font-extrabold text-2xl md:text-4xl">Contact Us</h2>
      {formData.map((item) => (
        <input
          key={item.name}
          type={item.type}
          placeholder={item.placeHolder}
          name={item.name}
          required
          autoComplete="off"
          className="w-full border border-gray-500 outline-none rounded-md px-3 py-1.5"
        />
      ))}
      <textarea
        placeholder="Write your comment here..."
        name="comment"
        rows={4}
        className="w-full border border-gray-500 outline-none rounded-md px-3 py-1.5"
      />

      <button className="bg-[#0F83B2] w-fit px-4 py-1.5 rounded-md text-[#fff]">
        Send
      </button>
    </form>
  );
};
