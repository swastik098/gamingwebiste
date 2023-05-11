import React from "react";

const GameArt = () => {
  const CardImages = [
    {
      url: require("../../assets/HighresScreenshot00003.png"),
      heading: "Image 1",
      description: "This is the description for Image 1",
    },
    {
      url: require("../../assets/HighresScreenshot00002.png"),
      heading: "Image 2",
      description: "This is the description for Image 2",
    },
    {
      url: require("../../assets/HighresScreenshot00014.png"),
      heading: "Image 3",
      description: "This is the description for Image 3",
    },
    {
      url: require("../../assets/HighresScreenshot00001.png"),
      heading: "Image 4",
      description: "This is the description for Image 4",
    },
    {
      url: require("../../assets/HighresScreenshot00004.jpg"),
      heading: "Image 5",
      description: "This is the description for Image 5",
    },
    {
      url: require("../../assets/tmp_8db7e837-330e-4cbe-913f-09888bf11146.jpg"),
      heading: "Image 6",
      description: "This is the description for Image 6",
    },
    {
      url: require("../../assets/tmp_311052b8-8f06-43b7-9fd1-d4f29c78867d.jpg"),
      heading: "Image 7",
      description: "This is the description for Image 7",
    },
    {
      url: require("../../assets/tmp_0abe01fd-bfac-4f80-bb6e-2f2b19754c73.jpg"),
      heading: "Image 8",
      description: "This is the description for Image 8",
    },
    {
      url: require("../../assets/murali-krishna-highresscreenshot00001.jpg"),
      heading: "Image 9",
      description: "This is the description for Image 9",
    },
    {
      url: require("../../assets/murali-krishna-highresscreenshot00006.jpg"),
      heading: "Image 10",
      description: "This is the description for Image 10",
    },
    {
      url: require("../../assets/MergeDragons_Banner-min.png"),
      heading: "Image 11",
      description: "This is the description for Image 11",
    },
  ];
  return (
    <div className="flex flex-wrap justify-center items-center">
      {CardImages.map((item, i) => (
        <div
          key={i}
          className="m-4 w-72 rounded-lg overflow-hidden shadow-lg transition-all duration-300 transform-Y hover:scale-110"
        >
          <img
            src={item.url}
            alt={item.heading}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{item.heading}</h3>
            <p className="text-gray-500">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameArt;
