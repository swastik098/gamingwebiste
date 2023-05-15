/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import Slider from "./slider";
import ContactPage from "./ContactPage";
import HeadingStyle from "./HeadingStyle";
import Box from "./Box";
import ImageCard from "./ImageCard";
import Button from "./Button";
import InfoBox from "./InfoBox";
import Course from "./Course";
// import YouTubeCard from "./YoutubeVideoCard";
// import ReactPlayer from "react-player";
// import CourseThumbnail from "./CourseThumbnail";
// import ImageGallery from "./ImageGallery";

// const videoIds = [
//   "eciP7ixTNec",
//   "NMUr2yNALhU",
//   "r_ErytGpScQ",
//   "UXqq0ZvbOnk",
//   // "EJ2GzZAORQA",
// ];

const Home = () => {
  const [selectedCourseIndex, setSelectedCourseIndex] = useState(null);

  const courses = [
    {
      title: "Course 1",
      description: "This is the first course",
      thumbnailUrl: "https://example.com/course1_thumbnail.jpg",
      videoUrl: "https://example.com/course1_video.mp4",
    },
    {
      title: "Course 2",
      description: "This is the second course",
      thumbnailUrl: "https://example.com/course2_thumbnail.jpg",
      videoUrl: "https://example.com/course2_video.mp4",
    },
    {
      title: "Course 3",
      description: "This is the second course",
      thumbnailUrl: "https://example.com/course2_thumbnail.jpg",
      videoUrl: "https://example.com/course2_video.mp4",
    },
    {
      title: "Course 4",
      description: "This is the second course",
      thumbnailUrl: "https://example.com/course2_thumbnail.jpg",
      videoUrl: "https://example.com/course2_video.mp4",
    },
    {
      title: "Course 5",
      description: "This is the second course",
      thumbnailUrl: "https://example.com/course2_thumbnail.jpg",
      videoUrl: "https://example.com/course2_video.mp4",
    },
    {
      title: "Course 6",
      description: "This is the second course",
      thumbnailUrl: "https://example.com/course2_thumbnail.jpg",
      videoUrl: "https://example.com/course2_video.mp4",
    },
    // Add more courses here
  ];

  const handleCourseClick = (index) => {
    setSelectedCourseIndex(index);
  };

  const images = [
    {
      url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683957505/Vault%20Games/serviceImages/android_fkfyry.jpg",
      alt: "Image 1",
      tittle: "Mobile Game development",
    },
    {
      url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683957505/Vault%20Games/serviceImages/html5logo_zrgvvq.jpg",
      alt: "Image 3",
      tittle: "HTML5 Game development",
    },
    {
      url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683957505/Vault%20Games/serviceImages/unity_m3nhgn.png",
      alt: "Image 2",
      tittle: "Unity Game development",
    },
    {
      url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683957505/Vault%20Games/serviceImages/unreal_hp3guy.png",
      alt: "Image 4",
      tittle: "Unreal Game development",
    },
    {
      url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683957505/Vault%20Games/serviceImages/artndesign_r5gu56.jpg",
      alt: "Image 5",
      tittle: "Art & Design",
    },
    {
      url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683957505/Vault%20Games/serviceImages/MetaverseLogo_dlwzz3.jpg",
      alt: "Image 4",
      tittle: "Metaverse Projects",
    },
    {
      url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683957505/Vault%20Games/serviceImages/gamification_hk84i5.jpg",
      alt: "Image 5",
      tittle: "Gamification",
    },
    {
      url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683957506/Vault%20Games/serviceImages/vr_argames_tjvgcx.jpg",
      alt: "Image 6",
      tittle: "VR & AR",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-white text-black min-h-screen font-sans">
      <Slider />
      <HeadingStyle
        className={
          " subpixel-antialiased text-zinc-800 mt-12 text-5xl text-center"
        }
        title={"Vault Games Studio"}
      />
      <div className="flex flex-col md:flex-row justify-between w-3/4 ">
        <Box
          className=" text-xl md:text-base leading-relaxed text-center"
          text="We at Vault Games Studio are an extremely passionate team of game design experts, animations, creatives, developers. We provide bespoke and holistic game developement service right from the ideation stage to project completion. For further understanding of our work, check, out the video gallry below!"
          boldText="Vault Games Studio"
        />
      </div>
      <div className="flex flex-col md:flex-row  w-3/4 py-10 justify-center items-center">
        {/* <div className={" w-full"}></div> */}
        <img
          src={
            "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683958193/Vault%20Games/homePage/Ag1_09_dyqrvc.png"
          }
          alt="no image"
        />
      </div>
      {/* <Button text={"Get In Touch"} /> */}
      <HeadingStyle
        className={
          " subpixel-antialiased text-zinc-800 mt-12 text-5xl text-center"
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

      <div className="flex flex-col md:flex-row justify-between w-4/5 px-4 py-8">
        <div className="w-full md:w-1/2 md:pr-4 space-x-6 mx-auto ">
          <img
            src="https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683958186/Vault%20Games/homePage/59888_bjyjn7.jpg"
            alt="logo"
            className="brand-logo"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-4 mt-20">
          <InfoBox
            title={"Game Development"}
            text={
              "We work together to create and refine game mechanics, graphics, sound effects, and other elements that make up a game. We use a variety of game engines and development tools, such as Unity or Unreal Engine, to create games. Our company offer post-release support, such as patches and updates, to ensure their games continue to function properly and meet the needs of players."
            }
          />
        </div>
      </div>
      <Button text={"Book Dev Demo"} />
      <div className="flex flex-col md:flex-row justify-between w-4/5 px-4 py-8 mx-auto items-center">
        <div className="w-full md:w-1/2 md:pl-4 mt-10 justify-center">
          <InfoBox
            title={"Game Art"}
            text={
              "We create art and visual assets for games. We offer a wide range of services, from concept art and character design to 3D modeling and animation for a variety of platforms, including consoles, PC, and mobile devices."
            }
          />
        </div>
        <div className="w-full md:w-1/2 md:pr-4 space-x-6 mx-auto ">
          <img
            src="https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683958218/Vault%20Games/homePage/fun-3d-illustration-super-santa-claus-with-vr-helmet_cx5rk7.jpg"
            alt="logo"
            className="brand-logo"
          />
        </div>
      </div>
      <Button on text={"Book Art Demo"} />
      <div className="flex flex-col md:flex-row justify-between w-4/5 px-4 py-8 items-center">
        <div className="w-full md:w-1/2 md:pr-4 space-x-6 mx-auto ">
          <img
            src="https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683958204/Vault%20Games/homePage/fun-3d-cartoon-teenage-kids_yknuga.jpg"
            alt="logo"
            className="brand-logo"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-4 mt-10">
          <InfoBox
            title={"Animation"}
            text={
              "Experience the magic of storytelling like never before with Vault Games Studio's exceptional animation. Our skilled animators bring characters to life, crafting unforgettable moments that capture the imagination. From concept to final product, we take pride in our attention to detail and commitment to quality. Join us on a journey to a world of endless possibilities."
            }
          />
        </div>
      </div>
      <Button text={"Book Animation Demo"} className="mb-10" />
      <div className="flex flex-col md:flex-row justify-between w-4/5 px-4 py-8 mx-auto items-center">
        <div className="w-full md:w-1/2 md:pl-4 mt-10 justify-center">
          <InfoBox
            title={"Game Art"}
            text={
              "We create art and visual assets for games. We offer a wide range of services, from concept art and character design to 3D modeling and animation for a variety of platforms, including consoles, PC, and mobile devices."
            }
          />
        </div>
        <div className="w-full md:w-1/2 md:pr-4 space-x-6 mx-auto ">
          <img
            src="https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683958218/Vault%20Games/homePage/fun-3d-illustration-super-santa-claus-with-vr-helmet_cx5rk7.jpg"
            alt="logo"
            className="brand-logo"
          />
        </div>
      </div>

      <Button on text={"Book Art Demo"} />
      <div class="bg-white py-12 text-center">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-extrabold text-black">Our Clients</h2>
          {/* <p class="mt-4 mb-10 text-xl  text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p> */}
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center flex-wrap">
          <img
            src="https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683712812/Vault%20Games/zwuf5fa1wfv7f0nvqae0.jpg"
            alt="Client 1"
            class="w-36 h-36 object-cover object-center grayscale transition duration-300 hover:grayscale-0 mx-3 my-4 rounded-full"
          />
          <img
            src="https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683712812/Vault%20Games/zwuf5fa1wfv7f0nvqae0.jpg"
            alt="Client 2"
            class="w-36 h-36 object-cover object-center grayscale transition duration-300 hover:grayscale-0 mx-3 my-4 rounded-full"
          />
          <img
            src="https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683712812/Vault%20Games/zwuf5fa1wfv7f0nvqae0.jpg"
            alt="Client 3"
            class="w-36 h-36 object-cover object-center grayscale transition duration-300 hover:grayscale-0 mx-3 my-4 rounded-full"
          />
          <img
            src="https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683712812/Vault%20Games/zwuf5fa1wfv7f0nvqae0.jpg"
            alt="Client 4"
            class="w-36 h-36 object-cover object-center grayscale transition duration-300 hover:grayscale-0 mx-3 my-4 rounded-full"
          />
          <img
            src="https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683712812/Vault%20Games/zwuf5fa1wfv7f0nvqae0.jpg"
            alt="Client 5"
            class="w-36 h-36 object-cover object-center grayscale transition duration-300 hover:grayscale-0 mx-3 my-4 rounded-full"
          />
          <img
            src="https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683712812/Vault%20Games/zwuf5fa1wfv7f0nvqae0.jpg"
            alt="Client 6"
            class="w-36 h-36 object-cover object-center grayscale transition duration-300 hover:grayscale-0 mx-3 my-4 rounded-full"
          />
        </div>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-extrabold text-black">
          Our Game Desgin Courses
        </h2>
        {/* <p class="mt-4 mb-10 text-xl  text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p> */}
      </div>
      <div className="flex flex-wrap justify-center">
        {selectedCourseIndex !== null ? (
          <Course videoUrl={courses[selectedCourseIndex].videoUrl} />
        ) : (
          <>
            {courses.map((course, index) => (
              <div
                key={index}
                className="m-2 p-2 max-hw-xs w-full md:max-w-sm rounded-lg border border-gray-200 shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl cursor-pointer"
                onClick={() => handleCourseClick(index)}
              >
                <div className="relative h-0 pb-2/3">
                  <img
                    className="absolute inset-0 object-cover object-center w-full h-full rounded-t-lg"
                    src={course.thumbnailUrl}
                    alt={course.title}
                    width="300"
                    height="200"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-medium">{course.title}</h3>
                  <p className="mt-2 text-gray-600">{course.description}</p>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
      {/* <div className="md:w-full md:pl-0">
        <div className="flex flex-wrap -mx-4 bg-pink-200 text-black rounded-lg pt-5 justify-center items-center">
          {videoIds.map((videoId) => (
            <div
              key={videoId}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-2"
            >
              <YouTubeCard videoId={videoId} />
            </div>
          ))}
        </div>
      </div> */}
      <div class="flex flex-wrap justify-between m-5" id="contact-section">
        <ContactPage />
      </div>
    </div>
  );
};

export default Home;
