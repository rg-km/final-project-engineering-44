import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./sidebarNews.css";

const SidebarNews = () => {
  return (
    <div className="sidebarNews">
      <Sidebar />
      <div className="content">News</div>
    </div>
  );
};

export default SidebarNews;
