import React from "react";

const ImageGallery = ({ images }) => {
  return (
    <div className="image-gallery">
      <div className="row">
        {images.map((image, index) => (
          <div key={index} className="col-4">
            <img src={image.url} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
