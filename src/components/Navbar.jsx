import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Ensure this file exists

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Pet Adoption</div>
      <div className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/pets">Pet List</Link>
      </div>
    </nav>
  );
};

export default Navbar;








