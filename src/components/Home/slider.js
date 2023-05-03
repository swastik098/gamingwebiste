/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
// import "./Slider.scss";
// import slide_image_1 from "../../assets/gameimg1.jpg";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image:
        "https://i.pinimg.com/564x/01/02/ea/0102ea2768a9c06ce53710dcb7064a27.jpg",
      title: "G A M I N G",
      subtitle: "Slider Subtitle 1",
    },
    {
      image:
        "https://i.pinimg.com/564x/bb/8e/9f/bb8e9f9b156565f5246fe172495d6a70.jpg",
      title: "Slider Title 2",
      subtitle: "Slider Subtitle 2",
    },
    {
      image:
        "https://i.pinimg.com/564x/27/54/5d/27545d423364ad4f4f992c99fc43754b.jpg",
      title: "Slider Title 3",
      subtitle: "Slider Subtitle 3",
    },
  ];

  const handlePrev = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const handleNext = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slider-item ${index === currentSlide ? "active" : ""}`}
        >
          <img src={slide.image} alt={`Image ${index}`} />
          <div className="slider-text">
            <h2>{slide.title}</h2>
            <p>{slide.subtitle}</p>
          </div>
        </div>
      ))}
      <button className="prev-btn" onClick={handlePrev}>
        Prev
      </button>
      <button className="next-btn" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Slider;
