import React from "react";
import { useContext } from "react";
import ThemeBotton from "../ThemeBotton";
import { ThemeContext } from "../ThemeContext";
import "./Navbar.css";

function Navbar() {
  /* const [darkMode, setDarkMode] = React.useState(true); */
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? "canvas-dark" : "canvas"}>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid ">
          <a className="navbar-brand" href="/">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
              <a className="nav-link" href="/about">
                About
              </a>
              <a className="nav-link" href="/contact">
                Contact
              </a>
              
            </div>
          </div>
          
          <ThemeBotton />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
