/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Slider from "./slider";
import ImageGallery from "./ImageGallery";
import InfoBox from "./InfoBox";
import Contact from "./Contact";
import Carousel from "./slider";

const Home = () => {
  const images = [
    { url: "https://via.placeholder.com/300x200?text=Image1", alt: "Image 1" },
    { url: "https://via.placeholder.com/300x200?text=Image2", alt: "Image 2" },
    { url: "https://via.placeholder.com/300x200?text=Image3", alt: "Image 3" },
    { url: "https://via.placeholder.com/300x200?text=Image4", alt: "Image 4" },
    { url: "https://via.placeholder.com/300x200?text=Image3", alt: "Image 5" },
    { url: "https://via.placeholder.com/300x200?text=Image4", alt: "Image 6" },
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-gray-500 text-white min-h-screen">
      <Slider />
      <div className="flex flex-col md:flex-row justify-between w-4/5 px-4 py-8">
        <div className="w-full md:w-1/2 md:pr-4 space-x-6">
          <ImageGallery images={images} />
        </div>
        <div className="w-full md:w-1/2 md:pl-4">
          <h2 className="text-xl font-bold mb-4">Game Development</h2>
          <div className="bg-gray-900 p-4 rounded-md">
            <p className="text-sm md:text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
              nec, ultricies sed, dolor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
