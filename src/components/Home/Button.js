import React from "react";

const Button = ({ text, onClick, className} ,props) => {
  console.log(props,"type")
  return (
    <button
      className={`text-2xl  bg-gradient-to-b from-blue to-white-500 hover:bg-blue-950 text-black font-bold py-3 px-4 rounded-lg ${className}`}
      onClick={onClick}
      // type={type}
    >
      {text}
    </button>
  );
};

export default Button;
