import React, { useEffect, useState } from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";


import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";


function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Router>
        <Header />
        <Navbar toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/contact" element={<ContactUs />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        {/* <Grid /> */}
      </Router>
      {/* <Login/> */}
    </div>
  );
}

export default App;
