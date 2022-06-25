import React from "react";
import "./beasiswa.css";
import beasiswaPPG from "../../assets/beasiswa-PPG.jpeg";
import Navbar from "../../components/Navbar/Navbar";

const Beasiswa = () => {
  return (
    <div className="wrapper-beasiswa">
      <Navbar />
      <div className="wrapper-bea">
        <h1>Beasiswa Daerah</h1>
        <div className="konten-bea">
          <img src={beasiswaPPG} alt="" />
          <div className="desc-bea">
            <div className="judul-bea">
              <h3>Beasiswa Kemdikbud</h3>
              <p>17/06/22</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
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
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
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
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
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
