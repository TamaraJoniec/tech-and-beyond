import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const handleConnectWallet = () => {
    alert("Wallet connection would happen here in a real Web3 app");
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <span className="brand-icon">⬢</span> Tech & Beyond
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/blog" className="nav-link">
          Blog
        </Link>
        <Link to="/about" className="nav-link">
          About Us
        </Link>
        <button className="connect-wallet-btn" onClick={handleConnectWallet}>
          Connect Wallet
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
