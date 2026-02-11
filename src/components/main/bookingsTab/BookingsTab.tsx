const BookingsTab = ({ activeTab, setActiveTab }: any) => {
  // Define an array of tab names
  const tabs = ["Choose Room", "Choose Activities", "Checkout"];

  return (
    <div className="flex items-center justify-start px-5 md:px-20 pt-3 gap-3 md:gap-8 text-xs md:text-lg">
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`flex items-center gap-2 ${
            activeTab === index ? "text-green-700" : "text-gray-600"
          }`}
          onClick={() => setActiveTab(index)}
        >
          <div
            className={`flex items-center justify-center rounded-full w-6 h-6 ${
              activeTab === index
                ? "bg-green-600 text-gray-100"
                : "bg-gray-300 text-gray-600"
            }`}
          >
            {index + 1}
          </div>
          <div className="font-semibold">{tab}</div>
        </div>
      ))}
    </div>
  );
};

export default BookingsTab;
