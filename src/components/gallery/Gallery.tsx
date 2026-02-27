/* eslint-disable @typescript-eslint/no-explicit-any */
import Layout from "../layout/Layout";
import Navbar from "../shared/navbar/Navbar";
import gallery1 from "../../assets/gallery/gallery1.jpeg";
import gallery11 from "../../assets/gallery/gallery2.jpeg";
import gallery2 from "../../assets/gallery/gallery3.jpeg";
import gallery3 from "../../assets/gallery/gallery4.jpeg";
import gallery4 from "../../assets/gallery/gallery5.jpeg";
import gallery5 from "../../assets/gallery/gallery6.jpeg";
import gallery6 from "../../assets/gallery/gallery7.jpeg";
import gallery7 from "../../assets/gallery/gallery8.jpeg";
import gallery8 from "../../assets/gallery/gallery9.jpeg";
import gallery9 from "../../assets/gallery/gallery10.jpeg";
import gallery10 from "../../assets/gallery/gallery11.jpeg";
import cottage from "../../assets/gallery/COTTAGES.jpg";
import pathway from "../../assets/gallery/Pathway.jpg";
import view1 from "../../assets/gallery/VIEW 1.jpg";
import exterior from "../../assets/gallery/Exterior.jpg";
import roomimg1 from "../../assets/rooms/room1.jpeg";
// import roomimg2 from "../../assets/rooms/room2.jpeg"
import roomimg3 from "../../assets/rooms/room3.jpeg";
import roomimg4 from "../../assets/rooms/standard.jpeg";
import GalleryGrid from "../main/gallery/GalleryGrid";
import ImageModal from "./imageModal/ImageModal";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
const galleryImages = [
  // Glassroom
  {
    url: "https://res.cloudinary.com/di4xpdjfs/image/upload/v1772013312/DSC09533_50_acp5b6.jpg",
    category: "Glassroom",
  },
  {
    url: "https://res.cloudinary.com/di4xpdjfs/image/upload/v1772013324/DSC09533_131_indhix.jpg",
    category: "Glassroom",
  },
  {
    url: "https://res.cloudinary.com/di4xpdjfs/image/upload/v1772013329/DSC09533_135_oclczx.jpg",
    category: "Glassroom",
  },
  {
    url: "https://res.cloudinary.com/di4xpdjfs/image/upload/v1772013329/DSC09533_145_xljorc.jpg",
    category: "Glassroom",
  },
  {
    url: "https://res.cloudinary.com/di4xpdjfs/image/upload/v1772013333/DSC09533_127_yxenlx.jpg",
    category: "Glassroom",
  },
  {
    url: "https://res.cloudinary.com/di4xpdjfs/image/upload/v1772013466/Screenshot_2026-02-25_at_3.27.29_PM_ssj8oz.png",
    category: "Glassroom",
  },
  {
    url: "https://res.cloudinary.com/di4xpdjfs/image/upload/v1772013544/Screenshot_2026-02-25_at_3.28.46_PM_e91x5w.png",
    category: "Glassroom",
  },

  // Rooms
  { url: roomimg1, category: "Rooms" },
  { url: roomimg3, category: "Rooms" },
  { url: "https://res.cloudinary.com/di4xpdjfs/image/upload/v1772016323/DSC09533_71_gmjlmt.jpg", category: "Rooms" },
  { url: "https://res.cloudinary.com/di4xpdjfs/image/upload/v1772016317/DSC09533_14_vlyy7y.jpg", category: "Rooms" },
  { url: "https://res.cloudinary.com/di4xpdjfs/image/upload/v1772016312/DSC09533_121_s591h6.jpg", category: "Rooms" },
  { url: "https://res.cloudinary.com/di4xpdjfs/image/upload/v1772016316/DSC09533_10_clzh7q.jpg", category: "Rooms" },
  { url: "https://res.cloudinary.com/di4xpdjfs/image/upload/v1772016309/DSC09533_11_xrlrev.jpg", category: "Rooms" },
  { url: "https://res.cloudinary.com/di4xpdjfs/image/upload/v1772016316/DSC09533_122_elg54u.jpg", category: "Rooms" },
  { url: "https://res.cloudinary.com/di4xpdjfs/image/upload/v1772016309/DSC09533_11_xrlrev.jpg", category: "Rooms" },
  { url: "https://res.cloudinary.com/di4xpdjfs/image/upload/v1772016297/DSC09533_1_ujajpd.jpg", category: "Rooms" },

  // Mud Houses
  {
    url: "https://res.cloudinary.com/di4xpdjfs/image/upload/v1772016323/DSC09533_71_gmjlmt.jpg",
    category: "Mud Houses",
  },
  {
    url: "https://res.cloudinary.com/di4xpdjfs/image/upload/v1772016323/DSC09533_72_mj88nk.jpg",
    category: "Mud Houses",
  },
  {
    url: "https://res.cloudinary.com/di4xpdjfs/image/upload/v1772016317/DSC09533_14_vlyy7y.jpg",
    category: "Mud Houses",
  },
  {
    url: "https://res.cloudinary.com/di4xpdjfs/image/upload/v1772016312/DSC09533_121_s591h6.jpg",
    category: "Mud Houses",
  },
  {
    url: "https://res.cloudinary.com/di4xpdjfs/image/upload/v1772016316/DSC09533_10_clzh7q.jpg",
    category: "Mud Houses",
  },
  {
    url: "https://res.cloudinary.com/di4xpdjfs/image/upload/v1772016309/DSC09533_11_xrlrev.jpg",
    category: "Mud Houses",
  },
  {
    url: "https://res.cloudinary.com/di4xpdjfs/image/upload/v1772016309/DSC09533_81_x4qboe.jpg",
    category: "Mud Houses",
  },
  {
    url: "https://res.cloudinary.com/di4xpdjfs/image/upload/v1772016304/DSC09533_46_zigla8.jpg",
    category: "Mud Houses",
  },
  {
    url: "https://res.cloudinary.com/di4xpdjfs/image/upload/v1772016299/DSC09533_5_d2tlpo.jpg",
    category: "Mud Houses",
  },
  { url: gallery1, category: "Mud Houses" },
  { url: gallery2, category: "Mud Houses" },
  { url: gallery3, category: "Mud Houses" },
  { url: gallery4, category: "Mud Houses" },
  { url: gallery5, category: "Mud Houses" },
  { url: gallery6, category: "Mud Houses" },
  { url: gallery7, category: "Mud Houses" },
  { url: gallery8, category: "Mud Houses" },
  { url: gallery9, category: "Mud Houses" },
  { url: gallery10, category: "Mud Houses" },
  { url: gallery11, category: "Mud Houses" },
  { url: cottage, category: "Mud Houses" },
  { url: pathway, category: "Mud Houses" },
  { url: view1, category: "Mud Houses" },
  { url: exterior, category: "Mud Houses" },

  // Glassroom (including former Sundarbans)
  {
    url: "https://res.cloudinary.com/drkhrpfro/image/upload/v1757174017/WhatsApp_Image_2025-06-27_at_15.08.32_1_z42iob.jpg",
    category: "Glassroom",
  },
  {
    url: "https://res.cloudinary.com/drkhrpfro/image/upload/v1757174023/WhatsApp_Image_2025-06-27_at_15.08.32_3_iah0ce.jpg",
    category: "Glassroom",
  },
  {
    url: "https://res.cloudinary.com/drkhrpfro/image/upload/v1757174020/WhatsApp_Image_2025-06-27_at_15.08.32_2_tcobdz.jpg",
    category: "Glassroom",
  },
  {
    url: "https://res.cloudinary.com/drkhrpfro/image/upload/v1757174052/WhatsApp_Image_2025-06-27_at_15.08.32_10_sowdks.jpg",
    category: "Glassroom",
  },
  {
    url: "https://res.cloudinary.com/drkhrpfro/image/upload/v1757174056/WhatsApp_Image_2025-06-27_at_15.08.32_vhmmp7.jpg",
    category: "Glassroom",
  },
  {
    url: "https://res.cloudinary.com/drkhrpfro/image/upload/v1757174039/WhatsApp_Image_2025-06-27_at_15.08.32_7_jfcjae.jpg",
    category: "Glassroom",
  },
  {
    url: "https://res.cloudinary.com/drkhrpfro/image/upload/v1757255047/WhatsApp_Image_2025-09-07_at_7.53.01_PM_1_vkpx8x.jpg",
    category: "Glassroom",
  },
  {
    url: "https://res.cloudinary.com/drkhrpfro/image/upload/v1757255042/WhatsApp_Image_2025-09-07_at_7.53.01_PM_jlzgud.jpg",
    category: "Glassroom",
  },
  {
    url: "https://res.cloudinary.com/drkhrpfro/image/upload/v1757174060/WhatsApp_Image_2025-06-27_at_15.32.56_1_towugu.jpg",
    category: "Glassroom",
  },
  {
    url: "https://res.cloudinary.com/drkhrpfro/image/upload/v1757174068/WhatsApp_Image_2025-06-27_at_15.32.56_3_tgpynk.jpg",
    category: "Glassroom",
  },
  {
    url: "https://res.cloudinary.com/drkhrpfro/image/upload/v1757174077/WhatsApp_Image_2025-06-27_at_15.32.56_5_bojomb.jpg",
    category: "Glassroom",
  },
  {
    url: "https://res.cloudinary.com/drkhrpfro/image/upload/v1757174085/WhatsApp_Image_2025-06-27_at_15.32.56_7_tbftjj.jpg",
    category: "Glassroom",
  },
  {
    url: "https://res.cloudinary.com/drkhrpfro/image/upload/v1757174094/WhatsApp_Image_2025-06-27_at_15.32.56_9_cxa6f0.jpg",
    category: "Glassroom",
  },
];

