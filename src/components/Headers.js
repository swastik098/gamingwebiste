import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

  const closeMenu = () => {
    setShowMenu(false);
  };

  const navStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 999,
  };

  return (
    <nav
      style={navStyle}
      className="flex items-center justify-between flex-wrap bg-gray-800 p-6"
    >
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          <NavLink to="/" onClick={closeMenu}>
            Vault Games Studio
          </NavLink>
        </span>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
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
        <div className="text-sm lg:text-right lg:flex-grow">
          <NavLink
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/gamedevelopment"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
            onClick={closeMenu}
          >
            Game Development
          </NavLink>
          <NavLink
            to="/gameart"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
            onClick={closeMenu}
          >
            Game Art
          </NavLink>
          <NavLink
            to="/animation"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
            onClick={closeMenu}
          >
            Animation
          </NavLink>
          <NavLink
            to="/publishing"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
            onClick={closeMenu}
          >
            Publishing
          </NavLink>
          <NavLink
            to="/academy"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
            onClick={closeMenu}
          >
            Academy
          </NavLink>
          <NavLink
            href="#contact"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0"
            onClick={closeMenu}
          >
            Get in Touch
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
