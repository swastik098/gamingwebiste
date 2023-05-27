// ScrollContext.js
import React, { createContext, useState } from "react";

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [scrollToSection, setScrollToSection] = useState("");

  // const scrollTo = (section) => {
  //   setScrollToSection(section);
  // };

  return (
    <ScrollContext.Provider value={{ scrollToSection, setScrollToSection }}>
      {children}
    </ScrollContext.Provider>
  );
};
