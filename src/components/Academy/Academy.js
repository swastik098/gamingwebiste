import React from "react";
// import Button from "../Home/Button";
// import video from "../../assets/Academybg.mp4";

const Academy = () => {
  return (
    <div className="flex flex-col md:h-screen md:flex-row justify-between w-full text-center mx-auto px-4 py-8">
      <div className="w-full md:w-1/2 md:pl-4 my-auto">
        {/* Adjusted margin */}
        <div className="flex justify-center items-center mb-8">
          <img
            className="w-60 md:w-96" // Adjusted logo size
            src="https://res.cloudinary.com/dzoqkbxc6/image/upload/v1684991248/Vault%20Games/logo/vault_academy_final_logo_lmzwn5.jpg"
            alt="Logo"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center font-serif">
          Welcome To Vault Academy
        </h1>
        <p className="text-l md:text-xl mb-8 text-center font-sans">
          Vault Academy, a leading gaming studio, immerses players in
          captivating virtual worlds. With cutting-edge technology and
          innovative game design, we redefine the gaming experience. Join Vault
          Academy and embark on thrilling adventures that push the boundaries of
          imagination.
        </p>
      </div>
      <div className="flex flex-wrap justify-center md:w-1/2 border-spacing-4 mt-20">
        <div className="w-full sm:w-1/2 md:w-1/3 p-4">
          <div className="rounded-xl bg-gray-800 p-6 h-full flex flex-col justify-center text-center">
            <h2 className="text-xl font-bold mb-2 text-white font-sans">
              Unity Design
            </h2>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 p-4">
          <div className="rounded-xl bg-gray-800 p-6 h-full flex flex-col justify-center text-center">
            <h2 className="text-xl font-bold mb-2 text-white font-sans">
              Unreal Design
            </h2>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 p-4">
          <div className="rounded-xl bg-gray-800 p-6 h-full flex flex-col justify-center text-center">
            <h2 className="text-xl font-bold mb-2 text-white font-sans">
              Game Art Design
            </h2>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 p-4">
          <div className="rounded-xl bg-gray-800 p-6 h-full flex flex-col justify-center text-center">
            <h2 className="text-xl font-bold mb-2 text-white font-sans">
              Game Design
            </h2>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 p-4">
          <div className="rounded-xl bg-gray-800 p-6 h-full flex flex-col justify-center text-center">
            <h2 className="text-xl font-bold mb-2 text-white font-sans">
              Virtual Production
            </h2>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 p-4">
          <div className="rounded-xl bg-gray-800 p-6 h-full flex flex-col justify-center text-center">
            <h2 className="text-xl font-bold mb-2 text-white font-sans">
              3D Art
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academy;
