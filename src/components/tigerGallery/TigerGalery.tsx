import { useNavigate } from "react-router-dom";
import aboutimg from "../../assets/gallery/tiger licking.jpeg";
import tigerWalk from "../../assets/gif/walk.gif";
import HeaderChip from "../shared/chip/HeaderChip";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const TigerGalery = () => {
    const controls = useAnimation();
    const navigation=useNavigate()
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };

    const handlenavigate=()=>{
      navigation("/gallery")
    }

    return (
        <div ref={ref} className="relative bg-white mt-2 overflow-hidden">
            <div className="relative flex items-center justify-center">
                <motion.img
                    className="absolute top-10   -left-60 h-[100%] w-full object-center opacity-50 z-10"
                    src={tigerWalk}
                    alt="Tiger Walking"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ duration: 2 }}
                />
                <div className="relative mx-auto h-full px-4 pb-20 md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 z-20">
                    <motion.div
                        className="flex flex-col items-center justify-between lg:flex-row py-16"
                        initial="hidden"
                        animate={controls}
                        variants={variants}
                    >
                        <motion.div className="relative z-30 lg:max-w-2xl lg:pr-5">
                            <HeaderChip text={"Glory of Sundarban"} />
                            <h2 className="mb-6 text-5xl font-light leading-snug tracking-tight text-g1 sm:text-7xl sm:leading-snug">
                                Witness you to the Bengal
                                <span className="my-1 inline-block  px-4 font-bold text-g4 text-[#a97105] animate__animated animate__flash">
                                    Tigers!
                                </span>
                            </h2>
                            <p className="text-base text-gray-700">
                                Embark on an Adventure to Witness the Great Bengal Tigers! 
                                Unveil the mysteries of the wild with us. See our resort gallery where we captured all beautiful images
                                for you that show what majestic atmosphere is here for you in Hetalbon.
                            </p>
                            <div className="mt-10 flex items-center">
                                <motion.div
                                    // onClick={handlenavigate}
                                    aria-label="See Gallery"
                                    className="group px-5 py-3 cursor-pointer shadow-xl text-white rounded-full bg-green-700 inline-flex items-center font-semibold text-g1"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handlenavigate}
                                >
                                    See Gallery
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="ml-4 h-6 w-6 transition-transform group-hover:translate-x-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        ></path>
                                    </svg>
                                </motion.div>
                            </div>
                        </motion.div>
                        <motion.div 
                            className="relative hidden lg:ml-20 lg:block lg:w-1/2"
                            initial={{ opacity: 0, x: 100 }}
                            animate={controls}
                            transition={{ duration: 1 }}
                            variants={{ visible: { opacity: 1, x: 0 }, hidden: { opacity: 0, x: 100 } }}
                        >
                            <div className="shadow-xl mx-auto w-fit overflow-hidden rounded-[6rem] rounded-br-none rounded-tl-none">
                                <img src={aboutimg} alt="About Us" />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default TigerGalery;
