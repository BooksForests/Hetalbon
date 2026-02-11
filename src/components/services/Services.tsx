import menucard from "../../assets/menucard.pdf";
import Layout from "../layout/Layout";
import Navbar from "../shared/navbar/Navbar";
import CruseService from "../shared/boatService/CruseService";
import ServiceList from "../shared/serviceList/ServiceList";
import BrochureRenderer from "../shared/pdfReader/PdfReader";
import Iternity from "../shared/iternity/Iternity";
import woodpackerimg from "../../assets/gallery/woodPacker.jpg";
import crocodileimg from "../../assets/gallery/crocodile.jpg";
import { Helmet } from "react-helmet-async";

const Services = () => {
  return (
    <Layout>
      <Helmet>
        <title>Our Services | Hetalbon</title>
        <meta
          name="description"
          content="Check out our services and day-to-day itinerary"
        />
      </Helmet>
      <Navbar scrollEffectEnabled={false} />
      {/* <div className="relative  w-full h-[380px] " id="home">
        <div className="absolute   inset-0   ">
          <img
            src={bgimg1}
            alt="Background Image"
            className=" object-cover  brightness-50 w-full h-full"
          />
        </div>
        <div className="absolute inset-9      flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <div className="text-white font-bold pt-20 md:pt-0 text-4xl md:text-5xl leading-tight mb-2">
            <span className=" text-[#a97105]  ml-3">  Hetalbon</span> eco resort
            </div>
            <p className="font-regular text-white text-xl mb-8 mt-4">
              Enjoy the beauty of Sundarbans
            </p>
            <Link
              to="/contact"
              className="px-6 py-3 bg-[#a97105] text-white font-medium rounded-full hover:bg-[#c09858]  transition duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div> */}

      <ServiceList />
      <div className="bg-[#f7f7f7] w-full pt-8">
        <div className="flex justify-center text-4xl font-bold text-[#a97105] text-center">
          Our Food Menu
        </div>
        <BrochureRenderer brochure={menucard} />
      </div>

      <div className="bgImg2 w-full px-5  mt-5  pt-10 pb-8">
        {/* <img
          className="mx-auto"
          src="https://i0.wp.com/tourdesundarbans.stainpixels.com/wp-content/uploads/2022/11/IMG_20221104_002515-copy.png?resize=300%2C77&ssl=1"
          alt="Special Guests Logo"
        /> */}
        <div className="font-semibold text-[#946405] text-4xl mx-auto text-center mb-10">
          Our Day to Day Itinerary
        </div>
        <div className="md:flex md:pl-10">
          <Iternity />
          <div className="mr-0 md:mr-8 mb-6 md:mb-0 md:ml-20 pt-80 hidden md:inline md:flex ">
            <img
              className="h-[23rem] w-96 mx-auto border-4 border-white  -mt-56"
              src={woodpackerimg}
              alt="can_help_banner"
            />
            <img
              className="h-[23rem] w-96 mx-auto border-4 border-white z-[5]  -ml-44"
              src={crocodileimg}
              alt="can_help_banner"
            />
          </div>
        </div>
      </div>
      <CruseService />
    </Layout>
  );
};

export default Services;
