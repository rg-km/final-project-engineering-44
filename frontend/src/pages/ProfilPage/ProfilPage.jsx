import "./profilPage.css";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import userStore from "../../store/userStore";
import { AiOutlineUser } from "react-icons/ai";
import { BsKey } from "react-icons/bs";
import { GoBook } from "react-icons/go";

const ProfilPage = () => {
  const user = userStore((state) => state.user);
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
              <input type="text" value={user?.username} />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" value={user?.email} />
            </div>
            <div className="form-group">
              <label>Jenjang</label>
              <input type="text" value={user?.jenjang || "Perguruan Tinggi"} />
            </div>
            <div className="form-group">
              <label>Kota</label>
              <input type="text" value={user?.kota || "Semarang"} />
            </div>
            <button>Update</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilPage;
