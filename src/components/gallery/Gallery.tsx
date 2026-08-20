/* eslint-disable @typescript-eslint/no-explicit-any */
import Layout from "../layout/Layout";
import Navbar from "../shared/navbar/Navbar";
import GalleryGrid from "../main/gallery/GalleryGrid";
import ImageModal from "./imageModal/ImageModal";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { url } from "../../config/config";
const API_URL = `${url}/api/v1/cms/pages/69d3705a122e71dc4d47903a`;

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState<any>(null);
  const [galleryImages, setGalleryImages] = useState<any[]>([]);
  const [categories, setCategories] = useState<string[]>(["All"]);
  const [content, setContent] = useState({
    header: "Our Experience",
    description: "Discover the beauty of our resort."
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();

        if (data.result && data.result.content) {
          const cmsContent = data.result.content;

          // Map header and description
          setContent({
            header: cmsContent.header?.value || "Our Experience",
            description: cmsContent.description?.value || ""
          });

          // Process gallery categories and images
          const rawGallery = cmsContent.gallery?.value || [];
          const allImages: any[] = [];
          const dynamicCategories = ["All"];

          rawGallery.forEach((section: any) => {
            // Capitalize category for clean UI
            const catName = section.category.charAt(0).toUpperCase() + section.category.slice(1);
            if (!dynamicCategories.includes(catName)) {
              dynamicCategories.push(catName);
            }

            section.images.forEach((img: any) => {
              allImages.push({
                url: img.url,
                category: catName
              });
            });
          });

          setGalleryImages(allImages);
          setCategories(dynamicCategories);
        }
      } catch (error) {
        console.error("Error fetching gallery data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGalleryData();
  }, []);

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
            src={"https://res.cloudinary.com/di4xpdjfs/image/upload/v1772016304/DSC09533_46_zigla8.jpg"}
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
            Our <span className="text-[#a97105]">{content.header.split(' ').pop()}</span>
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
            {content.description}
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
          {isLoading ? (
            <div className="flex flex-col items-center justify-center min-h-[400px]">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="w-12 h-12 border-4 border-[#a97105] border-t-transparent rounded-full mb-4"
              />
              <p className="text-gray-500 font-medium">Loading Visual Experiences...</p>
            </div>
          ) : (
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
          )}
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
