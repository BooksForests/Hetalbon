const GalleryGrid = ({ image, onClick, className, category }: any) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer ${className}`}
      onClick={onClick}
    >
      <img
        src={image}
        alt="Gallery Item"
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
        <span className="text-white/70 text-sm font-medium tracking-wider uppercase mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          {category}
        </span>
        <div className="w-8 h-1 bg-[#a97105] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      </div>
    </div>
  );
};

export default GalleryGrid;
