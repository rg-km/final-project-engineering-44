import React from "react";
import "./register.css";
import ImageRegister from "../../assets/register.png";
import Logo from "../../assets/logo.png";

const Register = () => {
  return (
    <div className="register">
      <div className="wrapper">
        <div className="left">
          <div className="logo">
            <img src={Logo} alt="" />
            <h3>Ruang Beasiswa</h3>
          </div>
          <div className="form">
            <h2>Register</h2>
            <form>
              <div className="form-group">
                <input type="email" placeholder="E-mail" />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Username" />
              </div>
              <div className="form-group">
                <input type="password" placeholder="Password" />
              </div>
              <div className="form-group">
                <button>Register</button>
              </div>
            </form>
            <span>
              Already have an account? <a href="/login">Sign In</a>
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
