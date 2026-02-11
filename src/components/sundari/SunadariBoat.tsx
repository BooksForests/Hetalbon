import { useState } from "react";
import Navbar from "../shared/navbar/Navbar";

const imageUrls = [
    "https://res.cloudinary.com/drkhrpfro/image/upload/v1752845595/WhatsApp_Image_2025-06-27_at_14.52.59_xwxd5b.jpg",
    "https://res.cloudinary.com/drkhrpfro/image/upload/v1752845594/WhatsApp_Image_2025-06-27_at_14.52.58_1_ngezdy.jpg",
    "https://res.cloudinary.com/drkhrpfro/image/upload/v1752845592/WhatsApp_Image_2025-06-27_at_14.52.57_1_dzyten.jpg",
    "https://res.cloudinary.com/drkhrpfro/image/upload/v1752845551/WhatsApp_Image_2025-06-27_at_16.31.10_bxd2a0.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1752845598/WhatsApp_Image_2025-06-17_at_5.08.07_PM_2_wzltfx.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1752845597/WhatsApp_Image_2025-06-27_at_15.08.52_1_yff0ty.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1752845587/WhatsApp_Image_2025-06-17_at_5.08.10_PM_1_qpd8ad.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1752845585/WhatsApp_Image_2025-06-27_at_16.07.37_tnzy2m.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1752845579/WhatsApp_Image_2025-06-27_at_15.08.54_tq7ymt.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1752845578/WhatsApp_Image_2025-06-27_at_15.08.53_bg0p5b.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1752845565/WhatsApp_Image_2025-06-27_at_16.07.39_inz4pd.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1752845549/WhatsApp_Image_2025-06-27_at_16.31.07_dttprr.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1752845539/WhatsApp_Image_2025-06-27_at_16.51.28_u1ocma.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1752845534/WhatsApp_Image_2025-06-27_at_16.51.21_1_mrbbs5.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1752845583/WhatsApp_Image_2025-06-27_at_16.07.36_2_awcwon.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1752845579/WhatsApp_Image_2025-06-27_at_15.08.54_tq7ymt.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1752845552/WhatsApp_Image_2025-06-27_at_16.51.03_1_rrcdlu.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1752845536/WhatsApp_Image_2025-06-27_at_16.51.14_1_fu4ooy.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1752845584/WhatsApp_Image_2025-06-27_at_16.07.37_2_v82bcf.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1752845590/WhatsApp_Image_2025-06-27_at_14.52.53_1_t3b0og.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1752845587/WhatsApp_Image_2025-06-17_at_5.08.07_PM_1_bwtrqf.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1752845547/WhatsApp_Image_2025-06-27_at_16.30.49_1_szinie.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1752845546/WhatsApp_Image_2025-06-27_at_16.30.32_vazgwb.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1752845545/WhatsApp_Image_2025-06-27_at_16.30.32_1_nnceg0.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1752845545/WhatsApp_Image_2025-06-27_at_16.30.14_2_hhv8fm.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1752845532/WhatsApp_Image_2025-06-27_at_16.51.22_dqk30o.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1752845529/WhatsApp_Image_2025-06-27_at_16.51.16_1_villcr.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1752845519/WhatsApp_Image_2025-06-27_at_16.52.48_1_nezgeh.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1752845564/WhatsApp_Image_2025-06-27_at_16.07.39_2_lgzry3.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1752845590/WhatsApp_Image_2025-06-27_at_14.52.53_1_t3b0og.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1752845577/WhatsApp_Image_2025-06-27_at_16.07.46_1_bqyon2.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1752845570/WhatsApp_Image_2025-06-27_at_16.07.39_1_vjqkkz.jpg",
  // ""
  
  // Add more image URLs here
];

const SunadariBoat = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Navbar scrollEffectEnabled={false} />

      <div className="max-w-7xl mx-auto  py-10 px-5 sm:px-0">
        <h1 className="text-3xl font-bold mb-8 text-center">Sunadari Boat Gallery</h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {imageUrls.map((url, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(url)}
              className="cursor-pointer overflow-hidden rounded-xl shadow hover:shadow-lg transition duration-300"
            >
              <img
                src={url}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-white text-3xl font-bold"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SunadariBoat;
