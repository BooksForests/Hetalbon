import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../shared/navbar/Navbar";
import { Helmet } from "react-helmet-async";

const BookingThankPage: React.FC = () => {
  return (
    <div
      className="relative flex flex-col md:flex-row items-center 
    justify-center min-h-screen bg-white text-[#2f3e2f] px-6 md:px-32 overflow-hidden"
    >
      <Helmet>
        <title>Thank You for Booking | Hetalbon</title>
        <meta
          name="description"
          content="Your booking has been confirmed. Thank you for choosing Hetalbon."
        />
        <script>
          {`
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-NJDPL9HD');
    `}
        </script>
      </Helmet>

      <Navbar scrollEffectEnabled={false} />
      {/* Decorative eco shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#3e6b3e]/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#2b4a2b]/10 rounded-full blur-3xl -z-10"></div>

      {/* Left content */}
      <div className="w-full md:w-1/2 animate-fadeIn text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-4xl md:text-5xl  font-bold mb-4 text-[#2b4a2b]">
          Booking Confirmed!
        </h1>
        <p className="text-lg md:text-xl mb-8 leading-relaxed text-[#3e3e3e]">
          Your booking at{" "}
          <span className="font-semibold">Hetalbon Eco Resort</span>
          has been successfully confirmed. We can’t wait to welcome you for a
          relaxing and nature-filled stay. Prepare for an unforgettable
          experience in the heart of the Sundarbans.
        </p>
        <Link
          to="/"
          className="inline-block bg-[#3e6b3e] hover:bg-[#2b4a2b] text-white px-8 py-3 rounded-full text-lg shadow-md transition-all duration-300 hover:shadow-lg"
        >
          Back to Home
        </Link>
      </div>

      {/* Right image */}
      <div className="w-full md:w-1/2 flex justify-center animate-slideIn">
        <img
          src="https://res.cloudinary.com/diecfwnp9/image/upload/v1755332754/Flight_Booking-bro_t7i572.png"
          alt="Booking Success Illustration"
          className="w-80 md:w-[400px] lg:w-[620px]" // Larger sizes for different screens
        />
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 text-sm opacity-70 text-center w-full">
        © {new Date().getFullYear()} Hetalbon Eco Resort — Community-based
        ecotourism in the heart of the Sundarbans
      </footer>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideIn {
            0% { opacity: 0; transform: translateX(40px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.8s ease-out forwards;
          }
          .animate-slideIn {
            animation: slideIn 0.8s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default BookingThankPage;
