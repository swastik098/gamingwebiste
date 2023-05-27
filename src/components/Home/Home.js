import React, { useContext, useEffect, forwardRef, useRef } from "react";
import Slider from "./slider";
import ContactPage from "./ContactPage";
import HeadingStyle from "./HeadingStyle";
import Box from "./Box";
import ImageCard from "./ImageCard";
import Button from "./Button";
import InfoBox from "./InfoBox";
import Academy from "../Academy/Academy";
import { ScrollContext } from "../../ScrollContext";
// import Course from "./Course";
// import YouTubePlayer from "./YouTubePlayer";
// import Carousel from "./YouTubePlayer";
// import ReactPlayer from "react-player";
// import CourseThumbnail from "./CourseThumbnail";
// import ImageGallery from "./ImageGallery";

const Home = forwardRef((props, ref) => {
  const { scrollToSection } = useContext(ScrollContext);
  const sectionRef = useRef(null);
  const myref = useRef(null);

  const handleButton = () => {
    myref?.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  };
  useEffect(() => {
    if (scrollToSection === "targetSection") {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollToSection]);

  const courses = [
    {
      title: "Unity Design",
    },
    {
      title: "Unreal Design",
      thumbnailUrl: "https://example.com/course2_thumbnail.jpg",
    },
    {
      title: "Game Art Design",
      thumbnailUrl: "https://example.com/course2_thumbnail.jpg",
    },
    {
      title: "Game Design",
      thumbnailUrl: "https://example.com/course2_thumbnail.jpg",
    },
    {
      title: "Virtual Production",
      thumbnailUrl: "https://example.com/course2_thumbnail.jpg",
    },
    {
      title: "3D Art",
      thumbnailUrl: "https://example.com/course2_thumbnail.jpg",
    },
  ];

  const images = [
    {
      url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683957505/Vault%20Games/serviceImages/unity_m3nhgn.png",
      alt: "Image 1",
      tittle: "Unity Game Development",
    },
    {
      url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683957505/Vault%20Games/serviceImages/unreal_hp3guy.png",
      alt: "Image 2",
      tittle: "Unreal Game Development",
    },
    {
      url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683957505/Vault%20Games/serviceImages/android_fkfyry.jpg",
      alt: "Image 3",
      tittle: "Mobile Game Development",
    },
    {
      url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683957505/Vault%20Games/serviceImages/html5logo_zrgvvq.jpg",
      alt: "Image 4",
      tittle: "HTML5 Game Development",
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
      url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1684218180/Vault%20Games/serviceImages/Play_to_Win_The_Gamification_Benefits_In_Workplace_Training_olkefs.jpg",
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
          " subpixel-antialiased text-black mt-12 text-5xl text-center font-sans"
        }
        title={"Vault Games Studio"}
      />
      <div className="flex flex-col md:flex-row justify-between w-3/4 ">
        <Box
          className="leading-relaxed text-center font-sans "
          text="Vault Games Studio is a team of extremely passionate Artists, game designer and programmer experts. We create immersive, innovative, and entertaining gaming experiences that bring people together and push the boundaries of what is possible in the gaming industry.We provide bespoke and holistic game developement service right from the ideation stage to project completion."
          boldText="Vault Games Studio"
        />
      </div>
      <div className="flex flex-col md:flex-row  w-2/4 justify-center items-center">
        <img
          className=" object-contain hover:object-scale-down md:object-scale-down"
          src={
            "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1684991248/Vault%20Games/logo/vault_games_final_logo_f0iqve.jpg"
          }
          alt="logo"
        />
      </div>
      <Button text={"Get In Touch"} onClick={handleButton} />
      <HeadingStyle
        className={
          " subpixel-antialiased text-black mt-12 text-5xl text-center font-sans"
        }
        title={"Service We Offer"}
      />
      <div className="flex flex-col justify-:5center md:flex-row w-3/4 ">
        <Box
          className="font-sans leading-relaxed text-center"
          text="We strive to craft games that engage players on a deep level, inspire creativity, and foster a sense of community. We are committed to delivering high-quality products that are accessible to all, while also prioritizing the needs and desires of our most dedicated fans. Through our dedication to excellence, we aim to be a leader in the gaming industry and to help shape the future of interactive entertainment."
        />
      </div>
      <div class="flex flex-wrap justify-center p-10 space-y-4">
        {images.map((card) => (
          <ImageCard key={card.alt} src={card.url} title={card.tittle} />
        ))}
      </div>

      <div className="flex md:flex-row  justify-between w-4/5 px-4 py-8 flex-col-reverse ">
        <div className="w-full md:w-1/2 md:pr-4 space-x-6 mx-auto ">
          <img
            src="https://res.cloudinary.comcrollContext } from './ScrollContext';/dzoqkbxc6/image/upload/v1683958186/Vault%20Games/homePage/59888_bjyjn7.jpg"
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
      <Button text={"Book Dev Demo"} onClick={handleButton} />
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
            src="https://res.cloudinary.com/dzoqkbxc6/image/upload/v1684579730/Vault%20Games/gameart/Untitled_008R_iuy9fd.png"
            alt="logo"
            className="brand-logo"
          />
        </div>
      </div>
      <Button on text={"Book Art Demo"} onClick={handleButton} />
      <div className="flex md:flex-row justify-between w-4/5 px-4 py-8 items-center flex-col-reverse">
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
      <Button
        text={"Book Animation Demo"}
        className="mb-10"
        onClick={handleButton}
      />
      <div className="flex flex-col md:flex-row justify-between w-4/5 px-4 py-8 mx-auto items-center">
        <div className="w-full md:w-1/2 md:pl-4 mt-10 justify-center">
          <InfoBox
            title={"Virtual Technology"}
            text={
              "We create art and visual assets for games. We offer a wide range of services, provides filmmakers and game developers with unprecedented creative control and efficiency. As the technology continues to evolve, you can expect even more groundbreaking experiences in the world of entertainment."
            }
          />
        </div>
        <div className="w-full md:w-1/2 md:pr-4 space-x-6 mx-auto ">
          <img
            src="https://res.cloudinary.com/dzoqkbxc6/image/upload/v1684153703/Vault%20Games/homePage/vymk7cdbkcenlyj5zv94.jpg"
            alt="logo"
            className="brand-logo"
          />
        </div>
      </div>
      <Button on text={"Book Virtual Demo"} onClick={handleButton} />
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        ref={sectionRef}
      >
        {/* <HeadingStyle
          className={
            " subpixel-antialiased text-black mt-12 text-6xl text-center font-sans"
          }
          title={"Vault Academy"}
        /> */}
      </div>
      <div className="flex flex-col md:flex-row ml-4 w-2/4 justify-center items-center">
        <img
          className=" object-contain hover:object-scale-down md:object-scale-down"
          src={
            "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1684991248/Vault%20Games/logo/vault_academy_final_logo_lmzwn5.jpg"
          }
          alt="logo"
        />
      </div>
      <div className="flex flex-wrap justify-center mt-10 font-sans">
        {/* {selectedCourseIndex !== null ? (
          <Course videoUrl={courses[selectedCourseIndex].videoUrl} />
        ) : ( */}
        <>
          {courses.map((course, index) => (
            <div
              key={index}
              className="m-2 p-2 max-hw-xs w-full md:max-w-sm rounded-lg border bg-gray-800 text-white border-gray-800 shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl cursor-pointer"
              // onClick={() => handleCourseClick(index)}
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
                <h3 className="text-xl font-semibold text-center">
                  {course.title}
                </h3>
                <p className="mt-2 text-gray-600">{course.description}</p>
              </div>
            </div>
          ))}
        </>
        {/* )} */}
      </div>
      <div class="bg-white py-12 text-center">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HeadingStyle
            className={
              " subpixel-antialiased text-black mt-12 text-6xl text-center font-sans"
            }
            title={"Our Partners"}
          />
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center flex-wrap">
          <img
            src="https://res.cloudinary.com/dzoqkbxc6/image/upload/v1684231139/Vault%20Games/partners/unity-logo_jwgdeu.png"
            alt="Client 1"
            class="w-36 h-36  object-contain object-center grayscale transition duration-300 hover:grayscale-0 mx-3 my-4 "
          />
          <img
            src="https://res.cloudinary.com/dzoqkbxc6/image/upload/v1684217551/Vault%20Games/partners/Hardware_Recommendations_for_Unreal_Engine_jfkdhl.jpg"
            alt="Client 2"
            class="w-36 h-36 object-contain object-center grayscale transition duration-300 hover:grayscale-0 mx-3 my-4 "
          />
          <img
            src="https://res.cloudinary.com/dzoqkbxc6/image/upload/v1684216168/Vault%20Games/partners/Figma_Logo_PNG_Transparent_SVG_Vector_-_Freebie_Supply_cnrw4v.png"
            alt="Client 3"
            class="w-36 h-36 object-contain object-center grayscale transition duration-300 hover:grayscale-0 mx-3 my-4 "
          />
          <img
            src="https://res.cloudinary.com/dzoqkbxc6/image/upload/v1684216411/Vault%20Games/partners/Search_results_for__twitch___Page__1_bk0spc.png"
            alt="Client 4"
            class="w-36 h-36 object-contain object-center grayscale transition duration-300 hover:grayscale-0 mx-3 my-4 rounded-full"
          />
          <img
            src="https://res.cloudinary.com/dzoqkbxc6/image/upload/v1684217304/Vault%20Games/partners/Follow_Us_on_Pinterest_-_Threads_qo0fkb.jpg"
            alt="Client 5"
            class="w-36 h-36 object-contain object-center grayscale transition duration-300 hover:grayscale-0 mx-3 my-4 rounded-full"
          />
          <img
            src="https://res.cloudinary.com/dzoqkbxc6/image/upload/v1684217554/Vault%20Games/partners/Teamwork_unity_hands_identity_card_vector_icon_zlzcev.jpg"
            alt="Client 6"
            class="w-36 h-36 object-contain object-center grayscale transition duration-300 hover:grayscale-0 mx-3 my-4 rounded-full"
          />
        </div>
      </div>
      {/* <div className="flex mt-5 max-w-full md:max-w-7xl  flex-wrap justify-center">
        <div className="m-2 p-2  w-full  rounded-lg border border-gray-200 shadow-lg cursor-pointer">
          <YouTubePlayer />
        </div>
      </div> */}
      <div ref={myref}>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HeadingStyle
            className={
              " subpixel-antialiased text-black mt-12 text-6xl text-center font-serif"
            }
            title={"Get in Touch"}
          />
        </div>
        <div class="flex flex-wrap justify-between m-5" id="contact-section">
          <ContactPage />
        </div>
      </div>
    </div>
  );
});

export default Home;
