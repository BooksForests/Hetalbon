import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const RightCard = ({rooms}:any) => {

  const navigation=useNavigate()

  const handlenavigation=()=>{
  navigation("/bookings")
  }

  const breakFastPrice=100
  const service=50
  return (
    <motion.div
      className="mt-6 bg-white p-6 rounded-lg shadow-lg"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-4">
        <span className="text-2xl font-bold">{rooms.price}/night</span>
       
      </div>
     
      <div className="mb-4">
        <label className="block text-gray-700">Guest</label>
     
          <div className=" border-2 p-1  border-[#a97105]">{rooms.occupancy}</div>
       
      </div>

      <div className="flex justify-between items-center mb-4">
        <span className="text-lg">1 Night</span>
        <span className="text-lg">{rooms.price}</span>
      </div>
      
      <div className="flex justify-between items-center mb-4">
        <span className="text-lg">Breakfast a day per person</span>
        <span className="text-lg">{breakFastPrice}</span>
      </div>
      <div className="flex justify-between items-center mb-4">
        <span className="text-lg">Service fee</span>
        <span className="text-lg">{service}</span>
      </div>
      <div className="flex justify-between items-center mb-4 font-bold">
        <span className="text-xl">Total Payment for room</span>
        <span className="text-xl">{rooms.price+breakFastPrice+service}</span>
      </div>
      <motion.button
        className="w-full px-6 py-2 bg-[#a97105] text-white rounded-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handlenavigation}
      >
        see other options
      </motion.button>
    </motion.div>
  );
};

export default RightCard;