const categories = ["All", "Glassroom", "Mud Houses", "Rooms"];

import { motion, AnimatePresence } from "framer-motion";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState<any>(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openModal = (index: any) => {
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setCurrentIndex(null);
  };

  const goToPrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const goToNext = () => {
    if (currentIndex < filteredImages.length - 1)
      setCurrentIndex(currentIndex + 1);
  };

  return (
    <Layout>
      <Helmet>
        <title>Resort Gallery | Hetalbon</title>
        <meta
          name="description"
          content="Explore the stunning gallery of our resort"
        />
        <script>
          {`
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-NJDPL9HD');
    `}
        </script>
      </Helmet>
      <Navbar scrollEffectEnabled={false} />

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Animation/Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src={"https://scontent.fdel3-2.fna.fbcdn.net/v/t39.30808-6/625290419_756960774126701_5471319834556177461_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=13d280&_nc_ohc=KjocGvdsJ1IQ7kNvwFb7AEt&_nc_oc=AdnVRamBGbHrkcCBfDcAptVnuEC4IKPDfCr6au4xx2An67DXdZ0iOHEj6IwDr8Aikr8MjHdZzckSbUtyjZp0XcG9&_nc_zt=23&_nc_ht=scontent.fdel3-2.fna&_nc_gid=O669ozjlRLbqpMn7yIMxFw&oh=00_AfuEIoRroNIAA3uJscTbFs2BQgnPti-YoHLnKa3Pm1lFjw&oe=69A4C575"}
            alt="Hero Background"
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#a97105] font-semibold tracking-[0.2em] uppercase text-sm mb-4 block"
          >
            A Visual Journey
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Our <span className="text-[#a97105]">Experience</span>
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-24 h-1 bg-[#a97105] mx-auto mb-8"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-200 text-lg md:text-xl font-light leading-relaxed tracking-wide"
          >
            Immerse yourself in the tranquility of Sundarbans through our
            curated collection of moments. From premium glassroom views to the
            authentic charm of our mud houses.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <main className="bg-white min-h-screen">
        <div className="max-w-[1400px] mx-auto px-4 py-20">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat, idx) => (
              <motion.button
                key={cat}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => {
                  setActiveCategory(cat);
                  setCurrentIndex(null);
                }}
                className={`relative px-8 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-500 overflow-hidden ${activeCategory === cat
                  ? "text-white shadow-[0_10px_20px_rgba(169,113,5,0.3)]"
                  : "text-gray-500 hover:text-gray-800 bg-gray-50"
                  }`}
              >
                <span className="relative z-10">{cat}</span>
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#a97105] z-0"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Image Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((img, index) => (
                <motion.div
                  key={img.url}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <GalleryGrid
                    image={img.url}
                    category={img.category}
                    onClick={() => openModal(index)}
                    className="aspect-[4/5] sm:aspect-square lg:aspect-[4/5]"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      <ImageModal
        images={filteredImages.map((img) => img.url)}
        currentIndex={currentIndex}
        onClose={closeModal}
        onPrev={goToPrev}
        onNext={goToNext}
      />

      <style>{`
        @keyframes slow-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s infinite alternate ease-in-out;
        }
      `}</style>
    </Layout>
  );
};

export default Gallery;
