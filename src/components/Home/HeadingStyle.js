import React from "react";

const HeadingStyle = ({ title, className }) => {
  return (
    <h2
      className={`font-bold font-mono mb-10 text-2xl antialiased flex justify-center items-center ${className}`}
    >
      {title}
    </h2>
  );
};

export default HeadingStyle;
