import React from "react";

const InfoBox = ({ title, text }) => {
  return (
    <div className="info-box">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default InfoBox;
