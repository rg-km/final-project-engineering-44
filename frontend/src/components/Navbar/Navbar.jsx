import React from "react";
import "./navbar.css";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="link">
        <div className="logo">
          <img src={Logo} alt="" />
          <h3>Ruang Beasiswa</h3>
        </div>
      </Link>
      <div className="menu">
        <Link
          to="/auth/login"
          style={{ textDecoration: "none", color: "inherit" }}>
          <span className="sign-in">Sign In</span>
        </Link>
        <Link
          to="/auth/register"
          style={{ textDecoration: "none", color: "inherit" }}>
          <span className="sign-up">Sign Up</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
