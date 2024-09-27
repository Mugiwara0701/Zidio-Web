import React, { useEffect, useState } from "react";

import "../../index.css";
import { IoSearch } from "react-icons/io5";

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 700);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="relative flex flex-col md:flex-row justify-between items-center md:px-20 ">
      <div
        className={`flex flex-col md:flex-row md:space-x-6 transform ${
          isVisible ? "translate-x-0 opacity-100" : "-translate-x-5 opacity-0"
        } transition-transform duration-700 backdrop-filter backdrop-blur-lg`}
      >
        <div className="flex items-center mb-1 md:mb-0 w-[140px] h-[140px] ">
          <img src="./zidio.png" alt="zidio" />
        </div>
      </div>

      {/*Right Section */}

      <div
        className={`flex flex-col md:flex-row md:space-x-6 transform ${
          isVisible ? "translate-x-0 opacity-100" : "-translate-x-5 opacity-0"
        } transition-transform duration-700 backdrop-filter backdrop-blur-lg items-center justify-center space-x-7`}
      >
        <ul className="flex space-x-7 ">
          <li className="hover:text-blue-800 transition duration-500 cursor-pointer text-lg">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-blue-800 transition duration-500 cursor-pointer text-lg">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-blue-800 transition duration-500 cursor-pointer text-lg">
            <a href="#services">Services</a>
          </li>
          <li className="hover:text-blue-800 transition duration-500 cursor-pointer text-lg">
            <a href="#contact">Contact</a>
          </li>
          <li className="flex items-center hover:text-blue-800 transition duration-500 cursor-pointer text-lg">
            <a href="#search">
              <IoSearch className="text-2xl mr-1" />
            </a>
          </li>
        </ul>
        <button className="bg-blue-700 text-white rounded p-[11px] px-6 py-4">
          Get a Quote
        </button>
      </div>
    </div>
  );
}

export default Navbar;
