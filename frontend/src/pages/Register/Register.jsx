import React, { useState } from "react";
import "./register.css";
import ImageRegister from "../../assets/register.png";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { RegisterForm } from "../../components/Form/Form";

const Register = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    jenjang: "",
    domisili: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      username: data.username,
      email: data.email,
      password: data.password,
      jenjang: data.jenjang,
      domisili: data.domisili,
    };
    console.log(user);
  };

  return (
    <div className="register">
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
          <RegisterForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            data={data}
          />
        </div>
        <div className="right">
          <img src={ImageRegister} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Register;
