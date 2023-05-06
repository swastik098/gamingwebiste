import React from "react";
import ImageGallery from "../Home/ImageGallery";
// import InfoBox from "../Home/InfoBox";
import HeadingStyle from "../Home/HeadingStyle";
import Button from "../Home/Button";

const Publishing = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
      alt: "Image 1",
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
      alt: "Image 2",
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
      alt: "Image 3",
    },

    {
      url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
      alt: "Image 4",
    },
    {
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
      alt: "Image 5",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-white text-white mt-5 mb-5">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/2 md:pr-4 space-x-6 mx-auto bg-stone-500 pl-20 pt-20 pb-20">
          <ImageGallery
            className="w-full h-40 transition-all duration-300 transform-Y hover:scale-150"
            style={{ height: "200px", width: "200px" }}
            images={images}
          />
        </div>
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 md:pl-4 text-black">
          <HeadingStyle
            className="text-4xl md:w-3/4 text-center"
            title="Need help in deciding if we are the right fit for you"
          />
          <p className="text-center text-2xl">
            We understand choosing the right publisher can be a daunting task.
            Let us assist you!
          </p>
          <Button className={"mt-auto"} text={"Talk to Us"} />
        </div>
      </div>
    </div>
  );
};

export default Publishing;
