import React from "react";
import Button from "../Home/Button";
const pics = [
  {
    url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683712574/Vault%20Games/HighresScreenshot00003_c3p7s3.png",
    heading: "Image 1",
    description: "This is the description for Image 1",
  },
  {
    url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683960354/Vault%20Games/gameart/HighresScreenshot00001_y9pdzw.jpg",
    heading: "Image 2",
    description: "This is the description for Image 2",
  },
  {
    url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683960325/Vault%20Games/gameart/tmp_0abe01fd-bfac-4f80-bb6e-2f2b19754c73_tyegzm.jpg",
    heading: "Image 3",
    description: "This is the description for Image 3",
  },
  {
    url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683960365/Vault%20Games/gameart/HighresScreenshot00002_a5amjc.jpg",
    heading: "Image 4",
    description: "This is the description for Image 4",
  },
  {
    url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683960336/Vault%20Games/gameart/HighresScreenshot00091_o2qrac.jpg",
    heading: "Image 5",
    description: "This is the description for Image 5",
  },
  {
    url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683959428/Vault%20Games/gameart/HighresScreenshot00004_tlgna2.jpg",
    heading: "Image 6",
    description: "This is the description for Image 6",
  },
  {
    url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683960362/Vault%20Games/gameart/tmp_8db7e837-330e-4cbe-913f-09888bf11146_nagu0n.jpg",
    heading: "Image 7",
    description: "This is the description for Image 7",
  },
  {
    url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683959446/Vault%20Games/gameart/tmp_311052b8-8f06-43b7-9fd1-d4f29c78867d_lascgv.png",
    heading: "Image 8",
    description: "This is the description for Image 8",
  },
  {
    url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683959435/Vault%20Games/gameart/murali-krishna-highresscreenshot00019_hajdgd.jpg",
    heading: "Image 9",
    description: "This is the description for Image 9",
  },
  // {
  //   url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683959432/Vault%20Games/gameart/murali-krishna-highresscreenshot00006_ppzhut.jpg",
  //   heading: "Image 10",
  //   description: "This is the description for Image 10",
  // },
  // {
  //   url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683959430/Vault%20Games/gameart/murali-krishna-highresscreenshot00001_vujsij.jpg",
  //   heading: "Image 11",
  //   description: "This is the description for Image 11",
  // },
];
const OtherServices = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between w-full text-center mx-auto px-4 py-8  ">
      <div className="flex flex-wrap justify-center md:w-1/2 border-spacing-4">
        {pics.map((pics, index) => (
          <div key={index} className="w-full sm:w-1/3 p-4 ">
            <img
              className="w-full h-36 object-cover object-center rounded-xl border-2 transition-all duration-300 transform-Y hover:scale-125"
              src={pics.url}
              alt={`pics ${index}`}
            />
          </div>
        ))}
      </div>
      <div className="w-full md:w-1/2 md:pl-4 mt-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
          Welcome To Our Site
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed orci
          eget velit hendrerit lacinia non ac quam.
        </p>
        <Button text={"Contact Us"} />
      </div>
    </div>
  );
};

export default OtherServices;
