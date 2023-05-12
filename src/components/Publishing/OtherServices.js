import React from "react";
import Button from "../Home/Button";
const images = [
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
];
const OtherServices = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between w-full text-center mx-auto px-4 py-8 bg-gradient-to-r from-stone-600 to-stone-100 ">
      <div className="flex flex-wrap justify-center md:w-1/2 border-spacing-4">
        {images.map((imageUrl, index) => (
          <div key={index} className="w-full sm:w-1/3 p-4 ">
            <img
              src={imageUrl.url}
              alt={`Image ${index}`}
              className="w-full h-36 object-cover object-center rounded-xl border-2 transition-all duration-300 transform-Y hover:scale-125"
            />
          </div>
        ))}
      </div>
      <div className="w-full md:w-1/2 md:pl-4 mt-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
          Welcome to Our Site
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed orci
          eget velit hendrerit lacinia non ac quam.
        </p>
        <Button text={"Contact Us"} />
      </div>
    </div>
  );
};

export default OtherServices;
