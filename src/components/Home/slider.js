import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function Slider() {
  const [isDesktop, setIsDesktop] = useState(false);
  const slides = [
    {
      url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683956860/Vault%20Games/concept_games_enemies_2_1_wfr657.png",
    },
    {
      url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683956882/Vault%20Games/game_conceprt2_fcuruo.png",
    },
    {
      url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683956919/Vault%20Games/bg_fight2_2_hgwirv.png",
    },

    {
      url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683956900/Vault%20Games/platformer_concept_2_afnbip.png",
    },
    {
      url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683956884/Vault%20Games/game_conceprt_szxz5s.png",
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
