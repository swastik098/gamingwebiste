import React, { useState} from "react";
import { NavLink } from "react-router-dom";

function Navigation({resultRef}) {
  const [showMenu, setShowMenu] = useState(false);

  //  const myref = useRef(null);
  const handleGetInTouchClick = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection && contactSection.scrollIntoView) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const scrollTo = (e)=>{
    e.preventDefault();
    resultRef.current.scrollIntoView({ behavior: "smooth" });
  }

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
      className="flex font-sans items-center justify-between flex-wrap bg-gray-800 p-8 py-6"
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
          className="flex items-center px-3 py-2 border-2 rounded text-white border-black  hover:text-black hover:border-black"
          onClick={() => setShowMenu(!showMenu)}
        >
          <svg
            className="fill-current h-5 w-5"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" fill="#000" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          showMenu ? "block" : "hidden"
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-m text-center space-x-20 lg:flex-grow">
          <NavLink
            to="/gamedevelopment"
            className="font-semibold text-m tracking-tight flex-shrink-0 text-white mr-4 mt-4 lg:inline-block lg:mt-0 hover:text-blue"
            // className="block mt-4 lg:inline-block lg:mt-0 text-white
            //  hover:text-blue mr-4 font-normal text-xl tracking-tight"
            onClick={closeMenu}
          >
            GAME DEVELOPMENT
          </NavLink>
          <NavLink
            to="/gameart"
            className="font-semibold text-m tracking-tight flex-shrink-0 text-white mr-4 mt-4 lg:inline-block lg:mt-0 hover:text-blue "
            onClick={closeMenu}
          >
            GAME ART
          </NavLink>
          <NavLink
            // to="/animation"
            className="font-semibold text-m tracking-tight flex-shrink-0 text-white mr-4 mt-4 lg:inline-block lg:mt-0 hover:text-blue "
            onClick={scrollTo}
          >
            VIRTUAL TECHNOLOGY
          </NavLink>
          <NavLink
            to="/publishing"
            className="font-semibold text-m tracking-tight flex-shrink-0 text-white mr-4 mt-4 lg:inline-block lg:mt-0 hover:text-blue "
            onClick={closeMenu}
          >
            PUBLISHING
          </NavLink>
          <NavLink
            to="/academy"
            className="font-semibold text-m tracking-tight flex-shrink-0 text-white mr-4 mt-4 lg:inline-block lg:mt-0 hover:text-blue "
            onClick={closeMenu}
          >
            ACADEMY
          </NavLink>
        </div>
        <NavLink
          to={"/contact"}
          onClick={() => {
            handleGetInTouchClick();
            closeMenu();
          }}
          // onClick={handleGetInTouchClick}
          className="inline-block text-m px-4 py-2 font-semibold tracking-tight leading-none border rounded text-white border-black hover:border-white hover:text-blue hover:bg-gray-800 mt-4 lg:mt-0"
          // onClick={closeMenu}
        >
          Get In Touch
        </NavLink>
      </div>
    </nav>
  );
}

export default Navigation;
