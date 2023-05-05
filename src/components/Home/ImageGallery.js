import React from "react";

const ImageGallery = ({ images }) => {
  return (
    <div className="image-gallery w-1/2">
      <div className="flex flex-wrap -mx-2">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full md:w-1/2 lg:w-1/3 px-2 py-2 hover:h-full"
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-24 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
