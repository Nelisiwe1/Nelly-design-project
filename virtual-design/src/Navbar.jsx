import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import "./index.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
    <div className="Navbar">
      <span className="nav-logo">TSIN</span>
      <div className={`nav-items ${isOpen && "open"}`}>
      <ul>
        <li>
        <NavLink to="/" activeclassname="new-active-link" >
  Home
</NavLink>


        </li>
        <li>
          <NavLink to="/about" activeclassname="active-link">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/service" activeclassname="active-link">
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" activeclassname="active-link">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeclassname="active-link">
            Contact
          </NavLink>
        </li>
        </ul>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
    </nav>
  );
};

export default Navbar;