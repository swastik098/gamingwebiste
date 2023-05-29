import React from "react";

const Button = ({ text, onClick, className }, props) => {
  return (
    <button
      className={`text-2xl font-serif bg-cyan-500 to-white-500 hover:bg-blue hover:text-black text-white font-bold py-3 px-4 rounded-lg ${className}`}
      onClick={onClick}
      // type={type}
    >
      {text}
    </button>
  );
};

export default Button;
