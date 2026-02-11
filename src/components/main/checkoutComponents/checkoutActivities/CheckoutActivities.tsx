import React from "react";
import { IconPlus, IconMinus } from "@tabler/icons-react";
// import AuthContext from "../../../../contexts/authContext/authContext";

interface Activity {
  name: string;
  _id: string;
  price: number;
}


const activities: Activity[] = [
  {
    name: "Fishing",
    _id: "activity_1",
    price: 50,
  },
  {
    name: "Boating",
    _id: "activity_2",
    price: 30,
  },
  {
    name: "Folk Dance",
    _id: "activity_3",
    price: 40,
  },
  {
    name: "Nouka Baich",
    _id: "activity_4",
    price: 20,
  },
  {
    name: "Mud Walk",
    _id: "activity_5",
    price: 20,
  },
];


interface CheckoutActivitiesProps {
  selectedActivities: string[];
  setSelectedActivities: (activities: string[]) => void;
  selectedActivityId: string[];
  setSelectedActivityId: (ids: string[]) => void;
  totalPrice: number;
  setTotalPrice: any;
  setActiveTab: any;
}

const CheckoutActivities: React.FC<CheckoutActivitiesProps> = ({
  selectedActivities,
  setSelectedActivities,
  selectedActivityId,
  setSelectedActivityId,
  totalPrice,
  setTotalPrice,
  setActiveTab,
}) => {

  const handleActivityClick = (activity: Activity) => {
    const { name, _id, price } = activity;

    if (selectedActivities.includes(name)) {
      setSelectedActivities(selectedActivities.filter((item) => item !== name));
      setSelectedActivityId(selectedActivityId.filter((item) => item !== _id));
      setTotalPrice(totalPrice - price);
    } else {
      setSelectedActivities([...selectedActivities, name]);
      setSelectedActivityId([...selectedActivityId, _id]);
      setTotalPrice(totalPrice + price);
    }
  };

  return (
    <>
      <div className="w-full flex mb-5 justify-between px-2 pr-10">
        <div
          className="bg-gray-100 w-auto cursor-pointer  px-4 py-1 rounded-lg"
          onClick={() => setActiveTab(0)}
        >
          Back
        </div>
        <div
          className="bg-[#a97105] text-white cursor-pointer w-auto px-4 py-1 rounded-lg"
          onClick={() => setActiveTab(2)}
        >
          Next
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        {activities.map((activity: any, index: number) => (
          <div
            key={index}
            className={`w-auto bg-gray-50 rounded-full px-3 py-2 flex gap-5 justify-between items-center drop-shadow-lg ${
              selectedActivities.includes(activity.name)
                ? "border-2 border-[#a97105]"
                : "border-2 border-gray-300"
            }`}
          >
            <div>{activity.name}</div>
            <button
              onClick={() => handleActivityClick(activity)}
              className={`w-9 h-9 font-bold py-1 px-2 rounded-full ${
                selectedActivities.includes(activity.name)
                  ? "bg-[#a97105] text-gray-100"
                  : "bg-gray-200 text-gray-900"
              }`}
            >
              {selectedActivities.includes(activity.name) ? (
                <IconMinus size={20} />
              ) : (
                <IconPlus size={20} />
              )}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default CheckoutActivities;
