import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid";
// import clientLogo from "../assets/vault-games-final-logo.png";

function Navigation({ resultRef }) {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  //  const myref = useRef(null);
  const handleGetInTouchClick = () => {
    window.scrollTo(0, 0);
    const contactSection = document.getElementById("contact-section");
    if (contactSection && contactSection.scrollIntoView) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  // const scrollTo = (e) => {
  //   e.preventDefault();
  //   resultRef.current.scrollIntoView({ behavior: "smooth" });
  // };

  const navStyle = {
    position: "sticky",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 9999,
  };

  return (
    <>
      <div>
        <Grid container className="grid">
          <Grid item xs={4} sm={2} className="logo">
            <div className="flex items-center justify-center mt-1 mb-0 mobLogo">
              <div className="flex items-center flex-shrink-0 bg-base-color mr-6">
                <div className="flex items-center flex-shrink-0">
                  <NavLink to="/" onClick={closeMenu}>
                    <img
                      src="https://res.cloudinary.com/dzoqkbxc6/image/upload/v1685078812/Vault%20Games/logo/vault_games_final_logo_vgleh4.png"
                      alt="vault Gaming Studio"
                      className="h-18 w-20"
                    />
                  </NavLink>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={8} sm={10}>
            {" "}
            <nav
              style={navStyle}
              className="flex font-sans items-center justify-end  flex-wrap lg:bg-cyan-500 p-8 py-6"
            >
              <div className="block lg:hidden ">
                <button
                  className="flex items-center px-3 py-2 border-2 rounded text-white border-black   hover:text-black hover:border-black mobLogo"
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
                      fill="#000"
                    />
                  </svg>
                </button>
              </div>
              <div
                className={`${
                  showMenu ? "block" : "hidden"
                } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
              >
                <div className="text-l text-center space-x-20 lg:flex-grow mobMenu">
                  <NavLink
                    to="/gamedevelopment"
                    className=" font-serif font-extralight text-l tracking-tight flex-shrink-0 text-white mr-4 mt-4 lg:inline-block lg:mt-0 hover:text-blue headerMenu"
                    onClick={closeMenu}
                  >
                    HOME
                  </NavLink>
                  <NavLink
                    to="/gameart"
                    className="font-serif font-extralight text-l tracking-tight flex-shrink-0 text-white mr-4 mt-4 lg:inline-block lg:mt-0 hover:text-blue headerMenu"
                    onClick={closeMenu}
                  >
                    GAMING
                  </NavLink>
                  <NavLink
                    to="/VirtualTechnology"
                    className="font-serif font-extralight text-l tracking-tight flex-shrink-0 text-white mr-4 mt-4 lg:inline-block lg:mt-0 hover:text-blue headerMenu"
                    onClick={closeMenu}
                  >
                    VIRTUAL PRODUCTION
                  </NavLink>
                  <NavLink
                    to="/publishing"
                    className="font-serif font-extralight text-l tracking-tight flex-shrink-0 text-white mr-4 mt-4 lg:inline-block lg:mt-0 hover:text-blue headerMenu"
                    onClick={closeMenu}
                  >
                    BRAND MANAGEMENT
                  </NavLink>
                  {/* <NavLink
                    to="/academy"
                    className=" font-serif font-extralight text-l tracking-tight flex-shrink-0 text-white mr-4 mt-4 lg:inline-block lg:mt-0 hover:text-blue headerMenu"
                    onClick={closeMenu}
                  >
                    ACADEMY
                  </NavLink> */}
                </div>

                <NavLink
                  to={"/contact"}
                  onClick={() => {
                    handleGetInTouchClick();
                    closeMenu();
                  }}
                  className="text-l font-serif py-2 font-semibold tracking-tight leading-none rounded text-white border-white hover:border-white hover:text-blue 
                 mt-4 lg:mt-0 headerMenuGet"
                >
                  Get In Touch
                </NavLink>
              </div>
            </nav>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Navigation;
