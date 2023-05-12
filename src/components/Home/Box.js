import React from "react";

const Box = ({ text, className, boldText }) => {
  const parts = text.split(boldText);
  return (
    <>
      <div className="p-5">
        <p className={`${className}`}>
          {parts[0]}
          <span className="font-bold">{boldText}</span>
          {parts[1]}
        </p>
      </div>
    </>
  );
};
export default Box;
