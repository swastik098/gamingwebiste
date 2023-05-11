import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function Slider() {
  const [isDesktop, setIsDesktop] = useState(false);
  const slides = [
    {
      url: require("../../assets/HighresScreenshot00003.png"),
    },
    {
      url: require("../../assets/HighresScreenshot00002.png"),
    },
    { url: require("../../assets/HighresScreenshot00014.png") },
    {
      url: require("../../assets/HighresScreenshot00001.png"),
    },
    {
      url: require("../../assets/HighresScreenshot00004.jpg"),
    },
    {
      url: require("../../assets/tmp_8db7e837-330e-4cbe-913f-09888bf11146.jpg"),
    },
    {
      url: require("../../assets/tmp_311052b8-8f06-43b7-9fd1-d4f29c78867d.jpg"),
    },
    {
      url: require("../../assets/tmp_0abe01fd-bfac-4f80-bb6e-2f2b19754c73.jpg"),
    },
    {
      url: require("../../assets/murali-krishna-highresscreenshot00001.jpg"),
    },
    {
      url: require("../../assets/murali-krishna-highresscreenshot00006.jpg"),
    },
    {
      url: require("../../assets/MergeDragons_Banner-min.png"),
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mediaQuery.matches);

    const handler = (e) => setIsDesktop(e.matches);
    mediaQuery.addListener(handler);

    return () => mediaQuery.removeListener(handler);
  }, []);

  return (
    <div className="w-full h-screen relative group">
      <div
        style={{
          backgroundImage: `url(${
            isDesktop ? slides[currentIndex].url : slides[currentIndex].url
          })`,
        }}
        className="w-full h-full bg-center bg-cover bg-no-repeat duration-500"
      ></div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2 bg-midnight text-tahiti">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer mx-2 md:max-w-fit w-full overflow-x-hidden hidden sm:block my-2 sm:my-0"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
