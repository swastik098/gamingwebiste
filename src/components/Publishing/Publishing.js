import React from "react";
import OtherServices from "./OtherServices";
import SkewedDesign from "./TopSection";
import RegisterForm from "./RegisterPublish";

const Publishing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SkewedDesign />
      <div className="bg-gradient-to-r from-stone-600 to-stone-100">
        <RegisterForm />
      </div>
      <div className="flex-grow overflow-y-auto">
        <OtherServices />
      </div>
    </div>
  );
};

export default Publishing;
