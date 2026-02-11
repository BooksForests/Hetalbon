import Star from "../../ui/start";
import {
  IconClock24,
  IconToolsKitchen,
  IconWifi,
  IconWind,
} from "@tabler/icons-react";
import room1 from "../../../assets/rooms/room1.jpeg";
// import room2 from "../../../assets/rooms/room2.jpeg";
import room3 from "../../../assets/rooms/room3.jpeg";

const RoomsCard = () => {
  return (
    <div className="font-sans p-8 ml-10 tracking-wide  max-lg:max-w-2xl mx-auto">
      <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10 mt-6">
        <div>
          <div className="sm:flex gap-4 text-center pt-2">
            <div className="sm:h-[380px] mb-4 sm:mb-0">
              <img
                src={room3}
                alt="Product"
                className="w-full max-h-full object-contain object-top border-4 border-white"
              />
            </div>

            <div className="flex ">
              <div className=" sm:h-[170px]">
                {/* <img src={room2} alt="Product" className="w-full max-h-full object-contain object-top border-4 border-white" /> */}
              </div>

              <div className=" sm:h-[380px] ">
                <img
                  src={room1}
                  alt="Product"
                  className="w-full border-4 border-white max-h-full object-contain object-top"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-xl">
          <p className="text-white text-4xl font-bold mb-3">
            Book Our Standard Rooms
          </p>
          <Star />
          <div className="flex space-x-1 mt-4">
            <div className="mt-4">
              <h3 className="text-lg font-bold text-gray-200">
                Room Description
              </h3>
              <p className="text-sm text-gray-400 mt-2">
                Hetalbon Eco Resort's standard rooms offer a cozy retreat with
                modern amenities and a rustic charm. Ideal for relaxation, they
                combine natural elements with all the essentials for a serene
                stay. Perfect for unwinding after a day of exploration, these
                rooms bring together comfort and tranquility..
              </p>
            </div>
            <div className="flex space-x-6 justify-center items-center mt-8"></div>
          </div>
          <div className="flex gap-6 my-6">
            {/* Wi-Fi Icon */}
            <div className="flex flex-col items-center">
              <IconWifi className="h-6 w-6 text-gray-200" />
              <span className="text-xs text-gray-200">Wi-Fi</span>
            </div>
            {/* Bed Icon */}
            <div className="flex flex-col items-center">
              <IconToolsKitchen className="h-6 w-6 text-gray-200" />
              <span className="text-xs text-gray-200">Dinning</span>
            </div>
            {/* AC Icon */}
            <div className="flex flex-col items-center">
              <IconWind className="h-6 w-6 text-gray-200" />
              <span className="text-xs text-gray-200">AC</span>
            </div>
            {/* Availability Icon */}
            <div className="flex flex-col items-center">
              <IconClock24 className="h-6 w-6 text-gray-200" />
              <span className="text-xs text-gray-200">24/7</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="/bookings"
              className="min-w-[200px] px-4 py-3 bg-[#a97105] hover:bg-green-800 text-white text-sm font-semibold rounded"
            >
              Book now
            </a>
            <a
              href="/contact"
              className="min-w-[200px] px-4 py-2.5 border border-[#a97105]
             bg-transparent hover:bg-gray-50 text-[#a97105] text-sm font-semibold rounded"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomsCard;
