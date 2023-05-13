import React from "react";
import OtherServices from "./OtherServices";
import SkewedDesign from "./TopSection";

const Publishing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SkewedDesign />
      <div className="flex-grow overflow-y-auto">
        <OtherServices />
      </div>
    </div>
  );
};

export default Publishing;
