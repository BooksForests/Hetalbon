/* eslint-disable @typescript-eslint/no-explicit-any */
import { IconMinus, IconPlus } from "@tabler/icons-react";

interface GuestRoomCountersProps {
  guestCount: number;
  setGuestCount: (count: number) => void;
  bookingSelection: any;
  setBookingSelection: (selection: any) => void;
}

const GuestRoomCounters = ({
  guestCount,
  setGuestCount,
  bookingSelection,
  setBookingSelection,
}: GuestRoomCountersProps) => {
  const handleGuestIncrement = () => {
    if (guestCount < 20) {
      setGuestCount(guestCount + 1);
    }
  };

  const handleGuestDecrement = () => {
    if (guestCount > 1) {
      setGuestCount(guestCount - 1);
    }
  };

  return (
    <div className="flex gap-4 mb-4">
      {/* Guest Counter */}
      <div className="flex-1">
        <div className="text-gray-500 text-md mt-4  mb-2 font-semibold">
          Guest
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
              onClick={handleGuestDecrement}
              disabled={guestCount <= 1}
              className={`w-9 h-9 font-bold py-1 px-2 rounded-full ${
                guestCount <= 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gray-200 text-gray-900"
              }`}
            >
              <IconMinus size={20} />
            </button>
            <button
              onClick={handleGuestIncrement}
              disabled={guestCount >= 20}
              className={`w-9 h-9 font-bold py-1 px-2 rounded-full ${
                guestCount >= 20
                  ? "bg-gray-400 text-gray-100 cursor-not-allowed"
                  : "bg-gray-900 text-gray-100"
              }`}
            >
              <IconPlus size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Rooms Counter */}
      <div className="flex-1">
        <div className="text-gray-500 text-md mt-4  mb-2 font-semibold">
          Rooms
        </div>
        <div
          className="person_calculator flex items-center  w-full
         border border-gray-300 rounded-full justify-between
         px-3 py-1.5 "
        >
          <span className="text-lg font-semibold text-gray-800 mx-4">
            {bookingSelection.numberOfRooms} Room
            {bookingSelection.numberOfRooms > 1 && "s"}
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (bookingSelection.numberOfRooms > 1) {
                  setBookingSelection({
                    ...bookingSelection,
                    numberOfRooms: bookingSelection.numberOfRooms - 1,
                  });
                }
              }}
              disabled={bookingSelection.numberOfRooms <= 1}
              className={`w-9 h-9 font-bold py-1 px-2 rounded-full ${
                bookingSelection.numberOfRooms <= 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gray-200 text-gray-900"
              }`}
            >
              <IconMinus size={20} />
            </button>
            <button
              onClick={() => {
                if (bookingSelection.numberOfRooms < 5) {
                  setBookingSelection({
                    ...bookingSelection,
                    numberOfRooms: bookingSelection.numberOfRooms + 1,
                  });
                }
              }}
              disabled={bookingSelection.numberOfRooms >= 5}
              className={`w-9 h-9 font-bold py-1 px-2 rounded-full ${
                bookingSelection.numberOfRooms >= 10
                  ? "bg-gray-400 text-gray-100 cursor-not-allowed"
                  : "bg-gray-900 text-gray-100"
              }`}
            >
              <IconPlus size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestRoomCounters;
