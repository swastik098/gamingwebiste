/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
// import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pt-16 pb-8 bg-gray-800 mt-16">
      <div className="max-w-6xl m-auto flex flex-wrap">
        {/* <div className="p-4 w-full md:w-1/4">
          <div className="text-white uppercase mb-6 font-bold">
            Most in-Demand Services
          </div>
          <NavLink
            to="/gamedevelopment"
            className="my-3 block text-white hover:text-white text-sm font-medium duration-700"
          >
            Game Development
          </NavLink>
          <NavLink
            to="/gameart"
            className="my-3 block text-white hover:text-white text-sm font-medium duration-700"
          >
            Game Art
          </NavLink>
          <NavLink
            to="/animation"
            className="my-3 block text-white hover:text-white text-sm font-medium duration-700"
          >
            Animation
          </NavLink>
          <NavLink
            to="/publishing"
            className="my-3 block text-white hover:text-white text-sm font-medium duration-700"
          >
            Publishing
          </NavLink>
          <NavLink
            to="/animation"
            className="my-3 block text-white hover:text-white text-sm font-medium duration-700"
          >
            Academy
          </NavLink>
        </div> */}

        {/* <div className="p-4 w-full md:w-1/4">
          <div className="text-white uppercase mb-6 font-bold">
            Game Design Courses
          </div>
          <NavLink
            href="#"
            className="my-3 block text-white hover:text-white text-sm font-medium duration-700"
          >
            Unity 3D
          </NavLink>
          <NavLink
            href="#"
            className="my-3 block text-white hover:text-white text-sm font-medium duration-700"
          >
            Unreal Engine
          </NavLink>
          <NavLink
            href="#"
            className="my-3 block text-white hover:text-white text-sm font-medium duration-700"
          >
            Game Art
          </NavLink>
          <NavLink
            href="#"
            className="my-3 block text-white hover:text-white text-sm font-medium duration-700"
          >
            Virtual Technology
          </NavLink>
        </div> */}
        <div className="p-4 w-full md:w-1/4">
          <div className="text-white uppercase mb-6 font-bold">headquarter</div>
          <div className="my-3 block text-white text-sm font-medium duration-700">
            Vault Games Studio
          </div>
          <div className="my-3 block text-white text-sm font-medium duration-700">
            Image incubation centre
          </div>
          <div className="my-3 block text-white text-sm font-medium duration-700">
            Hyderabad 81, India
          </div>
        </div>
        <div className="flex flex-1 space-x-6">
          <div className="p-4 w-full md:w-1/4">
            <div className="text-white uppercase mb-6 font-bold">Branch</div>
            <div className="my-3 block text-white text-sm font-medium duration-700">
              Via Limana 127/6
            </div>
            <div className="my-3 block text-white text-sm font-medium duration-700">
              Modena, Emilia Romagna
            </div>
            <div className="my-3 block text-white text-sm font-medium duration-700">
              Italy 41125
            </div>
          </div>
          <div className="p-4 w-full md:w-1/4">
            <div className="text-white uppercase mb-6 font-bold">Branch</div>
            <div className="my-3 block text-white text-sm font-medium duration-700">
              2 basement
            </div>
            <div className="my-3 block text-white text-sm font-medium duration-700">
              Burlington Gardens Acton Town W36BA
            </div>
            <div className="my-3 block text-white text-sm font-medium duration-700">
              London UK
            </div>
          </div>
          <div className="p-4 w-full md:w-1/4">
            <div className="text-white uppercase mb-6 font-bold">Branch</div>
            <div className="my-3 block text-white text-sm font-medium duration-700">
              U 17 362-364
            </div>
            <div className="my-3 block text-white text-sm font-medium duration-700">
              Railway Terrace, Guildford
            </div>
            <div className="my-3 block text-white text-sm font-medium duration-700">
              Australia NSW-2161
            </div>
          </div>
        </div>

        <div className="p-4 w-full md:w-1/4">
          <div className="text-white uppercase mb-6 font-bold">Contact</div>
          <div className="flex gap-4 mb-4 lg:mb-0">
            <a
              className="text-4xl  text-white hover:text-white"
              href="https://www.instagram.com"
            >
              <AiFillInstagram />
            </a>
            <a
              className="text-4xl  text-white hover:text-white"
              href="https://www.facebook.com"
            >
              <AiFillFacebook />
            </a>
            <a
              className="text-4xl  text-white hover:text-white"
              href="https://www.linkedin.com"
            >
              <AiFillLinkedin />
            </a>
            <a
              className="text-4xl  text-white hover:text-white"
              href="https://www.twitter.com"
            >
              <AiFillTwitterSquare />
            </a>
          </div>
          <a
            href="mailto:website@vaultgamesstudio.com"
            className="my-3 block text-white hover:text-white text-sm font-medium duration-700"
          >
            Email: info@vaultgamesstudio.com
          </a>
          <a
            href="tel:18001234567"
            className="my-3 block text-white hover:text-white text-sm font-medium duration-700"
          >
            Phone: 1-800-123-4567
          </a>
        </div>
      </div>
      <div className="pt-8 flex flex-wrap justify-center">
        <div className="w-full sm:w-auto text-center sm:text-left ">
          <div className="text-white mb-2">
            © 2023 Vault Games Studio All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
