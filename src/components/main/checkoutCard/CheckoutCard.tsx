/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import {
  IconCalendarCheck,
  IconInfoSquareRounded,
  IconMinus,
  IconPlus,
} from "@tabler/icons-react";
import ActivityChip from "../../shared/activityChip/ActivityChip";
import room3 from "../../../assets/rooms/room3.jpeg";

const CheckoutCard = ({
  selectedActivities,
  cardDetails,
  guestCount,
  setGuestCount,
  totaldates,
  // totalPrice,
  activityPrice,
  setTotalPrice,
}: any) => {
  // const [personCount, setPersonCount] = useState(2);

  const handleIncrement = () => {
    if (guestCount < cardDetails?.capacity) {
      setGuestCount(guestCount + 1);
    }
  };

  const handleDecrement = () => {
    if (guestCount > 1) {
      setGuestCount(guestCount - 1);
    }
  };

  useEffect(() => {
    const price = cardDetails?.price * totaldates + activityPrice;
    setTotalPrice(price);
  }, [cardDetails?.price, totaldates, activityPrice]);

  return (
    <div className="w-2/3 bg-white border  h-full p-3 rounded-2xl">
      <div className="text-lg font-semibold text-gray-600 flex items-center gap-2 mb-4 pl-2">
        Booking Cart
        <IconInfoSquareRounded stroke={2} size={22} />
      </div>

      <div className="room_image w-full px-1">
        <img
          className="w-full h-40 rounded-xl shadow-lg"
          src={room3}
          alt="Room"
        />
      </div>

      <div className="room_description mt-4 px-2">
        <div className="text-xl font-semibold text-gray-800">
          {cardDetails?.name || <>Select Room</>}
        </div>
        <div className="text-xs text-gray-500 font-semibold flex">
          Max {cardDetails?.capacity || 0} guests, {cardDetails?.guestNo}
        </div>
        <div className="text-gray-500 text-md mt-4  mb-2 font-semibold">
          Guests
        </div>
        <div
          className="person_calculator flex items-center  w-full
         border border-gray-300 rounded-full justify-between
         px-3 py-1.5 "
        >
          <span className="text-lg font-semibold text-gray-800 mx-4">
            {guestCount} Guest{guestCount > 1 && "s"}
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={handleDecrement}
              className="bg-gray-200 w-9 h-9 text-gray-900 font-bold py-1 px-2 rounded-full"
            >
              <IconMinus size={20} />
            </button>
            <button
              onClick={handleIncrement}
              className="bg-gray-900 w-9 h-9 text-gray-100  font-bold py-1 px-2 rounded-full"
            >
              <IconPlus size={20} />
            </button>
          </div>
        </div>
        <div className="text-gray-500 text-md mt-4  mb-2 font-semibold">
          Activities
        </div>
        <div className="flex gap-2 flex-wrap">
          {selectedActivities.map((activity: any) => (
            <ActivityChip text={activity} />
          ))}
        </div>
        <div className="flex justify-between mt-4 items-center pr-3">
          <div className="">
            <div className="text-gray-500 text-md   mb-2 font-semibold">
              {/* Total price */}
            </div>
            <div className="total_price text-3xl font-semibold">
              {/* ₹{totalPrice} */}
            </div>
          </div>
          <div className="text-green-500 cursor-pointer text-xl mt-5 font-semibold flex items-center gap-2 hover:text-green-700">
            <IconCalendarCheck />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCard;
