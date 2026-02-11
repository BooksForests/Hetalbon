import { useState, useEffect } from "react";

const images = [
  {
    src: "https://res.cloudinary.com/diecfwnp9/image/upload/v1730143308/gse58gowa6bzs8khnbgb.jpg",
    title: "Achievement 1",
  },
  {
    src: "https://res.cloudinary.com/diecfwnp9/image/upload/v1730143309/sa95zxjqvab4102y9xac.jpg",
    title: "Achievement 2",
  },
  {
    src: "https://res.cloudinary.com/diecfwnp9/image/upload/v1730143307/r8gk51gmt3b3wgjltaus.jpg",
    title: "Achievement 2",
  },
  {
    src: "https://res.cloudinary.com/diecfwnp9/image/upload/v1730143306/hlxleju4g6utlyw7axjz.jpg",
    title: "Achievement 1",
  },

  {
    src: "https://res.cloudinary.com/diecfwnp9/image/upload/v1730143307/wfqcs5mgahywuioudhoi.jpg",
    title: "Achievement 1",
  },
  {
    src: "https://res.cloudinary.com/diecfwnp9/image/upload/v1730143306/ftvcq9py3qqcd8fde6sl.jpg",
    title: "Achievement 2",
  },
];

const NewsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true); // Start fading out the middle image
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setIsFading(false); // Reset fade state for the new image
      }, 1000); // Duration of the fade out effect
    }, 4000); // Total time for each slide (3 seconds before fade + 1 second for fade)

    return () => clearInterval(interval);
  }, []);

  const prevIndex = (currentIndex - 1 + images.length) % images.length;
  const nextIndex = (currentIndex + 1) % images.length;

  return (
    <div className="relative  bg-gray-100 bgImg3 w-full  mx-auto py-10 overflow-hidden">
      {/* <img
        className="mx-auto"
        src="https://i0.wp.com/tourdesundarbans.stainpixels.com/wp-content/uploads/2022/11/IMG_20221104_002515-copy.png?resize=300%2C77&ssl=1"
        alt="Special Guests Logo"
      /> */}
      <div className="font-semibold text-[#946405] text-4xl mx-auto text-center mb-10">
        Media Appearance
      </div>
      <div className="flex justify-center items-center space-x-4">
        {/* Previous Image */}
        <div className={`w-72 h-56 rounded-lg overflow-hidden shadow-lg`}>
          <img
            src={images[prevIndex].src}
            alt={`Slide ${prevIndex}`}
            className={`w-full h-full object-cover`}
          />
        </div>

        {/* Active (Middle) Image */}
        <div
          className={`w-auto min-w-[30rem] h-96 rounded-lg overflow-hidden shadow-lg relative`}
        >
          <img
            src={images[currentIndex].src}
            alt={`Slide ${currentIndex}`}
            className={`w-full h-full object-cover transition-opacity duration-1000 ${
              isFading ? "opacity-75" : "opacity-100"
            }`}
          />
        </div>

        {/* Next Image */}
        <div className={`w-72 h-44 rounded-lg overflow-hidden shadow-lg`}>
          <img
            src={images[nextIndex].src}
            alt={`Slide ${nextIndex}`}
            className={`w-full h-full object-cover`}
          />
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-4">
        {images.map((_, index) => {
          const sizeClass =
            index === currentIndex
              ? "w-3 h-3"
              : index === prevIndex || index === nextIndex
              ? "w-2 h-2"
              : "w-1 h-1";
          return (
            <div
              key={index}
              className={`rounded-full bg-[#946405] ${sizeClass} transition-all duration-300`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewsSlider;
