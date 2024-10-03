import React, { useEffect, useState } from "react";
import "../../index.css";
import { IoSearch } from "react-icons/io5";

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  // Function to handle opening the search modal
  const openSearchModal = () => {
    setIsModalVisible(true);
  };

  // Function to handle closing the search modal
  const closeSearchModal = () => {
    setIsModalVisible(false);
    setSearchQuery(""); // Clear the search query when closing
  };

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

      {/* Right Section */}
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
          {/* Replace the anchor with a button for search */}
          <li className="flex items-center hover:text-blue-800 transition duration-500 cursor-pointer text-lg">
            <button
              onClick={openSearchModal}
              className="flex items-center text-2xl"
              aria-label="Search"
            >
              <IoSearch className="mr-1" />
            </button>
          </li>
        </ul>
        <button className="bg-blue-700 text-white rounded p-[11px] px-6 py-4">
          Get a Quote
        </button>
      </div>

      {/* Search Modal */}
      {isModalVisible && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 transition-opacity duration-700 ease-in-out ${
            isModalVisible ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeSearchModal}
        >
          <div
            className="absolute w-full h-full flex items-center justify-center transition-transform duration-700 transform scale-0"
            style={{
              transform: isModalVisible ? "scale(1)" : "scale(0.9)",
              transition: "transform 0.5s ease-in-out, opacity 0.5s ease-in-out",
            }}
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside it
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-3/4 md:w-1/2 p-3 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-500 bg-gray-800 bg-opacity-70 backdrop-filter backdrop-blur-md text-white placeholder-gray-400"
            />
            <button
              onClick={closeSearchModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-300"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
