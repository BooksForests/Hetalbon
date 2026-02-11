/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent } from "react";
import { motion } from "framer-motion";
import { IconCalendarCheck, IconInfoCircle } from "@tabler/icons-react";

const ChekoutPayments = ({
  userInfo,
  setUserInfo,
  bookRoom,
  setActiveTab,
}: any) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "name") {
      // allow only letters and spaces
      const regex = /^[a-zA-Z\s]*$/;
      if (!regex.test(value)) return;
    }

    if (name === "phone") {
      // allow only digits, max 10 digits
      const regex = /^[0-9]{0,10}$/;
      if (!regex.test(value)) return;
    }

    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <>
      <div className="w-full flex justify-between px-2 pr-10 mb-5">
        <div
          className="bg-gray-100 w-auto cursor-pointer  px-4 py-1 rounded-lg"
          onClick={() => setActiveTab(1)}
        >
          Back
        </div>
      </div>
      <motion.div
        className="w-full max-w-xl pl-5"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-700 flex gap-2 items-center">
          <IconInfoCircle className="text-yellow-500 text-2xl " size={27} />{" "}
          Enter Your Information
        </h2>
        <div className="flex gap-5 justify-between">
          <motion.input
            type="text"
            name="name"
            value={userInfo.name}
            onChange={handleInputChange}
            placeholder="Name"
            className="border p-3 rounded-lg w-full mb-4 shadow-lg"
            whileFocus={{ scale: 1.05 }}
          />
          <motion.input
            type="text"
            name="phone"
            value={userInfo.phone}
            onChange={handleInputChange}
            placeholder="Phone"
            className="border p-3 rounded-lg w-full mb-4 shadow-lg"
            whileFocus={{ scale: 1.05 }}
          />
        </div>
        <div className="flex gap-5 justify-between">
          <motion.input
            type="email"
            name="email"
            value={userInfo.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="border p-3 rounded-lg w-full mb-4 shadow-lg"
            whileFocus={{ scale: 1.05 }}
          />
        </div>
        <div className="flex gap-5 justify-between">
          <motion.input
            type="text"
            name="Comment"
            value={userInfo.Comment}
            onChange={handleInputChange}
            placeholder="Add your preferences"
            className="border p-3 rounded-lg w-full mb-4 shadow-lg"
            whileFocus={{ scale: 1.05 }}
          />
        </div>
      </motion.div>
      <div className="p-5 sm:w-[50%] text-gray-600 text-xs sm:text-sm">
        Once your reservation is confirmed, our team will get in touch with you
        shortly. A dedicated representative will call you to guide you through
        the next steps of the process.
      </div>

      <button
        onClick={bookRoom}
        className="bg-white border ml-5 text-center shadow-lg mt-3 w-48 rounded-2xl h-12 relative text-black text-lg font-semibold group"
        type="button"
      >
        <div
          className="bg-green-600 rounded-xl h-10 w-1/4 flex items-center justify-center absolute left-1 
         top-[4px] group-hover:w-[184px] z-10 duration-500"
        >
          <IconCalendarCheck className="text-white" size={20} />
        </div>
        <p className="translate-x-2 ml-4">Book Now</p>
      </button>
    </>
  );
};

export default ChekoutPayments;
