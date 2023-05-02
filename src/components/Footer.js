/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__text">
        <div className="footer__links">
          <a href="#">Most in-demand services</a>
          <a href="#">Game design courses</a>
          <a href="#">Office address</a>
          <a href="#">Careers</a>
          <a href="#">Contacts</a>
        </div>
        <div className="footer__social">
          <a href="https://www.instagram.com">
            <AiFillInstagram />
          </a>
          <a href="https://www.facebook.com">
            <AiFillFacebook />
          </a>
          <a href="https://www.linkedin.com">
            <AiFillLinkedin />
          </a>
        </div>
        <div className="footer__text">
          © 2023 Vault Games Studio All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
