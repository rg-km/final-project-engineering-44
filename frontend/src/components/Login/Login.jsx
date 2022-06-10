import React from "react";
import "./login.css";
import Logo from "../../assets/logo.png";
import ImageLogin from "../../assets/login.png";

const Login = () => {
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
            <form>
              <div className="form-group">
                <input type="email" placeholder="E-mail" />
              </div>
              <div className="form-group">
                <input type="password" placeholder="Password" />
              </div>
              <div className="form-group">
                <button>Login</button>
              </div>
            </form>
            <span>
              Doesn't have an account? <a href="/login">Sign In</a>
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
