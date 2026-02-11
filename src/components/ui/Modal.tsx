import React, { ReactNode, MouseEvent } from "react";
import { motion } from "framer-motion";
import { IconSquareRoundedXFilled } from "@tabler/icons-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleBackdropClick}
    >
      <motion.div
        className="bg-white rounded-lg p-6 pt-12 shadow-lg w-full max-w-lg relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <button
          onClick={onClose}
          className="absolute mb-10 flex gap-1 top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <IconSquareRoundedXFilled />
          Close
        </button>
        {children}
      </motion.div>
    </div>
  );
};

export default Modal;
