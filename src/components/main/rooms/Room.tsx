
import RoomsCard from "../../shared/roomscard/RoomsCard";

const Room = () => {
  return (
    <div>
       <div className="bgImg3  mt-5 py-12 ">
      <div className="max-w-2xl mb-5 mx-auto text-center">
      <img className="mx-auto" src="https://i0.wp.com/tourdesundarbans.stainpixels.com/wp-content/uploads/2022/11/IMG_20221104_002515-copy.png?resize=300%2C77&ssl=1" alt="" />
        {/* <img className="mx-auto" src="https://i0.wp.com/tourdesundarbans.stainpixels.com/wp-content/uploads/2022/11/IMG_20221104_002515-copy.png?resize=300%2C77&ssl=1" alt="" /> */}
        <h2 className="text-3xl font-bold leading-tight text-gray-100 sm:text-4xl lg:text-5xl">
         Our <span className="text-[#a97105]">Guest Rooms</span>
        </h2>
   
      </div>

    <RoomsCard  />
      </div>
    </div>
  );
};

export default Room;
