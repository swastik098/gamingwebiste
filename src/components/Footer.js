/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pt-16 pb-8 bg-gradient-to-t from-sky-500 to-white mt-16">
      <div className="max-w-6xl m-auto flex flex-wrap justify-left">
        <div className="p-4 w-full md:w-1/4">
          <div className="text-black uppercase mb-6 font-bold">
            Most in-Demand Services
          </div>
          <NavLink
            to="/gamedevelopment"
            className="my-3 block text-black hover:text-black text-sm font-medium duration-700"
          >
            Game Development
          </NavLink>
          <NavLink
            to="/gameart"
            className="my-3 block text-black hover:text-black text-sm font-medium duration-700"
          >
            Game Art
          </NavLink>
          <NavLink
            to="/animation"
            className="my-3 block text-black hover:text-black text-sm font-medium duration-700"
          >
            Animation
          </NavLink>
          <NavLink
            to="/publishing"
            className="my-3 block text-black hover:text-black text-sm font-medium duration-700"
          >
            Publishing
          </NavLink>
          <NavLink
            to="/animation"
            className="my-3 block text-black hover:text-black text-sm font-medium duration-700"
          >
            Academy
          </NavLink>
        </div>
        <div className="p-4 w-full md:w-1/4">
          <div className="text-black uppercase mb-6 font-bold">
            Game Design Courses
          </div>
          <NavLink
            href="#"
            className="my-3 block text-black hover:text-black text-sm font-medium duration-700"
          >
            Unity 3D
          </NavLink>
          <NavLink
            href="#"
            className="my-3 block text-black hover:text-black text-sm font-medium duration-700"
          >
            Unreal Engine
          </NavLink>
          <NavLink
            href="#"
            className="my-3 block text-black hover:text-black text-sm font-medium duration-700"
          >
            Game Art
          </NavLink>
          <NavLink
            href="#"
            className="my-3 block text-black hover:text-black text-sm font-medium duration-700"
          >
            Virtual Production
          </NavLink>
        </div>
        <div className="p-4 w-full md:w-1/4">
          <div className="text-black uppercase mb-6 font-bold">
            Office address
          </div>
          <div className="my-3 block text-black text-sm font-medium duration-700">
            Vault Games Studio
          </div>
          <div className="my-3 block text-black text-sm font-medium duration-700">
            123 Main Street
          </div>
          <div className="my-3 block text-black text-sm font-medium duration-700">
            Anytown, USA 12345
          </div>
        </div>
        <div className="p-4 w-full md:w-1/4">
          <div className="text-black uppercase mb-6 font-bold">Contact</div>
          <div className="flex gap-4 mb-4 lg:mb-0">
            <a
              className="text-4xl  text-black hover:text-black"
              href="https://www.instagram.com"
            >
              <AiFillInstagram />
            </a>
            <a
              className="text-4xl  text-black hover:text-black"
              href="https://www.facebook.com"
            >
              <AiFillFacebook />
            </a>
            <a
              className="text-4xl  text-black hover:text-black"
              href="https://www.linkedin.com"
            >
              <AiFillLinkedin />
            </a>
          </div>
          <a
            href="mailto:website@vaultgamesstudio.com"
            className="my-3 block text-black hover:text-black text-sm font-medium duration-700"
          >
            Email: website@vaultgamesstudio.com
          </a>
          <a
            href="tel:18001234567"
            className="my-3 block text-black hover:text-black text-sm font-medium duration-700"
          >
            Phone: 1-800-123-4567
          </a>
        </div>
      </div>
      <div className="pt-8 flex flex-wrap justify-center">
        <div className="w-full sm:w-auto text-center sm:text-left ">
          <div className="text-black mb-2">
            © 2023 Vault Games Studio All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
