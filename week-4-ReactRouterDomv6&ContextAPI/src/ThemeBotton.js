import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemeBotton() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const handleTheme = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
  };

 
  return (
    <button
      className={
        darkMode  ? "btn btn-outline-dark" : "btn btn-outline-light"
            
      }
      onClick={handleTheme}
    >
       Switch Theme
    </button>
  );
}

export default ThemeBotton;

