import { motion } from "framer-motion";

const Description = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <section className="pb-16 pt-12  bgImg2 ">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold leading-tight text-gray-100 sm:text-4xl lg:text-5xl">
                How to Book <span className=" text-[#a97105]">your Stay?</span>
              </h2>
              <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-300">
                Book your stay at 3 simple steps
              </p>
            </div>

            <div className="relative mt-12 lg:mt-20">
              <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                <img
                  className="w-full"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
                  alt=""
                />
              </div>

              <motion.div
                className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12"
                variants={containerVariants}
              >
                <motion.div variants={itemVariants}>
                  <div className="flex items-center justify-center w-16 h-16 mx-auto bg-[#a97105] border-2 border-gray-200 rounded-full shadow">
                    <span className="text-xl font-semibold text-gray-100">1</span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold leading-tight text-gray-100 md:mt-10">
                    Choose a Cottage
                  </h3>
                  <p className="mt-4 text-base text-gray-200">
                    Choose your favourite cottage according to your desire we have variety of cottage
                  </p>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <div className="flex items-center justify-center w-16 h-16 mx-auto bg-[#a97105] border-2 border-gray-200 rounded-full shadow">
                    <span className="text-xl font-semibold text-gray-100">2</span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold leading-tight text-gray-100 md:mt-10">
                    Choose your activity
                  </h3>
                  <p className="mt-4 text-base text-gray-200">
                  In Hetalbon you can do lots of activities and the twist is you can choose your own activities.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <div className="flex items-center justify-center w-16 h-16 mx-auto bg-[#a97105] border-2 border-gray-200 rounded-full shadow">
                    <span className="text-xl font-semibold text-gray-100">3</span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold leading-tight text-gray-100 md:mt-10">
                    Final payment
                  </h3>
                  <p className="mt-4 text-base text-gray-200">
                   Everything done now complete the Payment process and You are ready to explore the Beauty of Sundarban with Hetalbon Resort
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Description;
