import React from "react";
import video from "../../assets/video-game-7249.mp4";
import RegisterForm from "./RegisterPublish";

const Publishing = () => {
  return (
    <div className="">
      <div className="relative">
        <video
          className="
           w-full object-cover publish"
          src={video}
          autoPlay
          muted
          loop
        />
      </div>
      <div className="mt-50">
        <div className="absolute mt-16  inset-0 z-40 flex flex-col justify-center items-center text-center top-0 left-0 mb-72 md:mb-96 md:left-20 w-full md:w-1/2 h-full font-sans">
          <h2 className="text-2xl md:text-4xl lg:text-8xl md:text-center font-bold mb-2 text-white">
            GAME
            <span className="text-blue font-sans"> PUBLISHING</span>
          </h2>
          <p className="text-base md:text-lg lg:text-3xl text-white text-center pt-5 pb-10 md:pb-20">
            Turn Mobile and PC Games Into Chart-Topping Hits
          </p>
        </div>

        <div className="flex flex-grow relative md:absolute md:bg-inherit bg-black top-0 right-0 w-full h-full mt-24 p-12 md:flex md:w-1/2">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Publishing;
