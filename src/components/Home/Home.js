/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Slider from "./slider";
import ImageGallery from "./ImageGallery";
import InfoBox from "./InfoBox";
import rigthImage from "../../assets/gameimg1.jpg";

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
    <div className="home">
      <Slider />

      <div className="about-us">
        <div className="image-container">
          <img src={rigthImage} alt="About Us" />
        </div>
        <div className="text-container">
          <h2>What We Are</h2>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor,
            arcu at pellentesque consectetur, massa tortor hendrerit augue, a
            tincidunt justo purus vel turpis. Sed id sagittis nisl. Sed
            venenatis quis ante vitae mattis.
          </p>
        </div>
      </div>

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
    </div>
  );
};

export default Home;
