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
const images = [

  "https://res.cloudinary.com/drkhrpfro/image/upload/v1757174017/WhatsApp_Image_2025-06-27_at_15.08.32_1_z42iob.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1757174023/WhatsApp_Image_2025-06-27_at_15.08.32_3_iah0ce.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1757174020/WhatsApp_Image_2025-06-27_at_15.08.32_2_tcobdz.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1757174052/WhatsApp_Image_2025-06-27_at_15.08.32_10_sowdks.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1757174056/WhatsApp_Image_2025-06-27_at_15.08.32_vhmmp7.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1757174039/WhatsApp_Image_2025-06-27_at_15.08.32_7_jfcjae.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1757255047/WhatsApp_Image_2025-09-07_at_7.53.01_PM_1_vkpx8x.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1757255042/WhatsApp_Image_2025-09-07_at_7.53.01_PM_jlzgud.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1757174060/WhatsApp_Image_2025-06-27_at_15.32.56_1_towugu.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1757174068/WhatsApp_Image_2025-06-27_at_15.32.56_3_tgpynk.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1757174077/WhatsApp_Image_2025-06-27_at_15.32.56_5_bojomb.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1757174085/WhatsApp_Image_2025-06-27_at_15.32.56_7_tbftjj.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1757174094/WhatsApp_Image_2025-06-27_at_15.32.56_9_cxa6f0.jpg",
    
  // crocodileimg,
  // deerimg,
  // deer2,
  // fishimg,
  // tigerimg,
  // woodpacker,
  roomimg1,
  // roomimg2,
  roomimg3,
  roomimg4,
  // tigerimgnew,
  // birdsimg,
  // boatperson,
  // boatraceimg,
  // fishimg1,
  // monkeyimg,
  // birdsnewimg,
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
  cottage,
  pathway,
  view1,
  exterior,
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState<any>(null);

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
    if (currentIndex < images.length - 1) setCurrentIndex(currentIndex + 1);
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
      <div className="relative bgImg2 w-full h-96">
        <div className="absolute inset-0 h-full w-full bg-black/40"></div>
        <div className="relative pt-28 text-center">
          <h2
            className="block antialiased tracking-normal font-bold leading-[1.3]
           text-white mb-4 text-3xl lg:text-4xl"
          >
            {/* <img
              className="mx-auto"
              src="https://i0.wp.com/tourdesundarbans.stainpixels.com/wp-content/uploads/2022/11/IMG_20221104_002515-copy.png?resize=300%2C77&ssl=1"
              alt="Special Guests Logo"
            /> */}
            Our<span className=" text-[#a97105]  ml-3">Gallery</span>
          </h2>
          <p className="inline-block antialiased w-[40rem] font-sans text-xl font-normal leading-relaxed text-white mb-9 opacity-70">
            If you're looking for random paragraphs, you've come to the right
            place. When a random word or a random sentence isn't quite enough
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {images.map((img, index) => (
          <GalleryGrid
            key={index}
            image={img}
            onClick={() => openModal(index)}
          />
        ))}
      </div>
      <ImageModal
        images={images}
        currentIndex={currentIndex}
        onClose={closeModal}
        onPrev={goToPrev}
        onNext={goToNext}
      />
    </Layout>
  );
};

export default Gallery;
