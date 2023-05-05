/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Slider from "./slider";
import ImageGallery from "./ImageGallery";
import InfoBox from "./InfoBox";
import Contact from "./Contact";
import Carousel from "./slider";
import Button from "./Button";
import ContactPage from "./ContactPage";

const Home = () => {
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
    <div className="flex flex-col items-center justify-center bg-stone-500 text-white min-h-screen">
      <Slider />
      <div className="flex flex-col md:flex-row justify-between w-4/5 px-4 py-8">
        <div className="w-full md:w-1/2 md:pr-4 space-x-6 mx-auto ">
          <ImageGallery images={images} />
        </div>
        <div className="w-full md:w-1/2 md:pl-4">
          <InfoBox
            title={"Game Development"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonrisus. Suspendisse lectus tortor, dignissim sit amet, adipiscin nec, ultricies sed, dolor."
            }
          />
        </div>
      </div>
      <Button text={"Book Dev Demo"} />
      <div className="flex flex-col md:flex-row justify-between w-4/5 px-4 py-8">
        <div className="w-full md:w-1/2 md:pl-4">
          <InfoBox
            title={"Game Art"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonrisus. Suspendisse lectus tortor, dignissim sit amet, adipiscin nec, ultricies sed, dolor."
            }
          />
        </div>
        <div className="w-full md:w-1/2 md:pr-4 space-x-6 mx-auto ">
          <ImageGallery images={images} />
        </div>
      </div>
      <Button text={"Book Design/Art Demo"} />
      <div className="flex flex-col md:flex-row justify-between w-4/5 px-4 py-8">
        <div className="w-full md:w-1/2 md:pr-4 space-x-6 mx-auto ">
          <ImageGallery images={images.slice(0, 3)} />
        </div>
        <div className="w-full md:w-1/2 md:pl-4">
          <InfoBox
            title={"Animation"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonrisus. Suspendisse lectus tortor, dignissim sit amet, adipiscin nec, ultricies sed, dolor."
            }
          />
        </div>
      </div>
      <Button text={"Book Animation Demo"} className="mb-10" />
      <ContactPage />
    </div>
  );
};

export default Home;
