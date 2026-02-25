// GalleryGrid.js


const GalleryGrid = ({ image, onClick, className }: any) => {
  return (
    <img
      src={image}
      alt="Gallery Item"
      className={`cursor-pointer ${className}`}
      onClick={onClick}
    />
  );
};

export default GalleryGrid;
