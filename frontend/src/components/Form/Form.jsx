import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { BsKey } from "react-icons/bs";
import "./form.css";

const Form = ({ handleChange, handleSubmit }) => {
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

export default Form;
