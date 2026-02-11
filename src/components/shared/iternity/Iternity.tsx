import { useState } from "react";

type ItineraryItem = {
  title: string;
  activities: string[];
};

type ItineraryData = {
  [duration: string]: ItineraryItem[];
};

const itineraries: ItineraryData = {
  "1 Night 2 Days": [
    {
      title: "Day 1: Journey into the Wild",
      activities: [
        "Depart at 7 AM to Godkhali. Cruise along Vidyadhari, Durgaduani, and Gumdi rivers.",
        "Check-in at Hetalbon Eco Resort on Bali Island.",
        "Visit Sajnekhali Watch Tower & Mangrove Interpretation Centre.",
        "Explore Sudhanyakhali Watch Tower. Return to resort.",
      ],
    },
    {
      title: "Day 2: Exploring the Heart of Sundarbans",
      activities: [
        "Morning cruise through Nubaki, Panchamkhali, Pirkhali creeks.",
        "Visit Dobanki Watch Tower & enjoy the canopy walk.",
        "Lunch on board. Transfer back to Godkhali.",
      ],
    },
  ],
  "2 Nights 3 Days": [
    {
      title: "Day 1: National Park Excursion",
      activities: [
        "Morning drive to Godkhali. Cruise to Sudhanyakhali Watch Tower.",
        "Lunch on board. Arrive at Bali Island for resort check-in.",
      ],
    },
    {
      title: "Day 2: Exploring the Depths of Sundarbans",
      activities: [
        "Breakfast on board. Visit Nubaki, Deulbharani, Panchamkhali.",
        "Visit Dobanki Watch Tower & canopy walk. Return after sunset.",
      ],
    },
    {
      title: "Day 3: Immersive Village Experience",
      activities: [
        "Village walk. Return to resort. Breakfast.",
        "Board boat to Godkhali for departure.",
      ],
    },
  ],
  "3 Nights 4 Days": [
    {
      title: "Day 1: Explore the National Park",
      activities: [
        "7 AM drive to Godkhali. Cruise along Vidyadhari, Durgaduani, Gumdi rivers.",
        "Visit Sudhanyakhali & Sajnekhali Watch Towers.",
        "Check-in at Hetalbon Eco Resort. Evening entertainment.",
      ],
    },
    {
      title: "Day 2: Full Day Immersion",
      activities: [
        "Cruise toward Indo-Bangladesh border.",
        "Visit Burirdabri Watch Tower, Harikhali, and dense Katuajhuri forest.",
        "Return after 11-12 hour safari.",
      ],
    },
    {
      title: "Day 3: Further Exploration",
      activities: [
        "Cruise through Nubaki & Panchamkhali.",
        "Visit Dobanki & Netidhopani Watch Towers. Deulbharani creeks.",
        "Return and enjoy cultural evening.",
      ],
    },
    {
      title: "Day 4: Village Life & Return",
      activities: [
        "Bali village walk. Return to resort.",
        "Transfer to Godkhali for departure.",
      ],
    },
  ],
};

const Iternity: React.FC = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof itineraries>("1 Night 2 Days");

  return (
    <div className="md:w-[80%] mx-auto p-4">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {Object.keys(itineraries).map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-full border ${
              activeTab === tab
                ? "bg-[#a97105] text-white"
                : "bg-gray-100 text-gray-800"
            }`}
            onClick={() => setActiveTab(tab as keyof typeof itineraries)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Itinerary List */}
      <ol className="relative border-s border-gray-300 dark:border-gray-700 ml-4">
        {itineraries[activeTab].map((day, index) => (
          <li key={index} className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-[#a97105] rounded-full -start-3 mt-3 ring-8 ring-[#a97105]">
              <svg
                className="w-3.5 h-3.5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <div className="mb-1 text-3xl font-semibold text-white">
              {day.title}
            </div>
            <ul className="list-disc ml-5 text-lg mt-8 text-gray-300">
              {day.activities.map((activity, i) => (
                <li key={i}>{activity}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Iternity;
