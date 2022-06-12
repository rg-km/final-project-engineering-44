import React, { useState } from "react";
import "./login.css";
import Logo from "../../assets/logo.png";
import ImageLogin from "../../assets/login.png";
import { HiOutlineMail } from "react-icons/hi";
import { BsKey } from "react-icons/bs";
import { Link } from "react-router-dom";
import Form from "../../components/Form/Form";

const Login = () => {
  const [data, setData] = useState({
    email: null,
    password: null,
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({ ...data, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: data.email,
      password: data.password,
    };
    console.log(user);
    setData({ ...data, [e.target.name]: null });
  };

  return (
    <div className="login">
      <div className="wrapper">
        <div className="left">
          <div className="logo">
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}>
              <img src={Logo} alt="" />
              <h3>Ruang Beasiswa</h3>
            </Link>
          </div>
          <Form handleChange={handleChange} handleSubmit={handleSubmit} />
        </div>
        <div className="right">
          <img src={ImageLogin} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
