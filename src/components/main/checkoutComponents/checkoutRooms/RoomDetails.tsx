import Star from "../../../ui/start";
import {
  IconClock24,
  IconToolsKitchen,
  IconWifi,
  IconWind,
} from "@tabler/icons-react";

import room3 from "../.././../../assets/rooms/room3.jpeg";
import room1 from "../.././../../assets/rooms/room1.jpeg";


export const SingleRoomDetails = () => {
  return (
    <div className="w-full flex justify-start px-4">
      <div className="w-full max-w-2xl  rounded-lg  overflow-hidden ">
        {/* Image */}
        <div className="flex items-center justify-start gap-5">
          <img
          src={room3}
          alt="Standard Room"
          className="w-64 h-48 object-left rounded-lg"
        />
        <img
          src={room1}
          alt="Standard Room"
          className="w-64 h-48 object-left rounded-lg"
        />
</div>
        {/* Content */}
        <div className="p-6">
          <h2 className="text-grey-800 text-3xl font-bold mb-2">
            Standard Rooms
          </h2>
          <Star />

          {/* Description */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-1">
              Room Description
            </h3>
            
            <p className="text-sm text-gray-600 ">
              Hetalbon Eco Resort's standard rooms offer a cozy retreat with
              modern amenities and a rustic charm. Ideal for relaxation, they
              combine natural elements with all the essentials for a serene
              stay. Perfect for unwinding after a day of exploration, these
              rooms bring together comfort and tranquility.
            </p>
            <p className="text-sm text-grey-600 mt-2">max 2 guests per room</p>
          </div>

          {/* Amenities */}
          <div className="flex gap-6 mt-6">
            <div className="flex flex-col items-center">
              <IconWifi className="h-6 w-6 text-gray-500" />
              <span className="text-xs text-gray-500 mt-1">Wi-Fi</span>
            </div>
            <div className="flex flex-col items-center">
              <IconToolsKitchen className="h-6 w-6 text-gray-500" />
              <span className="text-xs text-gray-500 mt-1">Dining</span>
            </div>
            <div className="flex flex-col items-center">
              <IconWind className="h-6 w-6 text-gray-500" />
              <span className="text-xs text-gray-500 mt-1">AC</span>
            </div>
            <div className="flex flex-col items-center">
              <IconClock24 className="h-6 w-6 text-gray-500" />
              <span className="text-xs text-gray-500 mt-1">24/7</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
