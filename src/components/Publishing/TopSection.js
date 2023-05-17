import React from "react";
import video from "../../assets/video-game-7249.mp4";

const SkewedDesign = () => {
  return (
    <div className="relative">
      <video
        className="h-screen w-full object-cover"
        src={video}
        autoPlay
        muted
        loop
      />
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center">
        <h2 className="text-4xl md:text-8xl md:text-center font-bold mb-2 text-white">
          GAME
          <span className="text-blue "> PUBLISHING</span>
        </h2>
        <p className="text-lg md:text-3xl  text-white text-center pt-5">
          <span className="text-blue">Vault Games Studio</span> turn mobile
          games into chart-topping hits
        </p>
      </div>
    </div>
  );
};

export default SkewedDesign;
