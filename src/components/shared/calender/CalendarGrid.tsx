/* eslint-disable @typescript-eslint/no-explicit-any */

interface BookingData {
  date: string;
  room: number | string;
}

interface CalendarGridProps {
  currentDate: Date;
  bookingDates: BookingData[];
  bookingSelection: any;
  handleDateSelect: (day: number) => void;
  isDateInRange: (day: number) => string | false;
  getAvailableRooms: (day: number) => number;
  getBookingForDate: (day: number) => BookingData | undefined;
}

const CalendarGrid = ({
  currentDate,

  handleDateSelect,
  isDateInRange,
  getAvailableRooms,
  getBookingForDate,
}: CalendarGridProps) => {
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const lastDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );
  const daysInMonth = lastDayOfMonth.getDate();
  const startingDayOfWeek = firstDayOfMonth.getDay();

  const renderCalendarDays = () => {
    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(
        <div
          key={`empty-${i}`}
          className="h-12 rounded-lg border border-gray-200"
        ></div>
      );
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const booking: any = getBookingForDate(day);
      const currentDateObj = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        day
      );
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      currentDateObj.setHours(0, 0, 0, 0);

      const isToday = today.getTime() === currentDateObj.getTime();
      const isPastDate = currentDateObj.getTime() < today.getTime();
      const availableRooms = getAvailableRooms(day);
      const dateRangeStatus = isDateInRange(day);
      const isClickable = !isPastDate && availableRooms > 0;

      days.push(
        <div
          key={day}
          onClick={() => isClickable && handleDateSelect(day)}
          className={`h-12 p-2 relative rounded-lg cursor-pointer transition-all duration-200 ${
            isPastDate
              ? "bg-gray-100 border border-gray-200 cursor-not-allowed"
              : booking && booking.room === "full"
              ? "bg-red-100 border border-red-200 cursor-not-allowed"
              : dateRangeStatus === "checkin"
              ? "bg-blue-500 border-2 border-blue-600 text-white"
              : dateRangeStatus === "checkout"
              ? "bg-green-500 border-2 border-green-600 text-white"
              : dateRangeStatus === "inrange"
              ? "bg-blue-200 border border-blue-300"
              : "bg-green-50 hover:bg-green-200 border border-green-200"
          } ${isToday ? "ring-2 ring-yellow-400" : ""}`}
        >
          <div
            className={`text-sm font-medium ${
              isPastDate
                ? "text-gray-400"
                : booking && booking.room === "full"
                ? "text-red-600"
                : dateRangeStatus === "checkin" ||
                  dateRangeStatus === "checkout"
                ? "text-white"
                : "text-gray-900"
            } ${isToday ? "font-bold" : ""}`}
          >
            {day}
          </div>
          {booking &&
            !isPastDate &&
            (booking.room === "full" || availableRooms < 5) && (
              <div
                className={`absolute -top-3 -right-2 z-10 px-2 py-1 rounded-full text-xs font-medium ${
                  booking.room === "full"
                    ? "bg-red-500 text-white"
                    : "bg-blue-500 text-white"
                }`}
              >
                {booking.room === "full" ? "Full" : `${availableRooms} left`}
              </div>
            )}

          {dateRangeStatus === "checkin" && (
            <div className="text-xs text-white font-medium">Check in</div>
          )}
          {dateRangeStatus === "checkout" && (
            <div className=" text-xs text-white font-medium">Check out</div>
          )}
        </div>
      );
    }

    return days;
  };

  return (
    <>
      {/* Days of the week header */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div
            key={day}
            className="h-10 flex items-center justify-center font-medium text-gray-700 bg-gray-50"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1">{renderCalendarDays()}</div>
    </>
  );
};

export default CalendarGrid;
