import "./profilPage.css";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import userStore from "../../store/userStore";
import { AiOutlineUser } from "react-icons/ai";
import { BsKey } from "react-icons/bs";
import { GoBook } from "react-icons/go";
import { useState } from "react";
import axios from "axios";

const ProfilPage = () => {
  const user = userStore((state) => state.user);

  const [data, setData] = useState({
    email: user?.email,
    username: user?.username,
    password: user?.password,
    jenjang: user?.jenjang || "Perguruan Tinggi",
    kota: user?.kota || "Bekasi",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({ ...data, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      email: data.email,
      username: data.username,
      password: data.password,
      jenjang: data.jenjang,
      kota: data.kota,
    };
    try {
      const res = await axios({
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        url: "/user/",
        withCredentials: true,
        data: user,
      });
      console.log(res);
    } catch (error) {}
  };

  return (
    <div className="Profile-Page">
      <Navbar />
      <div className="profile">
        <div className="left">
          <div className="box">
            <h1>
              Nama : <strong>{user?.username}</strong>
            </h1>
            <p>{user?.role}</p>
          </div>
          <div className="box">
            <ul>
              <li>
                <AiOutlineUser className="icon" />
                <span>Profile</span>
              </li>
              <li>
                <BsKey className="icon" />
                <span>Change Password</span>
              </li>
              <li>
                <GoBook className="icon" />
                <span>My Scholarship</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="right">
          <h1>Profile</h1>
          <div className="box-right">
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                value={data.username}
                onChange={handleChange}
                name="username"
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={data.email}
                onChange={handleChange}
                name="email"
              />
            </div>
            <div className="form-group">
              <label>Jenjang</label>
              <input
                type="text"
                value={data.jenjang}
                onChange={handleChange}
                name="jenjang"
              />
            </div>
            <div className="form-group">
              <label>Kota</label>
              <input
                type="text"
                value={data.kota}
                onChange={handleChange}
                name="kota"
              />
            </div>
            <button onClick={handleSubmit}>Update</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilPage;
