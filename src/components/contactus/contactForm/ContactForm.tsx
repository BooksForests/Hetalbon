/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { FiMail } from "react-icons/fi";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { url } from "../../../config/config";

const ContactUsForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    sendCopy: false,
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked }: any = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // prosenjit.kpa@gmail.com,
    try {
      // 1. Submit to backend API
      const backendResponse = await fetch(`${url}/api/v1/contact-form/submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          comment: formData.message,
        }),
      });

      // 2. Submit to email API (FormSubmit)
      const emailResponse = await fetch(
        "https://formsubmit.co/ajax/enquiry@hetalbon.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...formData,
            _cc: "prosenjit.kpa@gmail.com",
          }),
        }
      );

      if (backendResponse.ok && emailResponse.ok) {
        navigate("/thanks-for-contact");
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Background Image / Map */}
      <div className="w-full h-80 md:h-96 relative">
        <iframe
          className="absolute inset-0 w-full h-full object-cover"
          height="100%"
          width="100%"
          title="map"
          style={{ filter: "opacity(0.8)" }}
          src="https://maps.google.com/maps?q=22.0906161,88.7637649&z=15&output=embed"
        />
      </div>

      {/* Floating Contact Form */}
      <div className="max-w-6xl mx-auto px-4 mt-10 sm:-mt-36 relative z-10">
        <form
          onSubmit={handleSubmit}
          className="bg-white/70 backdrop-blur-md rounded-2xl p-10 shadow-xl border border-gray-100 text-gray-800"
        >
          <div className="grid md:grid-cols-2 gap-10">
            {/* Form */}
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full bg-white/50 text-gray-800 border border-gray-300 px-4 py-3 mb-4 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email address"
                className="w-full bg-white/50 text-gray-800 border border-gray-300 px-4 py-3 mb-4 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="number"
                name="phone"
                value={formData.phone}
                required
                onChange={handleChange}
                placeholder="Phone number"
                className="w-full bg-white/50 text-gray-800 border border-gray-300 px-4 py-3 mb-4 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className="w-full bg-white/50 text-gray-800 border border-gray-300 px-4 py-3 mb-4 h-28 rounded-md placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-800 hover:bg-black text-white py-3 rounded-xl font-semibold transition"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>

            {/* Contact Info */}
            <div className="grid sm:grid-cols-2 gap-6 text-sm">
              {[
                {
                  icon: <FaMapLocationDot size={24} />,
                  title: "Address",
                  email: "",
                  address:
                    "Sundarban National Park, Bali Hatkhola, 9, Bally, Gosaba, West Bengal 743370",
                },
                {
                  icon: <FiMail size={24} />,
                  title: "Enquiry email",
                  email: "enquiry@hetalbon.com",
                  phone: "",
                },
                {
                  icon: <MdOutlineSupportAgent size={24} />,
                  title: "Contact Number",
                  phone1: "+918293848267",
                  phone2: "+917812065625",
                  phone: "+919382511947",
                },
                {
                  icon: <FiMail size={24} />,
                  title: "Help Support",
                  email: "enquiry@hetalbon.com",
                  phone: "",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/60 p-4 h-40 rounded-xl border border-gray-200 flex flex-col gap-1 -sm"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-white bg-green-700 p-2 rounded-md">
                      {item.icon}
                    </div>
                    <h4 className="font-semibold text-gray-900">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-gray-500">
                    {item.address ? (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-700 hover:underline"
                      >
                        {item.address}
                      </a>
                    ) : null}
                  </p>
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${item.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {item.email}
                  </a>
                  <p className="text-gray-500">
                    {item.phone1 ? (
                      <a
                        href={`tel:${item.phone1.replace(/[^0-9]/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-700 hover:underline"
                      >
                        {item.phone1}
                      </a>
                    ) : null}
                  </p>
                  <p className="text-gray-500">
                    {item.phone2 ? (
                      <a
                        href={`tel:${item.phone2.replace(/[^0-9]/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-700 hover:underline"
                      >
                        {item.phone2}
                      </a>
                    ) : null}
                  </p>
                  <p className="text-gray-500">
                    {item.phone ? (
                      <a
                        href={`tel:${item.phone.replace(/[^0-9]/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-700 hover:underline"
                      >
                        {item.phone}
                      </a>
                    ) : null}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUsForm;
