import  { useState, useEffect } from 'react';

const images = [
  { src: 'https://images.pexels.com/photos/26150745/pexels-photo-26150745/free-photo-of-green-grassland-with-trees-in-countryside.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', title: 'Achievement 1' },
  { src: 'https://images.pexels.com/photos/28217963/pexels-photo-28217963/free-photo-of-a-mountain-range-with-a-road-running-through-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', title: 'Achievement 2' },
  { src: 'https://via.placeholder.com/1200x800?text=Achievement+3', title: 'Achievement 3' },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000); // Auto-slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={`Slide ${index}`}
          className={`absolute w-full h-full object-cover transition-transform transform duration-1000 ease-in-out ${currentIndex === index ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-105 blur-md'}`}
          style={{ transitionProperty: 'opacity, transform' }}
        />
      ))}
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      {/* Achievements Text */}
      <div className="absolute left-10 top-1/4 text-white">
      <div className="text-6xl mb-10 font-bold text-[#946405] font-sans drop-shadow-xl shadow-gray-900">Media Section &
        <br/> Special Appearance</div>
        <div className="text-4xl font-bold">{images[currentIndex].title}</div>
        <p className="mt-4 text-lg max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
        </p>
      </div>
    </div>
  );
};

export default ImageSlider;
