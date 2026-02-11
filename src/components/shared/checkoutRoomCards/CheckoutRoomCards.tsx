/* eslint-disable @typescript-eslint/no-explicit-any */
import { capitalizeWord } from "../../../utils/commonFunction/nameFormatter";
import room1img from "../../../assets/rooms/room1.jpeg";
import room2img from "../../../assets/rooms/room2.jpeg";
import room3img from "../../../assets/rooms/room3.jpeg";

const CheckoutRoomCards = ({ cardDetails, setCardDetails, setCardId }: any) => {
  function getImageByCardName(cardName: any) {
    switch (cardName) {
      case "Dilux":
        return room1img;
      case "Standard":
        return room2img;
      case "Exicuitive":
        return room3img;
      default:
        return "https://example.com/default.jpg"; // Default image if no match is found
    }
  }

  function getGuestNo(cardName: any) {
    switch (cardName) {
      case "Dilux":
        return <p>2 Adults and 1 child</p>;
      case "Standard":
        return <p>3 Adults and 1 child</p>;
      case "Exicuitive":
        return <p>4 Adults and 2 child</p>;
      default:
        return <p>no card selected</p>; // Default image if no match is found
    }
  }

  const payload = {
    name: capitalizeWord(cardDetails.name),
    type: capitalizeWord(cardDetails.type),
    price: cardDetails.price,
    image: getImageByCardName(cardDetails.type),
    capacity: cardDetails?.capacity,
    guestNo: getGuestNo(cardDetails.type),
  };

  const handleSelectCard = () => {
    setCardDetails(payload);
    setCardId(cardDetails._id);
  };

  return (
    <div
      className="flex flex-wrap mr-5 mb-3 justify-between "
      onClick={handleSelectCard}
    >
      <div className="relative hover:border-2 hover:border-[#a97105]  mt-2 flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-96 mx-auto border border-white bg-white">
        <div className="w-full h-full md:w-1/3 bg-white grid place-items-center">
          <img
            src={getImageByCardName(cardDetails?.type)}
            className="rounded-xl"
          />
        </div>
        <div className="w-full md:w-2/3 bg-white flex flex-col  ">
          <div className="flex justify-between item-center">
            <div className=" flex justify-center items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a97105] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#a97105]"></span>
              </span>

              <p className="text-gray-500 text-xs font-medium hidden md:block">
                Available
              </p>
            </div>
            <div className="bg-gray-100 px-2 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
              {cardDetails?.capacity} guests{" "}
            </div>
          </div>
          <h3 className=" font-semibold text-gray-800 md:text-xl text-xl">
            {capitalizeWord(cardDetails?.name)}
          </h3>
          <p className="md:text-xs text-gray-500 text-xs">Know more</p>
          <p className="text-2xl mt-2  font-semibold text-gray-800">
            {/* {cardDetails?.price} */}
            {/* <span className="font-normal text-gray-600 text-base">/night</span> */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutRoomCards;
