import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

  const handleGetInTouchClick = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection && contactSection.scrollIntoView) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const navStyle = {
    position: "sticky",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 9999,
  };

  return (
    <nav
      style={navStyle}
      className="flex font-sans items-center justify-between flex-wrap bg-gradient-to-b from-sky-500 to-white p-8 py-6"
    >
      <div className="flex items-center flex-shrink-0 text-black mr-6">
        <span className="font-semibold text-xl tracking-tight">
          <NavLink to="/" onClick={closeMenu}>
            LOGO
          </NavLink>
        </span>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border-2 rounded text-black border-white  hover:text-black hover:border-white"
          onClick={() => setShowMenu(!showMenu)}
        >
          <svg
            className="fill-current h-5 w-5"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path
              d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
              fill="#ffffff"
            />
          </svg>
        </button>
      </div>
      <div
        className={`${
          showMenu ? "block" : "hidden"
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-xl text-center space-x-20 lg:flex-grow">
          <NavLink
            to="/gamedevelopment"
            className="block mt-4 lg:inline-block lg:mt-0 text-black
             hover:text-black mr-4 font-normal text-xl tracking-tight"
            onClick={closeMenu}
          >
            Game Development
          </NavLink>
          <NavLink
            to="/gameart"
            className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-4 font-normal text-xl tracking-tight"
            onClick={closeMenu}
          >
            Game Art
          </NavLink>
          <NavLink
            to="/animation"
            className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-4 font-normal text-xl tracking-tight"
            onClick={closeMenu}
          >
            Virtual Production
          </NavLink>
          <NavLink
            to="/publishing"
            className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-4 font-normal text-xl tracking-tight"
            onClick={closeMenu}
          >
            Publishing
          </NavLink>
          <NavLink
            to="/academy"
            className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-4 font-normal text-xl tracking-tight"
            onClick={closeMenu}
          >
            Academy
          </NavLink>
        </div>
        <NavLink
          to={"/contact"}
          onClick={() => {
            handleGetInTouchClick();
            closeMenu();
          }}
          // onClick={handleGetInTouchClick}
          className="inline-block text-xl px-4 py-2 font-normal tracking-tight leading-none border rounded text-black border-black hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0"
          // onClick={closeMenu}
        >
          Get In Touch
        </NavLink>
      </div>
    </nav>
  );
}

export default Navigation;
