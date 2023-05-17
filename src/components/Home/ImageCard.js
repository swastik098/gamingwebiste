import React from "react";

function ImageCard({ src, title }) {
  return (
    <div
      className={`w-64 md:w-96 rounded-lg shadow-lg overflow-hidden m-5 bg-white transition-all duration-300 transform-Y hover:scale-110`}
    >
      <img
        src={src}
        alt={title}
        className="h-60 md:h-80 w-full object-cover object-center"
        style={{ objectFit: "cover", objectPosition: "50% 50%" }}
      />
      <div className="p-4">
        <h2 className="text-xl font-medium mb-2 text-center">{title}</h2>
      </div>
    </div>
  );
}

export default ImageCard;
