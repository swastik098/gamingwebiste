import React from "react";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header-wrapper">
      <div className="logo">
        <NavLink to="/" className="brand">
          Vault Games Studio
        </NavLink>
      </div>

      <div className="nav-wrapper">
        <div className="navigation">
          <NavLink to="/gamedevelopment" activeClassName="activeClass">
            Game Development
          </NavLink>
          <NavLink to="/gameArt" activeClassName="activeClass">
            Game Art
          </NavLink>
          <NavLink to="/animation" activeClassName="activeClass">
            Animation
          </NavLink>
          <NavLink to="/publishing" activeClassName="activeClass">
            Publishing
          </NavLink>
          <NavLink to="/academy" activeClassName="activeClass">
            Academy
          </NavLink>
          <NavLink to="/contact" activeClassName="activeClass">
            <Button variant="contained" color="success">
              Get in Touch
            </Button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
