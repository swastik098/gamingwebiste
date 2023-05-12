import React from "react";

const Button = ({ text, onClick, className }) => {
  return (
    <button
      className={`text-3xl bg-gradient-to-r from-yellow-400 to-red-500 hover:bg-blue-950 text-white font-bold py-3 px-4 rounded-lg ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
