import React from "react";
import "./navbar.css";
import Logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import userStore from "../../store/userStore";
import axios from "axios";

const Navbar = () => {
  const navigate = useNavigate();
  const user = userStore((state) => state.user);

  const handleClick = async () => {
    const res = await axios.post("/logout");
    if (res.status === 200) {
      window.location.reload();
      navigate("/");
    }
  };
  return (
    <div className="navbar">
      <Link to="/" className="link">
        <div className="logo">
          <img src={Logo} alt="" />
          <h3>Ruang Beasiswa</h3>
        </div>
      </Link>
      <div className="menu">
        {user.username ? (
          <>
            <span>Hi, {user.username}</span>
            <button className="navbar-sign-out" onClick={handleClick}>
              Sign Out
            </button>
          </>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
