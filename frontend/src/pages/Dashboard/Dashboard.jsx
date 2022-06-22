import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./dashboard.css";
import { FiFilter } from "react-icons/fi";
import Table from "../../components/Table/Table";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <div className="top">
          <div className="dashboard-header">
            <h1>Hello, Daffa</h1>
            <p>Let’s see what scholarship you have been added today!</p>
          </div>
          <div className="search-and-button">
            <input
              className="search"
              type="text"
              placeholder="Search..."
              name="Search"
            />
            <button className="button-filter" type="filter" aria-label="Filter">
              <FiFilter />
              Filter
            </button>
          </div>
        </div>
        <div className="bottom">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
