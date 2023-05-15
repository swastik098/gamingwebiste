import React from "react";
import OtherServices from "./OtherServices";
import SkewedDesign from "./TopSection";
import RegisterForm from "./RegisterPublish";

const Publishing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SkewedDesign />
      <div className="">
        <RegisterForm />
      </div>
      <div className="flex-grow overflow-y-auto">
        <OtherServices />
      </div>
    </div>
  );
};

export default Publishing;
