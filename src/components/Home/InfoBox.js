import React from "react";

const InfoBox = ({ title, text, className }) => {
  return (
    <>
      <h2 className="font-bold mb-12 text-5xl">{title}</h2>
      <div className={`bg-gray-900 p-8 rounded-md ${className}`}>
        <p className={`text-sm md:text-base leading-relaxed text-center`}>
          {text}
        </p>
      </div>
    </>
  );
};

export default InfoBox;
