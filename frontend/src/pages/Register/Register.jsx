import React, { useState } from "react";
import "./register.css";
import ImageRegister from "../../assets/register.png";
import Logo from "../../assets/logo.png";
import { HiOutlineMail } from "react-icons/hi";
import { BsKey } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

const Register = () => {
  const [page, setPage] = useState(0);
  const title = ["Register", "Personal Info"];
  const [data, setData] = useState({
    username: null,
    email: null,
    password: null,
    jenjang: null,
    domisili: null,
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

  const slideOne = () => {
    return (
      <>
        <div className="form-group">
          <input
            type="email"
            placeholder="E-mail"
            name="email"
            onChange={handleChange}
            value={data.email}
          />
          <HiOutlineMail className="icon" />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleChange}
            value={data.username}
          />
          <AiOutlineUser className="icon" />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={data.password}
          />
          <BsKey className="icon" />
        </div>
      </>
    );
  };

  const slideTwo = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Jenjang Pendidikan"
            name="jenjang"
            onChange={handleChange}
            value={data.jenjang}
          />
          <HiOutlineMail className="icon" />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Domisili"
            name="domisili"
            onChange={handleChange}
            value={data.domisili}
          />
          <AiOutlineUser className="icon" />
        </div>
        <div className="button">
          <div className="form-group">
            <button
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}>
              Prev
            </button>
          </div>
          <div className="form-group">
            <button>Register</button>
          </div>
        </div>
      </form>
    );
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
          <div className="form">
            <h2>{title[page]}</h2>
            {page === 0 ? slideOne() : slideTwo()}
            {page === 0 ? (
              <div className="form-group">
                <button
                  disabled={page === 1}
                  onClick={() => setPage((currPage) => currPage + 1)}>
                  Next
                </button>
              </div>
            ) : (
              ""
            )}

            <span>
              Already have an account? <a href="/auth/login">Sign In</a>
            </span>
          </div>
        </div>
        <div className="right">
          <img src={ImageRegister} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Register;
