import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <span className="brand-icon">⬢</span> Tech & Beyond
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/about" className="nav-link">
          About Us
        </Link>
        <Link to="/admin-login" className="nav-link admin-link">
          Admin
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
