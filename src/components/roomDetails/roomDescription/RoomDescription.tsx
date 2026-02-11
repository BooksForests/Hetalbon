import { useState } from "react";
import { motion } from "framer-motion";
import { room } from "../../../constants/room";
import { IconRuler, IconUser } from "@tabler/icons-react";

const RoomDescription = ({rooms}:any) => {
  const [showBedAndBath, setShowBedAndBath] = useState(false);
  const [showOtherConveniences, setShowOtherConveniences] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-lg"
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      transition={{ duration: 0.5 }}
    >
      <div className="text-3xl font-bold mb-4">{rooms.name}</div>
      <p className="text-lg mb-4">{rooms?.details}</p>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <motion.div
          className="bg-gray-100 rounded-lg p-4 flex items-center"
          whileHover={{ scale: 1.05 }}
        >
          <IconRuler className="text-green-500 mr-2" />
          <span>{rooms.area}</span>
        </motion.div>
        <motion.div
          className="bg-gray-100 rounded-lg p-4 flex items-center"
          whileHover={{ scale: 1.05 }}
        >
          <IconUser className="text-green-500 mr-2" />
          <span>{rooms.occupancy}</span>
        </motion.div>
      </div>
      <div className="bg-gray-200 px-2 py-2 rounded-2xl">
        <div className="mb-2 bg-white px-4 py-2 rounded-lg">
          <h2
            className="text-xl font-semibold mb-2 cursor-pointer"
            onClick={() => setShowBedAndBath(!showBedAndBath)}
          >
            Bed and Bath
          </h2>
          {showBedAndBath && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {rooms.bedAndBath.map((item:any, index:any) => (
                <motion.div
                  key={index}
                  className="bg-gray-100 rounded-lg p-4 flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <li>{item}</li>
                </motion.div>
              ))}
            </div>
          )}
        </div>
        <div className="bg-white px-4 py-2 rounded-lg">
          <h2
            className="text-xl font-semibold mb-2 cursor-pointer"
            onClick={() => setShowOtherConveniences(!showOtherConveniences)}
          >
            Other Conveniences
          </h2>
          {showOtherConveniences && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {room.otherConveniences.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-100 rounded-lg p-4 flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default RoomDescription;
