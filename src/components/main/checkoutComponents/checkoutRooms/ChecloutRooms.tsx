import { SingleRoomDetails } from "./RoomDetails";

/* eslint-disable @typescript-eslint/no-explicit-any */
const ChecloutRooms = ({ setActiveTab }: any) => {
  return (
    <>
      <div className="w-full flex justify-end px-2 pr-10 mb-5">
        <div
          className="bg-[#a97105] text-white cursor-pointer w-auto px-4 py-1 rounded-lg"
          onClick={() => setActiveTab(1)}
        >
          Next
        </div>
      </div>
      <SingleRoomDetails />
    </>
  );
};

export default ChecloutRooms;
