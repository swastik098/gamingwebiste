/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gray-800 pt-16 pb-8">
      <div className="max-w-6xl m-auto flex flex-wrap justify-left">
        <div className="p-4 w-full md:w-1/4">
          <div className="text-white uppercase mb-6 font-bold">
            Most in-demand services
          </div>
          <a
            href="#"
            className="my-3 block text-gray-300 hover:text-white text-sm font-medium duration-700"
          >
            Game development
          </a>
          <a
            href="#"
            className="my-3 block text-gray-300 hover:text-white text-sm font-medium duration-700"
          >
            Game art
          </a>
          <a
            href="#"
            className="my-3 block text-gray-300 hover:text-white text-sm font-medium duration-700"
          >
            Animation
          </a>
          <a
            href="#"
            className="my-3 block text-gray-300 hover:text-white text-sm font-medium duration-700"
          >
            Publishing
          </a>
          <a
            href="#"
            className="my-3 block text-gray-300 hover:text-white text-sm font-medium duration-700"
          >
            Academy
          </a>
        </div>
        <div className="p-4 w-full md:w-1/4">
          <div className="text-white uppercase mb-6 font-bold">
            Game design courses
          </div>
          <a
            href="#"
            className="my-3 block text-gray-300 hover:text-white text-sm font-medium duration-700"
          >
            Unity 3D
          </a>
          <a
            href="#"
            className="my-3 block text-gray-300 hover:text-white text-sm font-medium duration-700"
          >
            Unreal Engine
          </a>
          <a
            href="#"
            className="my-3 block text-gray-300 hover:text-white text-sm font-medium duration-700"
          >
            Game art
          </a>
        </div>
        <div className="p-4 w-full md:w-1/4">
          <div className="text-white uppercase mb-6 font-bold">
            Office address
          </div>
          <div className="my-3 block text-gray-300 text-sm font-medium duration-700">
            Vault Games Studio
          </div>
          <div className="my-3 block text-gray-300 text-sm font-medium duration-700">
            123 Main Street
          </div>
          <div className="my-3 block text-gray-300 text-sm font-medium duration-700">
            Anytown, USA 12345
          </div>
        </div>
        <div className="p-4 w-full md:w-1/4">
          <div className="text-white uppercase mb-6 font-bold">Contact</div>
          <div className="flex gap-4 mb-4 lg:mb-0">
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
          <a
            href="#"
            className="my-3 block text-gray-300 hover:text-white text-sm font-medium duration-700"
          >
            Email: info@vaultgames.com
          </a>
          <a
            href="#"
            className="my-3 block text-gray-300 hover:text-white text-sm font-medium duration-700"
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
