import React from "react";
import video from "../../assets/video-game-7249.mp4";
import RegisterForm from "./RegisterPublish";
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
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center top-0 left-0 w-1/2 h-full font-sans">
        <h2 className="text-4xl md:text-8xl md:text-center font-bold mb-2 text-white">
          GAME
          <span className="text-blue font-sans "> PUBLISHING</span>
        </h2>
        <p className="text-lg md:text-3xl  text-white text-center pt-5 ">
          <span className="text-blue mr-4 p-4 font-semibold font-sans">
            Vault Games Studio
          </span>
          turn mobile games into chart-topping hits
        </p>
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full p-12 md:flex flex">
        <RegisterForm />
      </div>
    </div>
    //     <div className="relative">
    //        <video
    //         className="h-screen w-full object-cover"
    //         src={video}
    //         autoPlay
    //         muted
    //         loop
    //       />
    //     <div class="flex flex-wrap">
    //   <div class="w-full md:w-1/2">
    //   <h2 className="text-4xl md:text-8xl md:text-center font-bold mb-2 text-white absolute ">
    //            GAME
    //            <span className="text-blue "> PUBLISHING</span>
    //          </h2>
    //          <p className="text-lg md:text-3xl  text-white text-center pt-5 absolute ">
    //            <span className="text-blue">Vault Games Studio</span> turn mobile
    //            games into chart-topping hits
    //          </p>
    //   </div>
    //   <div class="w-full md:w-1/2">
    //     <RegisterForm />
    //   </div>
    // </div>
    // </div>
  );
};

export default SkewedDesign;
