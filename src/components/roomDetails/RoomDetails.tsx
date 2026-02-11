import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "../layout/Layout";
// import RightCard from "./rightCard/RightCard";
import RoomDescription from "./roomDescription/RoomDescription";
import Navbar from "../shared/navbar/Navbar";

const RoomDetails = () => {
  const location = useLocation();
  const { rooms } = location.state || {};
  console.log("rooms details here===>", rooms);

  return (
    <Layout>
      <Navbar scrollEffectEnabled={false} />
      <div className="pt-44 container mx-auto p-6 flex flex-col lg:flex-row">
        {/* Image Slider Section */}
        <div className="w-full">
          <div className="relative w-full h-64 lg:h-96">
            <motion.img
              key={rooms.name}
              src={rooms.image}
              alt={`Room ${rooms.name}`}
              className="absolute w-full h-64 lg:h-96 object-cover rounded-lg shadow-md"
            />
          </div>
          <RoomDescription rooms={rooms} />
        </div>
      </div>
    </Layout>
  );
};

export default RoomDetails;
