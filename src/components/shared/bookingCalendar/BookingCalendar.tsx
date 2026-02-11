/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";

const BookingCalendar = ({ setState, state, setTotaldates }: any) => {
  useEffect(() => {
    if (state.length > 0) {
      const { startDate, endDate } = state[0];
      const diffTime = Math.abs(
        new Date(endDate).getTime() - new Date(startDate).getTime()
      );
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setTotaldates(diffDays);
    }
  }, [state, setTotaldates]);

  const handleDateChange = (item: any) => {
    const startDate = new Date(
      Date.UTC(
        item.selection.startDate.getFullYear(),
        item.selection.startDate.getMonth(),
        item.selection.startDate.getDate()
      )
    );
    const endDate = new Date(
      Date.UTC(
        item.selection.endDate.getFullYear(),
        item.selection.endDate.getMonth(),
        item.selection.endDate.getDate()
      )
    );
    setState([{ ...item.selection, startDate, endDate }]);
  };

  return (
    <div>
      <DateRangePicker
        className="h-96 md:w-full w-32"
        onChange={handleDateChange}
        moveRangeOnFirstSelection={false}
        showMonthAndYearPickers={false}
        editableDateInputs={false}
        months={1}
        ranges={state}
        direction="horizontal"
        minDate={new Date()} // 👈 disables past dates
      />
    </div>
  );
};

export default BookingCalendar;
