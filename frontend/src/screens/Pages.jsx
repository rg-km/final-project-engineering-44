import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import LandingPage from "../pages/LandingPage/LandingPage";
import Dashboard from "../pages/Dashboard/Dashboard";
import Beasiswa from "../pages/Beasiswa/Beasiswa";
import ProfilPage from "../pages/ProfilPage/ProfilPage";
import AboutPage from "../pages/About/About";

const Pages = () => {
  return (
    <div>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/beasiswa/kota=:kota" element={<Beasiswa />} />
        <Route path="/user/:id/profile" element={<ProfilPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
};

export default Pages;

// [
//   {
//     path: "/admin",
//     element: user ? <Dashboard /> : <Navigate to="/login" />,
//     children: [{ path: "/scholarship", element: <Beasiswa /> }],
//   },
//   {
//     path: "/",
//     element: <LandingPage />,
//     children: [
//       { path: "/about", element: <AboutPage /> },
//       { path: "/login", element: <Login /> },
//       { path: "/register", element: <Register /> },
//     ],
//   },
// ];
