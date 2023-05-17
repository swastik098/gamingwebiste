import React from "react";

const GameArt = () => {
  const CardImages = [
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
    {
      url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683959432/Vault%20Games/gameart/murali-krishna-highresscreenshot00006_ppzhut.jpg",
      heading: "Image 10",
      description: "This is the description for Image 10",
    },
    {
      url: "https://res.cloudinary.com/dzoqkbxc6/image/upload/v1683959430/Vault%20Games/gameart/murali-krishna-highresscreenshot00001_vujsij.jpg",
      heading: "Image 11",
      description: "This is the description for Image 11",
    },
  ];
  return (
    <div className="flex flex-wrap justify-center items-center">
      {CardImages.map((item, i) => (
        <div
          key={i}
          className="m-4 w-72 rounded-lg overflow-hidden shadow-lg transition-all duration-300 transform-Y hover:scale-110"
        >
          <img
            src={item.url}
            alt={item.heading}
            className="w-full h-48 object-cover"
          />
          {/* <div className="p-4">
            <h3 className="text-lg font-semibold">{item.heading}</h3>
            <p className="text-gray-500">{item.description}</p>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default GameArt;
