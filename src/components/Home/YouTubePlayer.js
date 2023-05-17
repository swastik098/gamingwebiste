import React, { useRef } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import ReactPlayer from "react-player";

const videoIds = [
  "eciP7ixTNec",
  "NMUr2yNALhU",
  "r_ErytGpScQ",
  "UXqq0ZvbOnk",
  "eciP7ixTNec",
  "NMUr2yNALhU",
  "r_ErytGpScQ",
  "UXqq0ZvbOnk",
  // "EJ2GzZAORQA",
];

const YouTubePlayer = () => {
  const containerRef = useRef(null);

  const slideVideos = (direction) => {
    const container = containerRef.current;
    if (container) {
      const scrollAmount = 300 * direction;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="flex overflow-x-auto"
        style={{
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          "&::-webkit-scrollbar": { display: "none" },
          overflowX: "hidden", // Added to hide horizontal scrollbar
        }}
      >
        {videoIds.map((videoId) => {
          const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
          return (
            <div
              key={videoId}
              className="flex-shrink-0 mr-4 m-5 p-2 rounded-lg border border-gray-200 shadow-lg cursor-pointer"
            >
              <ReactPlayer
                url={videoUrl}
                width="100%"
                height="auto"
                controls
                className="rounded-lg"
              />
            </div>
          );
        })}
      </div>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-0 bg-transparent border-none text-2xl text-sky-500 cursor-pointer"
        style={{
          left: "-20px",
          "@media (min-width: 768px)": { left: "-85px" }, // Adjusted left position for big screens
        }}
        onClick={() => slideVideos(-1)}
      >
        <BsChevronCompactLeft
          onClick={() => slideVideos(-1)}
          size={60}
          className="bg-black rounded-lg"
        />
      </button>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-transparent border-none text-2xl text-sky-500 cursor-pointer"
        style={{
          right: "-20px",
          "@media (min-width: 768px)": { right: "-85px" }, // Adjusted right position for big screens
        }}
        onClick={() => slideVideos(1)}
      >
        <BsChevronCompactRight
          onClick={() => slideVideos(1)}
          size={60}
          className="bg-black rounded-lg"
        />
      </button>
    </div>
  );
};

export default YouTubePlayer;
