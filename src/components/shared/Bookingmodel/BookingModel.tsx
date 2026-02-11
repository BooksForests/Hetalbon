/* eslint-disable @typescript-eslint/no-explicit-any */
import { IoClose } from "react-icons/io5";

const BookingModel = ({ isOpen, setIsOpen }: any) => {
  return (
    <>
      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white rounded-2xl w-[90%] max-w-md shadow-2xl">
            {/* Top Section with Icon and Pink Background */}
            <div className=" rounded-t-2xl px-6 py-6 relative">
              <div className="flex justify-center">
                <div className="bg-white ">
                  <img
                    className="w-56"
                    src="https://res.cloudinary.com/diecfwnp9/image/upload/v1753872401/Confirmed-bro_dm26jd.png"
                    alt=""
                  />
                </div>
              </div>
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white bg-gray-400 hover:bg-gray-500 rounded-full p-1"
              >
                <IoClose className="w-5 h-5" />
              </button>
            </div>

            {/* Message Content */}
            {/* Message Content */}
            <div className="px-6 py-5 -mt-10 text-center">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Booking Confirmed!
              </h2>
              <p className="text-gray-600 text-sm mb-6">
                Woohoo! Your booking is locked in.
                <br /> Our contact person will reach out to you shortly.
              </p>

              {/* Action Buttons */}
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => {
                    // Handle next steps here
                    setIsOpen(false);
                  }}
                  className="bg-[#b87a00] hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg"
                >
                  Awesome, Got It!
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookingModel;
