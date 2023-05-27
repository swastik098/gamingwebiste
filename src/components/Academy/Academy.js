// ScrollButton.js
import React, { useContext } from "react";
import { ScrollContext } from "../.././ScrollContext";

const Academy = () => {
  const { scrollTo } = useContext(ScrollContext);

  const handleClick = () => {
    scrollTo("targetSection");
  };

  return <button onClick={handleClick}></button>;
};

export default Academy;
