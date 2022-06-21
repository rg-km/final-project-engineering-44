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
<<<<<<< HEAD
import IndexAdmin from "../pages/Index/IndexAdmin";
=======
import AboutPage from "../pages/About/About";
>>>>>>> 5a4b42f4cb719174021ed001a0a4e46e0ad85801

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
        <Route path="/beasiswa/kota=:kota" element={<Beasiswa />} />
        <Route path="/profil" element={<ProfilPage />} />
<<<<<<< HEAD
        <Route path="/index-admin" element={<IndexAdmin />} />
=======
        <Route path="/about" element={<AboutPage />} />
>>>>>>> 5a4b42f4cb719174021ed001a0a4e46e0ad85801
      </Routes>
    </div>
  );
};

export default Pages;
