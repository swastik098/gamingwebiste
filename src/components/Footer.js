/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import './footer.scss';

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
            <i className="material-icons">instagram</i>
          </a>
          <a href="https://www.facebook.com">
            <i className="material-icons">facebook</i>
          </a>
          <a href="https://www.linkedin.com">
            <i className="material-icons">linkedin</i>
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
