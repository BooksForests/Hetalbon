import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

interface CalendarNavigationProps {
  currentDate: Date;
  goToPreviousMonth: () => void;
  goToNextMonth: () => void;
}

const CalendarNavigation = ({
  currentDate,
  goToPreviousMonth,
  goToNextMonth,
}: CalendarNavigationProps) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div
      className="person_calculator flex items-center  w-full
       border border-gray-300 rounded-full justify-between
       px-3 py-1.5  mb-6"
    >
      <button
        onClick={goToPreviousMonth}
        className="bg-gray-900 w-9 h-9 text-gray-100  font-bold py-1 px-2 rounded-full"
      >
        <FaLongArrowAltLeft className="text-white" />
      </button>

      <h2 className="text-md font-bold text-gray-900">
        {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
      </h2>

      <button
        onClick={goToNextMonth}
        className="bg-gray-900 w-9 h-9 text-gray-100  font-bold py-1 px-2 rounded-full"
      >
        <FaLongArrowAltRight className="text-white" />
      </button>
    </div>
  );
};

export default CalendarNavigation;
