import React, { useEffect, useState } from 'react'
import './index.css'

import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Login from './Components/Pages/Login'

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
    <div className={darkMode ? "dark": ""}>
      <Header/>
      <Navbar toggleTheme={toggleTheme}/>
      <Hero/>
      {/* <Login/> */}
    </div>
  )
}

export default App