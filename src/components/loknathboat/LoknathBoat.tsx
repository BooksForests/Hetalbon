import { useState } from "react";
import Navbar from "../shared/navbar/Navbar";

// Replace these URLs with your own
const imageUrls = [
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1752845708/WhatsApp_Image_2025-06-27_at_15.33.41_1_umcobw.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1752845667/WhatsApp_Image_2025-06-27_at_16.07.48_2_lqos50.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1752845692/WhatsApp_Image_2025-06-27_at_15.08.46_w4vanu.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1752845690/WhatsApp_Image_2025-06-27_at_15.08.34_2_b69ibv.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1752845663/WhatsApp_Image_2025-06-27_at_16.07.47_2_lpmm1o.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1752845651/WhatsApp_Image_2025-06-27_at_16.07.28_1_cvrxjo.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1752845704/WhatsApp_Image_2025-06-27_at_15.08.48_1_l5v1wx.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1752845700/WhatsApp_Image_2025-06-27_at_15.08.49_qjwh7x.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1752845699/WhatsApp_Image_2025-06-27_at_15.08.49_2_rcj70a.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1752845680/WhatsApp_Image_2025-06-27_at_14.52.34_qldpb6.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1752845678/WhatsApp_Image_2025-06-27_at_14.52.33_exgbpc.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1752845672/WhatsApp_Image_2025-06-17_at_5.06.54_PM_1_ngykgj.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1752845668/WhatsApp_Image_2025-06-27_at_16.07.49_k4vyla.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1752845668/WhatsApp_Image_2025-06-27_at_16.07.43_2_akzvbz.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1752845648/WhatsApp_Image_2025-06-27_at_16.07.28_refglr.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1752845655/WhatsApp_Image_2025-06-27_at_16.07.30_1_w7pmcs.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1752845664/WhatsApp_Image_2025-06-27_at_16.07.44_g38nrr.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1752845673/WhatsApp_Image_2025-06-17_at_5.06.54_PM_oodsgy.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1752845683/WhatsApp_Image_2025-06-27_at_15.08.34_1_tv8i3n.jpg",
  "https://res.cloudinary.com/drkhrpfro/image/upload/v1752845666/WhatsApp_Image_2025-06-27_at_16.07.31_iqzt5r.jpg",
];

const LoknathBoat = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Navbar scrollEffectEnabled={false} />

      <div className="max-w-7xl mx-auto py-10 px-5 sm:px-0">
        <h1 className="text-3xl font-bold mb-8 text-center">Loknath Boat Gallery</h1>

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

export default LoknathBoat;
