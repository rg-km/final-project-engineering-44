import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import LandingPage from "../components/LandingPage/LandingPage";

const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" index element={<LandingPage />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default Pages;
