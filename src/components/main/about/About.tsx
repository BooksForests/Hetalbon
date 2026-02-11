import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Circleui from "../../shared/circlesui/Circleui";
import HeaderChip from "../../shared/chip/HeaderChip";
import treebg from "../../../assets/gif/tree.png";
import homimg1 from "../../../assets/gallery/gallery4.jpeg"
import homimg2 from "../../../assets/home/homeimg2.jpg"
import homimg3 from "../../../assets/home/home3.jpeg"


const About = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2, // Adjust this threshold to determine when the animations should trigger
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <section className="overflow-hidden pb-24 ">
        <div className="container mx-auto">
          <div
            ref={ref}
            className="flex flex-wrap items-center justify-between -mx-4"
          >
            <div className="w-full px-4 lg:w-6/12 pt-24">
              <div className="flex px-5 md:px-0 items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <motion.div
                    className="py-3 sm:py-4 "
                    initial="hidden"
                    animate={controls}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    variants={imageVariants}
                  >
                    <img
                      src={homimg1}
                      alt=""
                      className="w-full md:w-80 md:h-72 shadow-xl rounded-2xl"
                    />
                  </motion.div>
                  <motion.div
                    className="py-3 sm:py-4"
                    initial="hidden"
                    animate={controls}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    variants={imageVariants}
                  >
                    <img
                      src={homimg2}
                      alt=""
                      className="w-full md:w-72 md:h-96 rounded-2xl"
                    />
                  </motion.div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <motion.div
                    className="relative z-10 my-4"
                    initial="hidden"
                    animate={controls}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    variants={imageVariants}
                  >
                    <img
                      src={homimg3}
                      alt=""
                      className="w-full rounded-2xl"
                    />
                    <Circleui />
                  </motion.div>
                </div>
              </div>
            </div>

            <motion.div
              className="w-full -mt-56 px-10 md:px-4 lg:w-1/2 xl:w-5/12 flex relative"
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.6, delay: 0.7 }}
              variants={textVariants}
            >
              <div className="mt-10 pt-60 lg:mt-0 relative z-10">
                <span className="block mb-4  pt-10 flex justify-center md:justify-start text-lg font-semibold text-primary">
                  <HeaderChip />
                </span>
                <h2 className="mb-5 text-3xl text-center md:text-start font-bold text-dark sm:text-[40px]/[48px]">
                  Why choose Hetalbon Eco Resort?
                </h2>
                <p className="mb-5 text-base text-center md:text-start text-body-color dark:text-dark-6">
                  This is the only eco-resort in the delta region which is run
                  by a poacher turned well acclaimed conservationist having 40
                  years of experience with the tiger and the mangrove. He is the
                  man who associated himself with the capture and release of at
                  least 70 endangered tigers to the jungle. He is considered to
                  be the man who transformed his village from a hotbed of
                  poaching to the frontline of tiger conservation.
                </p>
                <p className="mb-8 text-base text-center md:text-start text-body-color dark:text-dark-6">
                  No other person in this tourist circuit perhaps has a better
                  knowledge of the terrain other than Anil Mistry, the Director
                  of this eco-resort. Hetalbon is the right choice of your
                  destination to explore the Sundarbans.
                </p>
                <a
                  href="javascript:void(0)"
                  className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90"
                >
                  Get Started
                </a>
              </div>
              <div className="absolute -top-0  left-0 w-[110%] h-[180%] z-0">
                <img
                  className="w-full h-full object-cover"
                  src={treebg}
                  alt="background"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
