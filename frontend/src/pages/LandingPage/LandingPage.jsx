// import React, { useState } from "react";
import ImageLandingPage from "../../assets/logoLanding.png";
import LogoLeft from "../../assets/logo-landing-left.png";
import LogoRight from "../../assets/logo-landing-right.png";
import LogoLPDP from "../../assets/logo-lpdp.png";
import LogoDjarum from "../../assets/logo-djarum-beasiswa.png";
import LogoRG from "../../assets/logo-ruang-guru.png";
import { BsSearch } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import "./landingPage.css";
import { Link } from "react-router-dom";
import TopCategory from "../../components/List/Top-Category";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";
import ListBeasiswa from "../../components/List/List-Beasiswa";
import News from "../../components/News/News";

const LandingPage = () => {
  const [user, setUser] = useState({
    name: "",
    image: "",
    isUser: false,
  });

  const handleSignIn = () => {
    setUser({
      name: "John",
      image: "https://i.pravatar.cc/",
      isUser: true,
    });
  };

  const handleSignOut = () => {
    setUser({
      isUser: false,
    });
  };

  return (
    <div className="landing">
      <div className="wrapper-up">
        <div>
          <img src={ImageLandingPage} alt="" className="img" />
        </div>
        <div className="wrapper-up-right">
          <div className="button">
            {user.isUser ? (
              <>
                <div className="profile">
                  <h3>Hi, {user.name}</h3>
                  <img src={user.image} alt="profile user" />
                </div>
                <Link to="/" className="link">
                  <button className="button-SignOut" onClick={handleSignOut}>
                    Sign Out
                  </button>
                </Link>
              </>
            ) : (
              <>
                <button className="button-SignIn" onClick={handleSignIn}>
                  Sign In
                </button>
                {/* <Link to="/auth/login" className="link">
                  <button className="button-SignIn" onClick={handleSignIn}>
                    Sign In
                  </button>
                </Link> */}
                <Link to="/auth/register" className="link">
                  <button className="button-SignUp">Sign Up</button>
                </Link>
              </>
            )}
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
                <AiOutlineUser />
                <strong>1,000</strong>user dengan tingkat keberhasilan{" "}
                <strong>90%</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="list-konten">
        <div>
          <h1>List Beasiswa</h1>
          <ListBeasiswa />
        </div>
        <div>
          <h1>Top News</h1>
          <News />
        </div>
        <div className="kategori-beasiswa">
          <h1>Top Category</h1>
          <TopCategory />
        </div>
      </div>
      <div className="powered">
        <h4>Powered by</h4>
        <div id="logo-powered">
          <img src={LogoLPDP} alt="" className="img-logo-lpdp" />
          <img src={LogoDjarum} alt="" className="img-logo-djarum" />
          <img src={LogoRG} alt="" className="img-logo-rg" />
        </div>
      </div>
      <div className="logo-bawah">
        <img src={LogoLeft} alt="" className="img-left" />
        <img src={LogoRight} alt="" className="img-right" />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
