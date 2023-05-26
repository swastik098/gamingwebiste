import React from "react";

const VirtualTechnologyComponent = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center">
      <div className="bg-white p-4 md:w-1/2 flex flex-col-reverse ">
        <div className="grid grid-cols-2 gap-5">
          <div className="relative overflow-hidden">
            <img
              className="w-full h-auto transform transition-transform duration-300 hover:scale-105 rounded-xl "
              src="https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683712829/Vault%20Games/z4pyfkxeoolmwzl96m3i.png"
              alt="img"
            />
          </div>
          <div className="relative overflow-hidden">
            <img
              className="w-full h-auto transform transition-transform duration-300 hover:scale-105 rounded-xl "
              src="https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683960354/Vault%20Games/gameart/HighresScreenshot00001_y9pdzw.jpg"
              alt="img"
            />
          </div>
          <div className="relative overflow-hidden">
            <img
              className="w-full h-auto transform transition-transform duration-300 hover:scale-105 rounded-xl "
              src="https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683956921/Vault%20Games/concept_5_oiysyj.png"
              alt="img"
            />
          </div>
          <div className="relative overflow-hidden">
            <img
              className=" w-full h-autotransform transition-transform duration-300 hover:scale-105 rounded-xl "
              src="https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683956949/Vault%20Games/fotobash_tanki1_tqa4ep.png"
              alt="img"
            />
          </div>
        </div>
      </div>
      <div className="px-8 mt-5 p-4 md:w-1/2 md:mr-5 rounded-2xl mr-5 md:ml-4">
        <h2 className="text-6xl text-center  text-black font-sans font-bold mb-8">
          Virtual Technology
        </h2>
        <p className="text-center text-black  font-medium font-sans">
          We at Vault Games studio explore the world of virtual production and
          its impact on the entertainment industry.
          <br />
          <br />
          We visualize, capture, and create digital assets within a virtual
          environment, such as 3D models, textures, and animations. This
          technology enables us to make creative decisions on the spot, saving
          time and resources compared to traditional post-production methods.
          <br />
          <br />
          We specialize in real-time rendering, which generates high-quality
          visuals instantly. It allows filmmakers and game developers to see the
          virtual world in real-time, enabling immediate adjustments and
          experimentation. We work with real-time rendering engines like Unreal
          Engine and Unity, which have become industry standards, providing
          photorealistic graphics and advanced lighting effects.
          <br />
          <br />
          Motion capture technology also plays a vital role in our virtual
          production workflow. It captures the movements of actors and
          translates them into digital characters. Through specialized suits
          equipped with markers or facial recognition systems, performers'
          actions and expressions can be recorded and applied to digital avatars
          in real-time. This seamless integration of live-action and digital
          performances allows for more natural and dynamic character animations.
          <br />
          <br />
          At Vault Games studio, we accelerate the production process by
          enabling real-time visualization, reducing the need for lengthy
          post-production work. This results in shorter production schedules and
          faster turnaround times.
        </p>
      </div>
    </div>
  );
};

export default VirtualTechnologyComponent;
