import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import "./Hero.css";
import { useTheme } from "../../ThemeContext"; // Import the theme context

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { theme, toggleTheme } = useTheme(); // Use theme context

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="relative bg-center z-[-1] bg-cover h-[500px]"
      style={{
        backgroundImage:
          "url('https://www.microsoft.com/en-us/research/uploads/prod/2023/03/AI_Microsoft_Research_Header_1920x720.png')",
      }}
    >
      <div
        className={`absolute top-[42%] left-[8%] transform -translate-y-1/2 pl-2 ${
          isVisible ? "translate-x-0 opacity-100" : "-translate-x-5 opacity-0"
        } transition-transform duration-700`}
      >
        <h1 className="text-gray-300">SOFTWARE DEVELOPMENT & CONSULTANCY</h1>
        <br />
        <p className="text-black font-bold text-4xl font-sans">
          BUSINESS INNOVATION
        </p>
        <br />
        <p className="text-black font-bold text-4xl font-sans">
          THROUGH TECHNOLOGY
        </p>
        <br />
        <p className="text-gray-300">
          Leading Business Evolution with Tailored and{" "}
          <p>Innovative Software Solutions for Sustainable Growth</p>
        </p>
        <br /> <br />
        <div className="space-x-4 hover:bg-transparent">
          <button className="btn-slide-bg border-blue-600 mb-2 bg-blue-600 rounded px-6 py-2 cursor-pointer hover:bg-transparent">
            Let's Talk &nbsp; →
          </button>
          <button className="btn-slide-bg border-blue-600 mb-2 bg-blue-600 rounded px-4 py-2 space-x-2 cursor-pointer">
            Read More &nbsp; →
          </button>
        </div>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 pr-4 w-[450px] h-[450px] flex space-x-4">
        <img
          src="./hero-shape.png"
          alt="shape"
          className="w-[100px] h-[100px] animate-slow-spin"
        />
        <img
          src="./hero-thumb.png"
          alt="boy"
          onLoad={() => setIsLoaded(true)}
          className={`${
            isLoaded
              ? "transition-all duration-1000 ease-in-out filter-none"
              : "filter blur-lg"
          }`}
        />
      </div>

      {/* Theme Switcher */}
      <div className="absolute bottom-5 right-5 flex items-center z-10">
        {" "}
        {/* Added z-10 here */}
        <label className="switch">
          <input
            type="checkbox"
            onChange={toggleTheme}
            checked={theme === "dark"}
          />
          <span className="slider"></span>
        </label>
        {theme === "light" ? (
          <FaMoon className="text-gray-800 ml-2" size={24} />
        ) : (
          <FaSun className="text-yellow-500 ml-2" size={24} />
        )}
      </div>
    </div>
  );
}

export default Hero;
