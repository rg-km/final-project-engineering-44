import "./list-beasiswa.css";
import BeasiswaPPG from "../../assets/beasiswa-PPG.jpeg";
import BeasiswaBI from "../../assets/beasiswa-BI.png";
import BeasiswaKaltim from "../../assets/beasiswa-kaltim.png";
import BeasiswaKarawang from "../../assets/beasiswa-karawang.png";

const ListBeasiswa = () => {
    return (
        <div className="list-beasiswa">
            <button className="button-list-beasiswa">
                <img src={BeasiswaPPG} alt="" className="beasiswa-ppg" />
                <br />
                Read More...
                <br />
                <br />
            </button>
            <button className="button-list-beasiswa">
                <img src={BeasiswaBI} alt="" className="beasiswa-ppg" />
                <br />
                Read More...
                <br />
                <br />
            </button>
            <button className="button-list-beasiswa">
                <img src={BeasiswaKaltim} alt="" className="beasiswa-ppg" />
                <br />
                Read More...
                <br />
                <br />
            </button>
            <button className="button-list-beasiswa">
                <img src={BeasiswaKarawang} alt="" className="beasiswa-ppg" />
                <br />
                Read More...
                <br />
                <br />
            </button>
        </div>
    )
}
export default ListBeasiswa;