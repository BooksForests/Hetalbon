import CountUp from "react-countup";

const Countcard = ({ start, end, duration, label }: any) => {
  return (
    <div className="mt-10">
      <div className="flex justify-center items-center">
        <div className="flex-col flex justify-start md:justify-center items-center">
          <div className="text-2xl md:text-4xl text-start text-white ">
            <CountUp start={start} end={end} duration={duration} />+
          </div>
          <div className="text-xs md:text-lg text-white font-sm font-serif">
            {label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countcard;
