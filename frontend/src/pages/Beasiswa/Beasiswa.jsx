import React from "react";
import "./beasiswa.css";
import Logo from "../../assets/logo.png";
import beasiswaPPG from "../../assets/beasiswa-PPG.jpeg";

const Beasiswa = () => {
  return (
    <div className="wrapper-beasiswa">
      <div className="footer-bea">
        <div className="logo-bea">
          <h1><img src={Logo} alt=""/> Ruang Beasiswa</h1>
          <p className="">Temukan 1001 Beasiswa dalam satu ruang pintar</p>
        </div>
        <div className="user-bea">
          <p>Hi, John</p> 
          <img src="https://i.pravatar.cc/" alt="" className="foto-user"/>
          <button>Sign Out</button>
        </div>
      </div>
      <div className="wrapper-bea">
        <h1>Beasiswa Daerah</h1>
        <div className="konten-bea">
          <img src={beasiswaPPG} alt="" />
          <div className="desc-bea">
            <div className="judul-bea">
              <h3>Beasiswa Kemdikbud</h3>
              <p>17/06/22</p>
            </div>
            <p >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <button>Daftar</button>
          </div>
        </div>
        <div className="konten-bea">
          <img src={beasiswaPPG} alt="" />
          <div className="desc-bea">
            <div className="judul-bea">
              <h3>Beasiswa Kemdikbud</h3>
              <p>17/06/22</p>
            </div>
            <p >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <button>Daftar</button>
          </div>
        </div>
        <div className="konten-bea">
          <img src={beasiswaPPG} alt="" />
          <div className="desc-bea">
            <div className="judul-bea">
              <h3>Beasiswa Kemdikbud</h3>
              <p>17/06/22</p>
            </div>
            <p >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <button>Daftar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beasiswa;

export const Daerah = () => {};
export const Provinsi = () => {};
export const Nasional = () => {};
