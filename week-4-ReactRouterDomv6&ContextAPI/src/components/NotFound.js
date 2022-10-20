import React from "react";
import Navbar from "../containers/Navbar";
import './NotFound.css';

function NotFound() {
  return (
    <div className="NotFound">
      <Navbar/>
        <h1>404 Not Found</h1>
    </div>
  );
}
export default NotFound;