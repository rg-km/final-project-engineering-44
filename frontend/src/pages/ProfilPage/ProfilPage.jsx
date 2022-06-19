import "./profilPage.css";
import Logo from "../../assets/logo.png";
import { FcBusinesswoman } from "react-icons/fc";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineFileText } from "react-icons/ai";
import { BsKeyFill } from "react-icons/bs";
import { VscSignIn } from "react-icons/vsc";
import Footer from "../../components/Footer/Footer";

const ProfilPage = () => {
    return (
        <div className="wrapper-profilPage">
            <div className="header-profilPage">
                <div className="header-kiri-profilPage">
                    <h1><img src={Logo} alt="" className="logo-RB"/> Ruang Beasiswa</h1>
                    <p className="tagLine">Temukan 1001 Beasiswa dalam satu ruang pintar</p>
                </div>
                <div className="username">
                   <p>Hi, John</p> 
                    <FcBusinesswoman />
                </div>
            </div>

            <div className="wrapper-isi-profile">
                <h1>Profile</h1>
                <div className="pemisah-profile">
                    
                    <div className="pemisah-user">
                        <div className="user">
                            <FcBusinesswoman />
                            <div>
                                <p>John Doe</p>
                                <p>Perguruan Tinggi <br /> Yogyakarta</p>
                            </div>
                        </div>
                        <div className="pengatran-user">
                            <p><AiOutlineUser />Profile</p>
                            <p><AiOutlineFileText />Grades</p>
                            <p><BsKeyFill />Change Password</p>
                            <p><VscSignIn />Sign Out</p>
                        </div>
                    </div>
                    <div className="isi-profil">
                        <div>
                            <p>Nama</p>
                            <p className="keterangan-isi-profil">John Doe</p>
                        </div>
                        <div>
                            <p>Username</p>
                            <p className="keterangan-isi-profil">johndoe99</p>
                        </div>
                        <div>
                            <p>Email</p>
                            <p className="keterangan-isi-profil">johndoe@gmail.com</p>
                        </div>
                        <div>
                            <p>Jenjang</p>
                            <p className="keterangan-isi-profil">Perguruan Tinggi</p>
                        </div>
                        <div>
                            <p>Domisili</p>
                            <p className="keterangan-isi-profil">Yogyakarta</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <Footer />
            </div>
        </div>
    );
};

export default ProfilPage;