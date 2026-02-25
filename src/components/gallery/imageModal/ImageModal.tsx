import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const ImageModal = ({ images, currentIndex, onClose, onPrev, onNext }: any) => {
  if (currentIndex === null) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-[100] p-4 md:p-10"
        onClick={onClose}
      >
        {/* Close Button */}
        <motion.button
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="absolute top-6 right-6 text-white text-4xl z-[110] bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
          onClick={onClose}
          aria-label="Close"
        >
          <FiX />
        </motion.button>

        {/* Previous Button */}
        <button
          className={`absolute left-4 md:left-10 text-white text-5xl z-[110] bg-white/5 hover:bg-white/20 p-3 rounded-full transition-all ${currentIndex === 0 ? "opacity-20 cursor-not-allowed" : "opacity-70 hover:opacity-100"
            }`}
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          disabled={currentIndex === 0}
        >
          <FiChevronLeft />
        </button>

        {/* Image Display */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative max-w-5xl max-h-[85vh] flex items-center justify-center p-2"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={images[currentIndex]}
            alt={`Gallery Image ${currentIndex + 1}`}
            className="rounded-lg shadow-2xl max-w-full max-h-full object-contain select-none"
          />
          <div className="absolute -bottom-10 left-0 right-0 text-center text-white/60 font-medium">
            {currentIndex + 1} / {images.length}
          </div>
        </motion.div>

        {/* Next Button */}
        <button
          className={`absolute right-4 md:right-10 text-white text-5xl z-[110] bg-white/5 hover:bg-white/20 p-3 rounded-full transition-all ${currentIndex === images.length - 1 ? "opacity-20 cursor-not-allowed" : "opacity-70 hover:opacity-100"
            }`}
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          disabled={currentIndex === images.length - 1}
        >
          <FiChevronRight />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageModal;
