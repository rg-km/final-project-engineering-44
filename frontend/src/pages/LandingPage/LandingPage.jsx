// import React, { useState } from "react";
import ImageLandingPage from "../../assets/logoLanding.png";
import { BsSearch } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import "./landingPage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing">
      <div className="wrapper-up">
        <div>
          <img src={ImageLandingPage} alt="" className="img" />
        </div>
        <div className="wrapper-up-right">
          <div className="button">
            <Link to="/auth/login" className="link">
              <button className="button-SigIn">Sign In</button>
            </Link>
            <Link to="/" className="link">
              <button className="button-SigOut">Sign Out</button>
            </Link>
          </div>
          <div className="hero">
            <h1 className="judul">Ruang Beasiswa</h1>
            <p className="tagline">
              Temukan 1001 Beasiswa dalam satu ruang pintar
            </p>
            <form>
              <div className="form-input">
                <input
                  className="input"
                  type="text"
                  placeholder="Search"
                  name="search"
                />
                <button
                  className="button-search"
                  type="submit"
                  aria-label="Submit Button">
                  {" "}
                  <BsSearch className="icon" />{" "}
                </button>
              </div>
            </form>
            <div className="tag-line-bottom">
              <p>
                <BsPerson />
                <strong>1,000</strong>user dengan tingkat keberhasilan{" "}
                <strong>90%</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* fit, biar ga penuh kamu coding disini, list nya pisahin di component aja biar bisa di import */}
      <div className="list-konten">
        <div>
          <h1>List Beasiswa</h1>
          {/* ini list beasiswa buat folder baru aja di component namanya list nanti import disini datanya sementara pake dummy dlu aja nanti di buatin store zustand nya */}
        </div>
        <div>
          <h1>Top News</h1>
          {/* sama list ini juga buat di component */}
        </div>
        <div className="kategori-beasiswa">
          {/* ini juga, kalo ga buat dlu aja nanti aku yang ubah */}
          <h1>Top Category</h1>
          <div className="pilihan-beasiswa">
            <div>
              <p>
                <a href="/">Beasiswa Diploma</a>
              </p>
              <p>
                <a href="/">Beasiswa Sarjana</a>
              </p>
              <p>
                <a href="/">Beasiswa Master</a>
              </p>
              <p>
                <a href="/">Beasiswa Doktor</a>
              </p>
            </div>
            <div>
              <p>
                <a href="/">Beasiswa Pelajar SD</a>
              </p>
              <p>
                <a href="/">Beasiswa Pelajar SMP</a>
              </p>
              <p>
                <a href="/">Beasiswa Pelajar SMA</a>
              </p>
            </div>
            <div>
              <p>
                <a href="/">Beasiswa Dalam Negeri</a>
              </p>
              <p>
                <a href="/">Beasiswa Luar Negeri</a>
              </p>
              <p>
                <a href="/">More</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
