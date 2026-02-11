import { FaWhatsapp } from "react-icons/fa";

export const WhatsappButton = () => {
  const phoneNumber = "+918293848267"; // include country code

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 z-[100] right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};
