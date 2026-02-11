import boatimg from "../../../assets/rooms/boat.jpeg";
// import foodimg from "../../../assets/home/food.jpg"
// import boatraceimg from "../../../assets/gallery/boatrace.jpeg"

const ServiceList = () => {
  return (
    <section className="py-10 bgImg3" id="services">
      <div className="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6">
        <div className="text-center mb-10">
          {/* <img
        className="mx-auto"
        src="https://i0.wp.com/tourdesundarbans.stainpixels.com/wp-content/uploads/2022/11/IMG_20221104_002515-copy.png?resize=300%2C77&ssl=1"
        alt="Special Guests Logo"
      /> */}
          <div className="font-semibold text-[#946405] text-4xl mx-auto text-center mb-10">
            Our Services
          </div>
          {/* <div className="text-gray-400">
      we offer a variety of authentic activities designed to immerse guests in the local culture and natural beauty of the Sundarbans.
      </div> */}
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="mr-0 md:mr-8 mb-6 md:mb-0">
            <img
              className="h-[26rem] w-96 mx-auto border-4 border-white"
              src={boatimg}
              alt="can_help_banner"
            />
          </div>

          <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-2xl font-bold text-md mb-6 text-white">
                  Traditional Fishing
                </h3>
                <p className="text-sm text-gray-300">
                  Our fishing experience allows visitors to try traditional
                  methods in the serene waters surrounding the resort,
                  connecting with nature and the local way of life. Guests can
                  also participate in crab-catching activities, where they learn
                  how locals expertly catch and handle crabs—a true Sundarban
                  tradition.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-2xl font-bold text-md mb-6 text-white">
                  Organic Farming Program
                </h3>
                <p className="text-sm text-gray-300">
                  We promote sustainable practices through our organic farming
                  program, where guests can engage with our farming community,
                  learn about organic cultivation methods, and even harvest
                  fresh produce. This experience offers a deep connection to the
                  earth and highlights the importance of eco-friendly
                  practices..
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-2xl font-bold text-md mb-6 text-white">
                  Bono Bibi Jatra
                </h3>
                <p className="text-sm text-gray-300">
                  For a cultural touch, witness the revered Bono Bibi Jatra, a
                  dramatic folk performance that tells the tale of Bono Bibi, we
                  showcase the vibrant folk dances of Bengal, Our evenings come
                  alive with Baul Sangeet, the spiritual music of wandering Baul
                  singers, offering an enchanting glimpse into Bengal’s soulful
                  traditions..
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-2xl font-bold text-md mb-6 text-white">
                  Our hatchery
                </h3>
                <p className="text-sm text-gray-300">
                  During the monsoon, guests can observe the fascinating process
                  of egg hatching at our hatchery, which gives insight into the
                  delicate balance of life in this unique ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceList;
