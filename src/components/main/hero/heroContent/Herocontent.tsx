import { useEffect, useState } from "react";
// import {FontAwesome,} from "react-web-vector-icons"
import Countcard from "../../../shared/countcard/Countcard";
import { Link } from "react-router-dom";

const Herocontent = () => {
  const [, setStartCounting] = useState(false);

  const countData = [
    { start: 0, end: 25, duration: 3, label: "Great Rooms" },
    { start: 0, end: 25, duration: 3, label: "Years of Working" },
    { start: 0, end: 10000, duration: 3, label: "Guests Have Arrived" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartCounting(true);
    }, 2000); // 3 seconds

    return () => clearTimeout(timer); // Clean up the timer
  }, []);
  return (
    <div className=" flex-col justify-center items-center  pt-32 pl-5 md:pl-20  ">
      <div className=" mb-5 text-4xl md:text-7xl text-white gap-4  font-semibold flex-col flex">
        <div className="font-serif">Holidays in</div>
        <div className="text-[#a97105] font-serif">Hetalbon Eco Resort</div>
      </div>
      <div className=" text-gray-100 opacity-70 text-lg mt-3 mb-10 ">
        <div>
          You are cordially invited to attend a jungle safari at hetalbon eco resort on any day
        </div>
        <div>
          at your convience to explore Sundarbans Worlds Largest Mangrove forest.
        </div>
      </div>
      <div className=" mt-4 bg-green-700 hover:bg-[#a97105] flex justify-around cursor-pointer items-center w-44  p-4 mt-10">
        <Link to={"/bookings"} className="text-xl text-white font-serif ">
          Book Now
        </Link>
      </div>
      <div className=" flex md:flex-wrap justify-between mt-3 items-center pr-5 md:pr-0 ">
        {countData.map((data, index) => (
          <Countcard
            key={index}
            start={data.start}
            end={data.end}
            duration={data.duration}
            label={data.label}
          />
        ))}
      </div>
    </div>
  );
};

export default Herocontent;
