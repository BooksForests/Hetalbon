/* eslint-disable @typescript-eslint/no-explicit-any */

interface BookingSummaryProps {
  bookingSelection: any;
  resetSelection: () => void;
  isSelectingCheckOut: boolean;
}

const BookingSummary = ({
  bookingSelection,
  resetSelection,
  isSelectingCheckOut,
}: BookingSummaryProps) => {
  return (
    <div className="my-6 bg-white  rounded-2xl w-full">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {/* Inputs Group */}
        <div className="flex flex-wrap items-center gap-6">
          {/* Check-in */}
          <div>
            <label className="text-gray-500 text-md mt-4  mb-2 font-semibold mb-1">
              Check-in Date
            </label>
            <div
              className="person_calculator flex items-center  w-full
         border border-gray-300 rounded-full justify-between
         px-3 py-1.5"
            >
              {bookingSelection.checkInDate
                ? new Date(bookingSelection.checkInDate).toLocaleDateString()
                : "Select check-in"}
            </div>
          </div>

          {/* Check-out */}
          <div>
            <label className="text-gray-500 text-md mt-4  mb-2 font-semibold mb-1">
              Check-out Date
            </label>
            <div
              className="person_calculator flex items-center  w-full
         border border-gray-300 rounded-full justify-between
         px-3 py-1.5"
            >
              {bookingSelection.checkOutDate
                ? new Date(bookingSelection.checkOutDate).toLocaleDateString()
                : "Select check-out"}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={resetSelection}
            className="px-4 py-2 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition-all text-sm"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Inline Message */}
      {isSelectingCheckOut && bookingSelection.checkInDate && (
        <div className="mt-4 text-sm text-blue-600 font-medium">
          Now select your check-out date
        </div>
      )}
    </div>
  );
};

export default BookingSummary;
