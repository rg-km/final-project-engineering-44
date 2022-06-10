import React, { useState } from "react";
import "./login.css";
import Logo from "../../assets/logo.png";
import ImageLogin from "../../assets/login.png";
import { HiOutlineMail } from "react-icons/hi";
import { BsKey } from "react-icons/bs";
import { useEffect } from "react";

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
            <img src={Logo} alt="logo" />
            <h3>Ruang Beasiswa</h3>
          </div>
          <div className="form">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="E-mail"
                  name="email"
                  onChange={handleChange}
                />
                <HiOutlineMail className="icon" />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />
                <BsKey className="icon" />
              </div>
              <div className="form-group">
                <button>Login</button>
              </div>
            </form>
            <span>
              Doesn't have an account? <a href="/auth/register">Sign Up</a>
            </span>
          </div>
        </div>
        <div className="right">
          <img src={ImageLogin} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
