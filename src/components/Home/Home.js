/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Slider from "./slider";
import ImageGallery from "./ImageGallery";
import InfoBox from "./InfoBox";
import Button from "./Button";
import ContactPage from "./ContactPage";
import HeadingStyle from "./HeadingStyle";
import Box from "./Box";
import client1 from "../../assets/preview.jpg";

// const videoIds = [
//   "eciP7ixTNec",
//   "NMUr2yNALhU",
//   "r_ErytGpScQ",
//   "UXqq0ZvbOnk",
//   // "EJ2GzZAORQA",
// ];

const Home = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1957&q=80",
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
      <div className="flex flex-col md:flex-row justify-between w-3/4 py-10">
        <div className={" text-right w-full"}>
          <HeadingStyle className={"mt-20 text-6xl"} title={"Who Are We"} />
        </div>

        <div className="md:w-full md:pl-0">
          <Box
            className="border-2 rounded-xl p-10"
            text="We at Vault Games Studio are an extremely passionate team of game design experts, animations, creatives, developers. We provide bespoke and holistic game developement service right from the ideation stage to project completion. For further understanding of our work, check, out the video gallry below!"
            boldText="Vault Games Studio"
          />
          {/* <div className="flex flex-wrap -mx-4 bg-pink-200 text-black rounded-lg pt-5">
            {videoIds.map((videoId) => (
              <div
                key={videoId}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-2"
              >
                <YouTubeCard videoId={videoId} />
              </div>
            ))}
          </div> */}
        </div>
      </div>
      <Button text={"Get In Touch"} />

      <HeadingStyle className={"mt-20 text-6xl"} title={"Service We Offer"} />

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
        <div className="w-full md:w-1/2 md:pr-4 space-x-6 mx-auto bg-stone-500 ">
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
      <div class="bg-stone-500 py-12 text-center">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-extrabold text-white">Our Clients</h2>
          <p class="mt-4 mb-10 text-xl  text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center flex-wrap">
          <img
            src={client1}
            alt="Client 1"
            class="w-36 h-36 object-cover object-center grayscale transition duration-300 hover:grayscale-0 mx-3 my-4 rounded-full"
          />
          <img
            src={client1}
            alt="Client 2"
            class="w-36 h-36 object-cover object-center grayscale transition duration-300 hover:grayscale-0 mx-3 my-4 rounded-full"
          />
          <img
            src={client1}
            alt="Client 3"
            class="w-36 h-36 object-cover object-center grayscale transition duration-300 hover:grayscale-0 mx-3 my-4 rounded-full"
          />
          <img
            src={client1}
            alt="Client 4"
            class="w-36 h-36 object-cover object-center grayscale transition duration-300 hover:grayscale-0 mx-3 my-4 rounded-full"
          />
          <img
            src={client1}
            alt="Client 5"
            class="w-36 h-36 object-cover object-center grayscale transition duration-300 hover:grayscale-0 mx-3 my-4 rounded-full"
          />
          <img
            src={client1}
            alt="Client 6"
            class="w-36 h-36 object-cover object-center grayscale transition duration-300 hover:grayscale-0 mx-3 my-4 rounded-full"
          />
        </div>
      </div>
      <Button text={"Book Animation Demo"} className="mb-10" />
      <ContactPage />
    </div>
  );
};

export default Home;
