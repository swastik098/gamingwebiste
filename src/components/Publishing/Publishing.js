import React from "react";
import video from "../../assets/video-game-7249.mp4";
import RegisterForm from "./RegisterPublish";

const Publishing = () => {
  return (
    <div className="relative">
      <video
        className="h-screen w-full object-cover"
        src={video}
        autoPlay
        muted
        loop
      />
      <div className="absolute inset-0 z-40 flex flex-col justify-center items-center text-center top-0 left-20 w-1/2 h-full font-sans">
        <h2 className="text-4xl md:text-8xl md:text-center font-bold mb-2 text-white ">
          GAME
          <span className="text-blue font-sans"> PUBLISHING</span>
        </h2>
        <p className="text-lg md:text-3xl text-white text-center pt-5 pb-20">
          Turn Mobile and PC Games Into Chart-Topping Hits
        </p>
      </div>
      <div className="flex flex-grow relative md:absolute md:bg-inherit bg-black top-0 right-0 w-full h-full p-12 md:flex md:w-1/2">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Publishing;
