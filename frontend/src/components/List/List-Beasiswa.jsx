import "./list-beasiswa.css";
import BeasiswaPPG from "../../assets/beasiswa-PPG.jpeg";
import BeasiswaBI from "../../assets/beasiswa-BI.png";
import BeasiswaKaltim from "../../assets/beasiswa-kaltim.png";
import BeasiswaKarawang from "../../assets/beasiswa-karawang.png";
import {Swiper, SwiperSlide} from "swiper/react";

const ListBeasiswa = () => {
    const data = [
        {
            id: 1,
            image: BeasiswaPPG,
            name: "Beasiswa PPG"
        },
        {
            id: 2,
            image: BeasiswaBI,
            name: "Beasiswa BI"
        },
        {
            id: 3,
            image: BeasiswaKaltim,
            name: "Beasiswa Kaltim"
        },
        {
            id: 4,
            image: BeasiswaKarawang,
            name: "Beasiswa Karawang"
        },
    ]
    return (
        <div className="list-beasiswa">
            <Swiper
                slidesPerView={4}
                spaceBetween={10}
            >
                {data.map(d=>(
                    <SwiperSlide key={d.id}>
                        <div className="beasiswa">
                            <div className="beasiswa-content">
                                <img src={d.image} alt={d.name}/>
                                <div className="text">
                                    <span>{d.name}</span>
                                    <button>Read More</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    )
}
export default ListBeasiswa;