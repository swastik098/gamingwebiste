import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className=" px-10 bg-gradient-to-r from-yellow-400 to-red-500">
      <nav className="container mx-auto flex flex-wrap items-center justify-between py-5">
        <div className="flex items-center flex-shrink-0 mr-6">
          <NavLink className="text-white font-bold text-2xl" to="/">
            Logo
          </NavLink>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
            onClick={() => setShowMenu(!showMenu)}
          >
            <svg
              className="h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="2"
                d="M4 6h12M4 10h12M4 14h12"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            showMenu ? "block" : "hidden"
          } w-full lg:flex lg:items-center lg:w-auto`}
        >
          <div className="text-xl lg:flex-grow text-center lg:text-left">
            <NavLink
              to="/gamedevelopment"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mx-4"
              onClick={closeMenu}
            >
              Game Development
            </NavLink>
            <NavLink
              to="/gameart"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mx-4"
              onClick={closeMenu}
            >
              Game Art
            </NavLink>
            <NavLink
              to="/animation"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mx-4"
              onClick={closeMenu}
            >
              Animation
            </NavLink>
            <NavLink
              to="/publishing"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mx-4"
              onClick={closeMenu}
            >
              Publishing
            </NavLink>
            <NavLink
              to="/academy"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mx-4"
              onClick={closeMenu}
            >
              Academy
            </NavLink>
          </div>
          <div
            className={`${
              showMenu ? "block" : "hidden"
            } w-full lg:flex lg:items-center lg:w-auto`}
          >
            <div className="text-2xl lg:flex-grow text-center lg:text-left">
              <NavLink
                href="/contact"
                className="inline-block text-xl px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0"
                onClick={closeMenu}
              >
                Get in Touch
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
