import React from "react";
import ImageGallery from "./ImageGallery";
import InfoBox from "./InfoBox";

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
    <div className="main-container">
      <div className="left-side">
        <ImageGallery images={images} />
      </div>
      <div className="right-side">
        <InfoBox
          title="Game Developement"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
        />
      </div>
    </div>
  );
};

export default Home;
