import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import Logo from "../../assets/logo.png";
import ImageLogin from "../../assets/login.png";
import { Link } from "react-router-dom";
import { LoginForm } from "../../components/Form/Form";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const initialRef = useRef(null);

  const [data, setData] = useState({
    email: null,
    password: null,
  });

  const [message, setMessage] = useState("");

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
    await axios({
      method: "post",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      url: "/login",
      data: user,
      withCredentials: true,
    })
      .then((res) => {
        if (res.data.code === 200) {
          setMessage(res.data.message);
          navigate("/");
        }
      })
      .catch((e) => {
        console.log(e.response.data);
        setMessage(e.response.data.message);
      });

    initialRef.current.value = "";
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
          {message}
          <LoginForm
            initialRef={initialRef}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
        <div className="right">
          <img src={ImageLogin} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
