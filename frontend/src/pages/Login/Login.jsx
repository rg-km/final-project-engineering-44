import React, { useState } from "react";
import "./login.css";
import Logo from "../../assets/logo.png";
import ImageLogin from "../../assets/login.png";
import { Link } from "react-router-dom";
import { LoginForm } from "../../components/Form/Form";
import axios from "axios";

const Login = () => {
  const [data, setData] = useState({
    email: null,
    password: null,
  });

  const [isSubmit, setIsSubmit] = useState(false);
  const [failedLogin, setFailedLogin] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setData({ ...data, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      email: data.email,
      password: data.password,
    };
    const res = await axios.post("http://localhost:5000/auth/sign-in", user);
    console.log(res.data.code);
    if (res.status === 200) {
      setIsSubmit(true);
    }
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
                color: "#1f4690",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}>
              <img src={Logo} alt="" />
              <h3>Ruang Beasiswa</h3>
            </Link>
          </div>
          {isSubmit ? "Login Success" : ""}
          {failedLogin ? "Wrong Credentials" : ""}
          <LoginForm handleChange={handleChange} handleSubmit={handleSubmit} />
        </div>
        <div className="right">
          <img src={ImageLogin} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
