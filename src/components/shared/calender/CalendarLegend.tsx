const CalendarLegend = () => {
  return (
    <div className="mt-6 flex items-center justify-center space-x-4 flex-wrap gap-y-2">
      <div className="flex items-center space-x-2">
        <div className="w-4 h-4 bg-green-200 rounded"></div>
        <span className="text-xs text-gray-600">Available</span>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-4 h-4 bg-red-500 rounded"></div>
        <span className="text-xs text-gray-600">Fully Booked</span>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-4 h-4 bg-blue-500 rounded"></div>
        <span className="text-xs text-gray-600">Check-in</span>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-4 h-4 bg-green-500 rounded"></div>
        <span className="text-xs text-gray-600">Check-out</span>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-4 h-4 bg-blue-100 border border-blue-300 rounded"></div>
        <span className="text-xs text-gray-600">Selected Range</span>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-4 h-4 bg-gray-100 rounded"></div>
        <span className="text-xs text-gray-600">Past Dates</span>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-4 h-4 bg-white border-2 border-yellow-400 rounded"></div>
        <span className="text-xs text-gray-600">Today</span>
      </div>
    </div>
  );
};

export default CalendarLegend;
