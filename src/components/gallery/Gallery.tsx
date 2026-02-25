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
  { url: roomimg4, category: "Rooms" },

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
      <div className="relative bgImg2 w-full h-[50vh] min-h-[400px]">
        <div className="absolute inset-0 h-full w-full bg-black/50"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h2 className="antialiased tracking-tight font-bold leading-tight text-white mb-6 text-4xl md:text-5xl lg:text-6xl">
            Our <span className="text-[#a97105]">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-[#a97105] mb-8"></div>
          <p className="max-w-2xl font-sans text-lg md:text-xl font-light leading-relaxed text-gray-200">
            A visual journey through the heart of the Sundarbans. From our
            breathtaking views to our premium glassroom experiences.
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setCurrentIndex(null);
              }}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeCategory === cat
                ? "bg-[#a97105] text-white shadow-lg scale-105"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 aspect-[4/3]"
            >
              <GalleryGrid
                image={img.url}
                onClick={() => openModal(index)}
                className="w-full h-full transform group-hover:scale-110 transition-transform duration-700 object-cover"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300"></div>
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <span className="bg-[#a97105] text-white text-xs px-3 py-1 rounded-full">
                  {img.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ImageModal
        images={filteredImages.map((img) => img.url)}
        currentIndex={currentIndex}
        onClose={closeModal}
        onPrev={goToPrev}
        onNext={goToNext}
      />
    </Layout>
  );
};

export default Gallery;
