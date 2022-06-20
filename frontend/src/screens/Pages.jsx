import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import LandingPage from "../pages/LandingPage/LandingPage";
import Dashboard from "../pages/Dashboard/Dashboard";
import Scholarship from "../components/Scholarship/Scholarship";
import SidebarNews from "../components/SidebarNews/SidebarNews";
import Beasiswa from "../pages/Beasiswa/Beasiswa";
import ProfilPage from "../pages/ProfilPage/ProfilPage";
import AboutPage from "../pages/About/About";

const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" index element={<LandingPage />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/scholarship" element={<Scholarship />} />
        <Route path="/news" element={<SidebarNews />} />
        <Route path="/beasiswa" element={<Beasiswa />} />
        <Route path="/profil" element={<ProfilPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
};

export default Pages;
