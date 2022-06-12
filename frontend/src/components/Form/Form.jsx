import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { BsKey } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import "./form.css";

const LoginForm = ({ handleChange, handleSubmit }) => {
  return (
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
  );
};

const RegisterForm = ({ handleChange, handleSubmit, data }) => {
  const [page, setPage] = useState(0);
  const title = ["Register", "Personal Info"];
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
  );
};

export { LoginForm, RegisterForm };
