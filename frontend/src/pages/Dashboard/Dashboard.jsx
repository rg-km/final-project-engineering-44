import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">Dashboard</div>
    </div>
  );
};

export default Dashboard;
