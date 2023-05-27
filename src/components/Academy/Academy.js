// ScrollButton.js
import React, { useContext } from "react";
import { ScrollContext } from "../.././ScrollContext";

const Academy = () => {
  const { setScrollToSection } = useContext(ScrollContext);

  const handleClick = () => {
    setScrollToSection("targetSection");
  };

  return <button onClick={handleClick}></button>;
};

export default Academy;
