/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Slider from "./slider";
import ContactPage from "./ContactPage";
import HeadingStyle from "./HeadingStyle";
import Box from "./Box";
import client1 from "../../assets/preview.jpg";
import logo1 from "../../assets/Ag1_09.png";
import ImageCard from "./ImageCard";
// import ImageGallery from "./ImageGallery";
// import InfoBox from "./InfoBox";
// import Button from "./Button";
// import YouTubeCard from "./YoutubeVideoCard";

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
      url: require("../../assets/serviceImage/android.jpeg"),
      alt: "Image 1",
      tittle: "Mobile Game development",
    },
    {
      url: require("../../assets/serviceImage/unity.png"),
      alt: "Image 2",
      tittle: "Unity Game development",
    },
    {
      url: require("../../assets/serviceImage/html5logo.jpeg"),
      alt: "Image 3",
      tittle: "HTML5 Game development",
    },

    {
      url: require("../../assets/serviceImage//unreal.png"),
      alt: "Image 4",
      tittle: "Unreal Game development",
    },
    {
      url: require("../../assets/serviceImage/artndesign.jpg"),
      alt: "Image 5",
      tittle: "Art & Design",
    },
    {
      url: require("../../assets/serviceImage/MetaverseLogo.jpeg"),
      alt: "Image 4",
      tittle: "Metaverse Projects",
    },
    {
      url: require("../../assets/serviceImage/gamification.jpg"),
      alt: "Image 5",
      tittle: "Gamification",
    },
    {
      url: require("../../assets/serviceImage/vr&argames.jpeg"),
      alt: "Image 6",
      tittle: "VR & AR",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-white text-black min-h-screen">
      <Slider />
      <HeadingStyle
        className={
          " font-sans subpixel-antialiased text-zinc-800 mt-12 text-5xl text-center"
        }
        title={"Vault Games Studio"}
      />
      <div className="flex flex-col md:flex-row justify-between w-3/4 ">
        <Box
          className="font-sans text-xl md:text-base leading-relaxed text-center"
          text="We at Vault Games Studio are an extremely passionate team of game design experts, animations, creatives, developers. We provide bespoke and holistic game developement service right from the ideation stage to project completion. For further understanding of our work, check, out the video gallry below!"
          boldText="Vault Games Studio"
        />
      </div>
      <div className="flex flex-col md:flex-row justify-between w-3/4 py-10">
        <div className={" w-full"}></div>
        <img src={logo1} alt="no image" />
        <div className="md:w-full md:pl-0">
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
      {/* <Button text={"Get In Touch"} /> */}
      <HeadingStyle
        className={
          " font-sans subpixel-antialiased text-zinc-800 mt-12 text-5xl text-center"
        }
        title={"Service We Offer"}
      />
      <div className="flex flex-col justify-center md:flex-row w-3/4 ">
        <Box
          className="font-sans text-xl md:text-base leading-relaxed text-center"
          text="We are a game development company specialised in creating high-quality games for various platforms"
        />
      </div>
      <div class="flex flex-wrap justify-center p-10 space-y-4">
        {images.map((card) => (
          <ImageCard key={card.alt} src={card.url} title={card.tittle} />
        ))}
      </div>

      {/* <div className="flex flex-col md:flex-row justify-between w-4/5 px-4 py-8">
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
      {/* <Button text={"Book Dev Demo"} /> */}
      {/* <div className="flex flex-col md:flex-row justify-between w-4/5 px-4 py-8">
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
      {/* <Button text={"Book Design/Art Demo"} /> */}
      {/* <div className="flex flex-col md:flex-row justify-between w-4/5 px-4 py-8">
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
      </div>  */}
      {/* <Button text={"Book Animation Demo"} className="mb-10" /> */}
      <div class="bg-white py-12 text-center">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-extrabold text-black">Our Clients</h2>
          <p class="mt-4 mb-10 text-xl  text-black">
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
      <div class="flex flex-wrap justify-between m-5">
        <ContactPage />
      </div>
    </div>
  );
};

export default Home;
