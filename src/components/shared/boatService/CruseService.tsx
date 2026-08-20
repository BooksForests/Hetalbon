import { Link } from "react-router-dom";
import cruiseimg from "../../../assets/rooms/cruise.jpeg";

const CruseService = () => {
  return (
    <section className="bg-[#21210b]-" id="aboutus">
      <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:py-12 xl:max-w-6xl">
        <div className="w-full h-64 lg:w-1/2 lg:h-auto">
          <img
            className="h-full w-full object-cover"
            src={cruiseimg}
            alt="Our Cruise Service"
          />
        </div>

        <div className="max-w-lg bgImg3 md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-20 lg:w-3/5 lg:left-0 ">
          <div className="flex flex-col p-12 md:px-16">
            <h2 className="text-2xl font-medium  text-white lg:text-4xl">
              Machranga Cruise Service
            </h2>
            <p className="mt-4 text-gray-300">
              Experience the beauty of the Sundarbans like never before aboard
              our houseboat, Machranga Cruise. Immerse yourself in the unique
              mangrove landscape and wildlife, enjoying luxurious comfort and
              breathtaking views on your first-time visit. Join us for an
              unforgettable journey through the world's largest delta.
            </p>
            <div className="mt-8">
              <a
                href="https://machrangacruise.com"
                className="inline-block w-72 text-center text-lg font-medium 
                    text-gray-100  border-solid bg-[#946405] 
                    py-4 px-10 hover:bg-green-800 hover:shadow-md md:w-48"
              >
                Visit Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col items-center mx-auto lg:flex-row lg:max-w-5xl lg:py-12 xl:max-w-6xl">
        <div className="w-full h-64 lg:w-1/2 lg:h-auto">
          <img
            className="h-full w-full object-cover"
            src={
              "https://res.cloudinary.com/drkhrpfro/image/upload/v1752845337/WhatsApp_Image_2025-06-27_at_14.52.59_awxnr5.jpg"
            }
            alt="Our Cruise Service"
          />
        </div>

        <div className="max-w-lg bgImg3 md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-20 lg:w-3/5 lg:right-0">
          <div className="flex flex-col p-12 md:px-16">
            <h2 className="text-2xl font-medium text-white lg:text-4xl">
              Sundari Cruise Service
            </h2>
            <p className="mt-4 text-gray-300">
              Experience the beauty of the Sundarbans like never before aboard
              our houseboat, Sundari Cruise. Immerse yourself in the unique
              mangrove landscape and wildlife, enjoying luxurious comfort and
              breathtaking views on your first-time visit. Join us for an
              unforgettable journey through the world's largest delta.
            </p>
            <div className="mt-8">
              <Link
                to="/sundari_boat"
                className="inline-block w-72 text-center text-lg font-medium 
                   text-gray-100 border-solid bg-[#946405] 
                   py-4 px-10 hover:bg-green-800 hover:shadow-md md:w-48"
              >
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:py-12 xl:max-w-6xl">
        <div className="w-full h-64 lg:w-1/2 lg:h-auto">
          <img
            className="h-full w-full object-cover"
            src={
              "https://res.cloudinary.com/drkhrpfro/image/upload/v1752845651/WhatsApp_Image_2025-06-27_at_16.07.28_1_cvrxjo.jpg"
            }
            alt="Our Cruise Service"
          />
        </div>

        <div className="max-w-lg bgImg3 md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-20 lg:w-3/5 lg:left-0 ">
          <div className="flex flex-col p-12 md:px-16">
            <h2 className="text-2xl font-medium  text-white lg:text-4xl">
              Loknath Cruise Service
            </h2>
            <p className="mt-4 text-gray-300">
              Experience the beauty of the Sundarbans like never before aboard
              our houseboat, Loknath Cruise. Immerse yourself in the unique
              mangrove landscape and wildlife, enjoying luxurious comfort and
              breathtaking views on your first-time visit. Join us for an
              unforgettable journey through the world's largest delta.
            </p>
            <div className="mt-8">
              <Link
                to="/loknath_boat"
                className="inline-block w-72 text-center text-lg font-medium 
                    text-gray-100  border-solid bg-[#946405] 
                    py-4 px-10 hover:bg-green-800 hover:shadow-md md:w-48"
              >
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CruseService;
