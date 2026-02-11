// ImageModal.js

import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi"; // Icons from react-icons for close and navigation

const ImageModal = ({ images, currentIndex, onClose, onPrev, onNext }:any) => {
  // If no image is selected, don't render the modal
  if (currentIndex === null) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      {/* Close Button */}
      <button
        className="absolute top-5 right-5 text-white text-3xl"
        onClick={onClose}
        aria-label="Close"
      >
        <FiX />
      </button>

      {/* Previous Button */}
      <button
        className={`absolute left-5 text-white text-3xl ${
          currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={onPrev}
        disabled={currentIndex === 0}
        aria-label="Previous"
      >
        <FiChevronLeft />
      </button>

      {/* Image Display */}
      <img
        src={images[currentIndex]}
        alt={`Gallery Image ${currentIndex + 1}`}
        className="max-w-full max-h-full object-contain"
      />

      {/* Next Button */}
      <button
        className={`absolute right-5 text-white text-3xl ${
          currentIndex === images.length - 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={onNext}
        disabled={currentIndex === images.length - 1}
        aria-label="Next"
      >
        <FiChevronRight />
      </button>
    </div>
  );
};

export default ImageModal;
