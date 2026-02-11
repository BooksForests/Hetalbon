// GalleryGrid.js


const GalleryGrid = ({ image, onClick }:any) => {
  return (
    <img
      src={image}
      alt="Gallery Item"
      className="cursor-pointer object-cover w-full h-full rounded shadow-xl"
      onClick={onClick}
    />
  );
};

export default GalleryGrid;
