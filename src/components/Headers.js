import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = ({ setMenuOpen, menuOpen }) => {
  return (
    <>
      <nav>
        <NavContent setMenuOpen={setMenuOpen} />
      </nav>

      <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
        <AiOutlineMenu />
      </button>
    </>
  );
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
      <NavContent setMenuOpen={setMenuOpen} />
    </div>
  );
};

const NavContent = ({ setMenuOpen }) => (
  <>
    <div className="logo">
      <NavLink to="/" className="brand">
        Vault Games Studio
      </NavLink>
    </div>

    <div className="nav-wrapper">
      <div className="navigation">
        <NavLink
          to="/gamedevelopment"
          activeClassName="activeClass"
          onClick={() => setMenuOpen(false)}
        >
          Game Development
        </NavLink>
        <NavLink
          to="/gameArt"
          activeClassName="activeClass"
          onClick={() => setMenuOpen(false)}
        >
          Game Art
        </NavLink>
        <NavLink
          to="/animation"
          activeClassName="activeClass"
          onClick={() => setMenuOpen(false)}
        >
          Animation
        </NavLink>
        <NavLink
          to="/publishing"
          activeClassName="activeClass"
          onClick={() => setMenuOpen(false)}
        >
          Publishing
        </NavLink>
        <NavLink
          to="/academy"
          activeClassName="activeClass"
          onClick={() => setMenuOpen(false)}
        >
          Academy
        </NavLink>
        <NavLink
          to="/contact"
          activeClassName="activeClass"
          onClick={() => setMenuOpen(false)}
        >
          <Button variant="contained" color="success">
            Get in Touch
          </Button>
        </NavLink>
      </div>
    </div>
  </>
);

export default Header;
