import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

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
      className="flex font-sans-Roboto items-center justify-between flex-wrap bg-gradient-to-r from-yellow-400 to-red-500 p-8 py-6"
    >
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          <NavLink to="/" onClick={closeMenu}>
            LOGO
          </NavLink>
        </span>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-white border-gray-400 hover:text-white hover:border-white"
          onClick={() => setShowMenu(!showMenu)}
        >
          <svg
            className="fill-current h-3 w-3"
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
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
            onClick={closeMenu}
          >
            GAME DEVELOPMENT
          </NavLink>
          <NavLink
            to="/gameart"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
            onClick={closeMenu}
          >
            GAME ART
          </NavLink>
          <NavLink
            to="/animation"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
            onClick={closeMenu}
          >
            ANIMATION
          </NavLink>
          <NavLink
            to="/publishing"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
            onClick={closeMenu}
          >
            PUBLISHING
          </NavLink>
          <NavLink
            to="/academy"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
            onClick={closeMenu}
          >
            ACADEMY
          </NavLink>
        </div>
        <NavLink
          href="/contact"
          className="inline-block text-xl px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0"
          onClick={closeMenu}
        >
          Get In Touch
        </NavLink>
      </div>
    </nav>
  );
}

export default Navigation;
