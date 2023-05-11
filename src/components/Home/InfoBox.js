import React from "react";

const InfoBox = ({ title, text, className }) => {
  return (
    <>
      <h2 className="font-bold mb-12 text-5xl text-center mt-10">{title}</h2>
      <div className={`p-8 rounded-md ${className}`}>
        <p className={`text-sm md:text-base leading-relaxed text-center`}>
          {text}
        </p>
      </div>
    </>
  );
};

export default InfoBox;
