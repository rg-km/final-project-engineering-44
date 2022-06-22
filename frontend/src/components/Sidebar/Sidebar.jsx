import React from "react";
import "./sidebar.css";
import logo from "../../assets/logo_white.png";
import { MdOutlineDashboard } from "react-icons/md";
import { FiBookOpen } from "react-icons/fi";
import { BsNewspaper, BsThreeDotsVertical } from "react-icons/bs";
import { FaSignOutAlt } from "react-icons/fa";

import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="menu">
        <ul>
          <NavLink
            to="/dashboard"
            activeClassName="active"
            style={{ textDecoration: "none", color: "inherit" }}>
            <li>
              <MdOutlineDashboard className="icon" />
              <h3>Dashboard</h3>
            </li>
          </NavLink>
          <NavLink
            to="/scholarship"
            activeClassName="active"
            style={{ textDecoration: "none", color: "inherit" }}>
            <li>
              <FiBookOpen className="icon" />
              <h3>Scholarship</h3>
            </li>
          </NavLink>
          <NavLink
            to="/news"
            activeClassName="active"
            style={{ textDecoration: "none", color: "inherit" }}>
            <li>
              <BsNewspaper className="icon" />
              <h3>News</h3>
            </li>
          </NavLink>
        </ul>
      </div>
      <div className="setting">
        <div className="profile-setting">
          <img src="https://github.com/dap23.png" alt="" />
          <div className="profile-info">
            <span>Muhammad Daffa</span>
            <p>admin</p>
          </div>
          <BsThreeDotsVertical className="icon-setting" />
        </div>
        <div className="sign-out">
          <button>
            <FaSignOutAlt />
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
