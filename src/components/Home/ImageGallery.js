import React from "react";

const ImageGallery = ({ images, className, style }) => {
  const limitedImages = images.slice(0, 6);

  return (
    <div className="image-gallery w-full">
      <div className="flex flex-wrap -mx-2">
        {limitedImages.map((image, index) => (
          <div
            key={index}
            className="w-full md:w-1/2 lg:w-1/3 px-4 py-4 hover:h-full"
          >
            <img
              src={image.url}
              alt={image.alt}
              style={style}
              className={`w-full h-40 object-cover rounded-lg transition-all duration-300 transform hover:scale-125 ${className}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
