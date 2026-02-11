/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { api } from "../../../utils/api";
import GuestRoomCounters from "./GuestRoomCounters";
import ActivityDisplay from "./ActivityDisplay";
import BookingSummary from "./BookingSummary";
import CalendarNavigation from "./CalendarNavigation";
import CalendarGrid from "./CalendarGrid";
import CalendarLegend from "./CalendarLegend";
import { useCalendarLogic } from "./calendarLogic";

interface BookingData {
  date: string;
  room: number | string;
}

const Calender = ({
  bookingSelection,
  setBookingSelection,
  selectedActivities,
  guestCount,
  setGuestCount,
}: any) => {
  const [bookingDates, setBookingDates] = useState<BookingData[]>([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isSelectingCheckOut, setIsSelectingCheckOut] = useState(false);

  const getBookingDates = async () => {
    try {
      const response = await api.bookings.getCruiseBookingAvailability();
      console.log("====> Booking Dates", response);
      setBookingDates(response || []);
    } catch (error) {
      console.error("Error fetching booking dates:", error);
    }
  };

  useEffect(() => {
    getBookingDates();
  }, []);

  // Month navigation functions
  const goToPreviousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  const goToNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  // Use calendar logic hook
  const {
    getBookingForDate,
    getAvailableRooms,
    handleDateSelect,
    isDateInRange,
    resetSelection,
  } = useCalendarLogic(
    currentDate,
    bookingDates,
    bookingSelection,
    setBookingSelection,
    setIsSelectingCheckOut
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <GuestRoomCounters
        guestCount={guestCount}
        setGuestCount={setGuestCount}
        bookingSelection={bookingSelection}
        setBookingSelection={setBookingSelection}
      />

      <ActivityDisplay selectedActivities={selectedActivities} />

      <BookingSummary
        bookingSelection={bookingSelection}
        resetSelection={resetSelection}
        isSelectingCheckOut={isSelectingCheckOut}
      />

      <CalendarNavigation
        currentDate={currentDate}
        goToPreviousMonth={goToPreviousMonth}
        goToNextMonth={goToNextMonth}
      />

      <CalendarGrid
        currentDate={currentDate}
        bookingDates={bookingDates}
        bookingSelection={bookingSelection}
        handleDateSelect={handleDateSelect}
        isDateInRange={isDateInRange}
        getAvailableRooms={getAvailableRooms}
        getBookingForDate={getBookingForDate}
      />

      <CalendarLegend />
    </div>
  );
};

export default Calender;
