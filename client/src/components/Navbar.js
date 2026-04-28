import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ toggleMenu, isMenuOpen }) => (
  <div className="nevbar" id="nevbar">
    <div className="logo">
      <Link to="/#home" id="logo">
        <h1><span>Food</span> भोक</h1>
      </Link>
    </div>
    <div 
      className={`menu ${isMenuOpen ? "open" : ""}`} 
      id="menu"
    >
      <ul>
        <li><Link to="/#home">Home</Link></li>
        <li><Link to="/#whywedo">Why We Do</Link></li>
        <li><Link to="/#service">Service</Link></li>
        <li><Link to="/#contact">Contact Us</Link></li>
        <li><Link to="/#about">About Us</Link></li>
        <li><Link to="/#donate">Donate Here</Link></li>
      </ul>
    </div>
    <div className="menuicon">
      <i
        id="menuicon"
        onClick={toggleMenu}
        className="fas fa-chevron-circle-down"
      >
        <span>MENU</span>
      </i>
    </div>
  </div>
);

export default Navbar;
