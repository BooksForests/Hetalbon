import { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import About from "../main/about/About";
import { BentoGridDemo } from "../main/activity/Activity";
import BookingModal from "../main/bookingModal/BookingModal";
import Description from "../main/description/Description";
import Hero from "../main/hero/Hero";
import Room from "../main/rooms/Room";
// import { Testimonials } from '../main/testimonials/Testimonials'
import { AnimatePresence } from "framer-motion";
import Preloader from "../shared/preloader/PreLoader";
import Navbar from "../shared/navbar/Navbar";
import { Testimonials } from "../main/testimonials/Testimonials";
import TigerGalery from "../tigerGallery/TigerGalery";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      // const LocomotiveScroll = (await import('locomotive-scroll')).default;
      // const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);
  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      {!isLoading && (
        <Layout>
          <Navbar scrollEffectEnabled={true} />
          <Hero />
          <About />
          <Description />
          <TigerGalery/>
          <Room />
          <BentoGridDemo />
          <BookingModal />
          <Testimonials />
        </Layout>
      )}
    </>
  );
};

export default Home;
