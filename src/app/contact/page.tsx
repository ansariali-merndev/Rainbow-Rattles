import { ContactForm } from "@/components/blocks/ContactForm";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const contactDetail = [
  { icon: FaEnvelope, text: "Phone number", val: "123-456-7868" },
  { icon: FaPhone, text: "Email", val: "Info@example.com" },
  {
    icon: FaMapMarkerAlt,
    text: "Address place",
    val: "1930 marigold lane, way Miami, Florida USA",
  },
];

export default function Contact() {
  return (
    <section>
      <h2 className="text-xl md:text-2xl font-extrabold my-6">Contact</h2>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
        {contactDetail.map(({ icon: Icon, text, val }) => (
          <li
            key={text}
            className="text-[#0F83B2] flex flex-col justify-center items-center w-full md:w-sm rounded-md border border-rose-300 mx-auto py-4"
          >
            <Icon fill="#0F83B2" size={20} />
            <p>{text}</p>
            <p>{val}</p>
          </li>
        ))}
      </ul>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114964.38937668597!2d-80.307795923581!3d25.782545374363384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2sMiami%2C%20FL%2C%20USA!5e0!3m2!1sen!2sin!4v1758957282585!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="md:h-full w-full"
        ></iframe>
        <ContactForm />
      </div>
    </section>
  );
}
