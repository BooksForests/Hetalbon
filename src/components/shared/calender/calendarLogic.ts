/* eslint-disable @typescript-eslint/no-explicit-any */

interface BookingData {
  date: string;
  room: number | string;
}

// Custom hooks for calendar logic
export const useCalendarLogic = (
  currentDate: Date,
  bookingDates: BookingData[],
  bookingSelection: any,
  setBookingSelection: (selection: any) => void,
  setIsSelectingCheckOut: (selecting: boolean) => void
) => {
  const MAX_ROOMS = 17;

  // Check if a date has booking data
  const getBookingForDate = (day: number) => {
    const dateString = `${currentDate.getFullYear()}-${String(
      currentDate.getMonth() + 1
    ).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return bookingDates.find((booking) => booking.date === dateString);
  };

  // Get available rooms for a specific date
  const getAvailableRooms = (day: number) => {
    const booking = getBookingForDate(day);
    if (!booking) return MAX_ROOMS;
    if (booking.room === "full") return 0;
    return MAX_ROOMS - (typeof booking.room === "number" ? booking.room : 0);
  };

  // Handle date selection for check-in/check-out
  const handleDateSelect = (day: number) => {
    const selectedDate = `${currentDate.getFullYear()}-${String(
      currentDate.getMonth() + 1
    ).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

    const selectedDateObj = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    selectedDateObj.setHours(0, 0, 0, 0);

    // Don't allow selecting past dates
    if (selectedDateObj.getTime() < today.getTime()) return;

    // Don't allow selecting fully booked dates
    if (getAvailableRooms(day) === 0) return;

    if (!bookingSelection.checkInDate || bookingSelection.checkOutDate) {
      // First selection or reset - set check-in date
      setBookingSelection({
        ...bookingSelection,
        checkInDate: selectedDate,
        checkOutDate: null,
      });
      setIsSelectingCheckOut(true);
    } else {
      // Second selection - set check-out date
      const checkInDateObj = new Date(bookingSelection.checkInDate);
      if (selectedDateObj.getTime() > checkInDateObj.getTime()) {
        setBookingSelection({
          ...bookingSelection,
          checkOutDate: selectedDate,
        });
        setIsSelectingCheckOut(false);
      } else {
        // If selected date is before check-in, reset and start over
        setBookingSelection({
          ...bookingSelection,
          checkInDate: selectedDate,
          checkOutDate: null,
        });
        setIsSelectingCheckOut(true);
      }
    }
  };

  // Check if date is selected
  const isDateInRange = (day: number) => {
    if (!bookingSelection.checkInDate) return false;

    const dateString = `${currentDate.getFullYear()}-${String(
      currentDate.getMonth() + 1
    ).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

    if (bookingSelection.checkInDate === dateString) return "checkin";
    if (bookingSelection.checkOutDate === dateString) return "checkout";

    if (bookingSelection.checkOutDate) {
      const currentDateObj = new Date(dateString);
      const checkInDateObj = new Date(bookingSelection.checkInDate);
      const checkOutDateObj = new Date(bookingSelection.checkOutDate);

      if (
        currentDateObj.getTime() > checkInDateObj.getTime() &&
        currentDateObj.getTime() < checkOutDateObj.getTime()
      ) {
        return "inrange";
      }
    }

    return false;
  };

  // Reset booking selection
  const resetSelection = () => {
    setBookingSelection({
      checkInDate: null,
      checkOutDate: null,
      numberOfRooms: 1,
    });
    setIsSelectingCheckOut(false);
  };

  return {
    getBookingForDate,
    getAvailableRooms,
    handleDateSelect,
    isDateInRange,
    resetSelection,
  };
};
