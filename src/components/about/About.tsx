import { motion } from "framer-motion";
import {
  IconLeaf,
  IconWind,
  IconCheck,
  IconHeart,
  IconArrowRight,
  IconPlant2,
  IconAnchor,
  IconSoup,
  IconUsersGroup,
  IconMapPins
} from "@tabler/icons-react";
import Navbar from "../shared/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import Layout from "../layout/Layout";
import { Helmet } from "react-helmet-async";
import aboutimg from "../../assets/aboutus/WhatsApp Image 2024-07-01 at 12.18.38.jpeg";

const About = () => {
  const navigate = useNavigate();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <Layout>
      <Helmet>
        <title>About Hetalbon Eco Resort | Best Eco Resort in Sundarbans</title>
        <meta
          name="description"
          content="Welcome to Hetalbon Eco Resort, a peaceful nature retreat in the heart of Sundarbans National Park. Eco-friendly stay, wildlife tours, and traditional food."
        />
      </Helmet>

      <Navbar scrollEffectEnabled={true} />

      {/* Hero Section */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src="https://imgs.search.brave.com/9Oc3GWZIR8xVN5Hat81kglRt-Gm_k7pwB4khxtz8cPg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aG9saWRpZnkuY29t/L2ltYWdlcy9jbXN1/cGxvYWRzL2NvbXBy/ZXNzZWQvU3VuZGFy/YmFuX1RpZ2VyXzIw/MTgwMjEyMTYzNzQ3/LmpwZw"
            alt="Sundarbans National Park"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-8xl font-bold text-white mb-6">
              About <span className="text-[#a97105]">Hetalbon</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed max-w-2xl mx-auto">
              A serene sanctuary where nature and comfort meet in the heart of the Sundarbans.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent z-20" />
      </section>

      {/* Intro Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Your Peaceful Retreat in <br />
                <span className="text-green-800">Sundarbans</span>
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed text-justify">
                <p>
                  Welcome to Hetalbon Eco Resort, a peaceful eco resort in Sundarbans, located in the heart of Sundarbans National Park, West Bengal. Surrounded by rivers, mangrove forests, and rich wildlife, our resort is an ideal choice for travellers looking for a comfortable nature retreat.
                </p>
                <p>
                  We welcome families, couples, and nature lovers who want a simple, eco-friendly stay close to nature. Our resort is designed to offer an honest experience without disturbing the delicate balance of the environment.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={aboutimg}
                  alt="Resort Entrance"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-green-800 p-8 rounded-2xl shadow-xl hidden md:block">
                <div className="text-white text-center">
                  <p className="text-5xl font-bold mb-1">Eco</p>
                  <p className="text-sm uppercase tracking-widest opacity-80">Friendly Stay</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <motion.h2
              {...fadeIn}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              Our Journey & <span className="text-[#a97105]">Commitment</span>
            </motion.h2>
            <div className="w-24 h-1 bg-green-800 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              {...fadeIn}
              className="p-10 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <IconPlant2 className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Roots of Hetalbon</h3>
              <p className="text-gray-600 leading-relaxed text-justify">
                Hetalbon Eco Resort was created with one clear idea — to offer guests an honest and close-to-nature experience in the Sundarbans. We wanted to build a place where visitors can enjoy this natural beauty without disturbing the environment. This region is known for its unique mangrove forests, calm waterways, and diverse wildlife.
              </p>
            </motion.div>

            <motion.div
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="p-10 bg-green-900 rounded-3xl shadow-lg border border-green-800 text-white hover:transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <IconUsersGroup className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Partnership with BNWCS</h3>
              <p className="text-white/80 leading-relaxed text-justify">
                The resort is closely associated with BNWCS (Bali Nature and Wildlife Conservation Society), an organisation dedicated to wildlife protection, mangrove conservation, and community development. This partnership reflects our strong commitment to responsible tourism and environmental care.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/3 sticky top-32">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">What We Offer</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                At Hetalbon Eco Resort, we focus on simple comfort and warm hospitality. Our spaces are designed to blend with nature while still providing everything you need for a relaxing stay.
              </p>
              <button
                onClick={() => navigate('/services')}
                className="group flex items-center gap-3 px-8 py-4 bg-green-800 text-white rounded-full hover:bg-green-900 transition-all shadow-lg shadow-green-900/20"
              >
                Explore Services
                <IconArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Clean Accommodation", desc: "Ethnic cottages designed with natural materials for local charm.", icon: <IconLeaf /> },
                { title: "Peaceful Surroundings", desc: "Quiet stays away from city noise, right next to mangroves.", icon: <IconWind /> },
                { title: "Local Traditional Food", desc: "Authentic Sundarbans cuisine made with fresh local ingredients.", icon: <IconSoup /> },
                { title: "Friendly Staff", desc: "Warm hospitality and personal care that makes you feel at home.", icon: <IconHeart /> },
                { title: "Guided Tours", desc: "In-depth explorations of Sundarbans wildlife and local culture.", icon: <IconMapPins /> },
                { title: "River Safaris", desc: "Quiet boat tours through the secret canals of the forest.", icon: <IconAnchor /> },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  {...fadeIn}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-3xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl hover:border-transparent transition-all group"
                >
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-green-700 group-hover:bg-green-700 group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-green-950 z-0">
          <img
            src="https://images.unsplash.com/photo-1501854140801-50d01674aa3e?q=80&w=1920&auto=format&fit=crop"
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
            alt="Jungle background"
          />
        </div>
        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">Our Mission</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Eco-Friendly", desc: "Promoting responsible tourism in Sundarbans." },
                { title: "Memorable Stay", desc: "Comfortable experience for every guest." },
                { title: "Cultural Beauty", desc: "Showcasing the region's nature & culture." },
              ].map((m, idx) => (
                <div key={idx} className="p-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl">
                  <div className="text-[#a97105] mb-4 flex justify-center">
                    <IconCheck size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{m.title}</h4>
                  <p className="text-white/60 text-sm">{m.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Choose <br /><span className="text-[#a97105]">Hetalbon Eco Resort</span></h2>
              <ul className="space-y-6">
                {[
                  "Prime location near Sundarbans National Park",
                  "Trusted eco resorts with sustainable practices",
                  "Expert-guided wildlife tours and river safaris",
                  "Close association with BNWCS for conservation",
                  "Peaceful environment for families and couples",
                  "Warm hospitality that feels like home"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <IconCheck size={14} className="text-green-700" />
                    </div>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <div className="relative">
              <div className="rounded-[40px] overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1544735038-179ad91b0522?q=80&w=2070&auto=format&fit=crop"
                  alt="Resort View"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-green-50 rounded-[40px]" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-green-800 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">
              Ready to experience the magic of Sundarbans?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto relative z-10">
              We offer more than just a place to stay — we offer a calm, meaningful experience connected to nature, wildlife, and local culture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <button
                onClick={() => navigate('/contact')}
                className="px-10 py-4 bg-white text-green-900 font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg"
              >
                Contact Us Now
              </button>
              <button
                onClick={() => navigate('/bookings')}
                className="px-10 py-4 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-colors"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
