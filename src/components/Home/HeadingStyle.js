import React from "react";

const HeadingStyle = ({ title, className }) => {
  return (
    <h2
      className={`font-bold mb-10 text-xl flex justify-center items-center ${className}`}
    >
      {title}
    </h2>
  );
};

export default HeadingStyle;
