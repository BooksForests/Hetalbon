// import DatePicker from "./datecomponent/date comp";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png"

import DatePicker from "../../shared/calendar/Calendar";


const BookingModal = () => {
    return (
      <section
        className="py-10 bgImg2 sm:py-16 lg:py-24 bg-cover bg-center relative"
        // style={{
        //   backgroundImage: "url('https://c1.wallpaperflare.com/preview/772/396/951/mangroves-sundarbans-swamp-forest.jpg')", // Replace with your background image URL
        // }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-24 gap-y-10">
            <div>
              <img
                className="object-cover w-20 h-20 rounded-full"
                src={logo}
                alt=""
              />
              <blockquote>
                <p className="mt-6 text-4xl leading-relaxed text-white">
                Come with your Family & <br/><span className="text-[#a97105]">Enjoy the Wild life of 
                  <br/> The Sundarban</span>
                </p>
              </blockquote>
              {/* <p className="mt-6 text-base font-semibold text-white">Jenny Wilson</p> */}
              {/* <p className="mt-1 text-xl text-gray-300">Let's start our journey to explore this wonderland ...</p> */}
            </div>
  
            <div>
              <div className="overflow-hidden bg-white rounded-md login">
                <div className="p-8 lg:px-12 lg:py-10">
                  <h3 className="text-3xl font-bold text-[#a97105]"> Book Your  Stay at Hetalbon</h3>
                  <p className="mt-4 text-base text-gray-600">
                  
                  Book your stay now and experience the best in comfort</p>
                  <div className=" flex justify-center items-center">
                    <DatePicker />
                  </div>
                  
  
                  <Link
                    to="/bookings"
                    title=""
                    className="flex cursor-pointer items-center justify-center w-full px-4 py-4 mt-8 text-base font-semibold text-white transition-all duration-200 bg-green-700 border-2 border-transparent rounded-md hover:bg-[#a97105] focus:bg-blue-700 btn-three"
                    role="button"
                  >
                    Check Availiability
                  </Link>
                  
  
                  {/* <a
                    href="#"
                    title=""
                    className="flex items-center justify-center w-full px-4 py-4 mt-4 text-base font-semibold text-black transition-all duration-200 bg-transparent border-2 border-black rounded-md hover:bg-black focus:bg-black hover:text-white focus:text-white"
                    role="button"
                  >
                    Talk to sales
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default BookingModal;
  