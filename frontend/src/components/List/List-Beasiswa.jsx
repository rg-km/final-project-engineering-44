import "./list-beasiswa.css";
import BeasiswaPPG from "../../assets/beasiswa-PPG.jpeg";
import BeasiswaBI from "../../assets/beasiswa-BI.png";
import BeasiswaKaltim from "../../assets/beasiswa-kaltim.png";
import BeasiswaKarawang from "../../assets/beasiswa-karawang.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import scholarStore from "../../store/scholarStore";
import axios from "axios";
import { useEffect } from "react";

const ListBeasiswa = () => {
  const beasiswa = scholarStore((state) => state.beasiswa);
  const datas = [
    {
      id: 1,
      image: BeasiswaPPG,
      name: "Beasiswa PPG",
    },
    {
      id: 2,
      image: BeasiswaBI,
      name: "Beasiswa BI",
    },
    {
      id: 3,
      image: BeasiswaKaltim,
      name: "Beasiswa Kaltim",
    },
    {
      id: 4,
      image: BeasiswaKarawang,
      name: "Beasiswa Karawang",
    },
    {
      id: 5,
      image: BeasiswaKarawang,
      name: "Beasiswa Karawang",
    },
  ];

  return (
    <div className="list-beasiswa">
      <Swiper slidesPerView={2} spaceBetween={50}>
        {beasiswa.map((data, index) => (
          <SwiperSlide key={index}>
            <div className="beasiswa">
              <div className="image">
                <img src={BeasiswaPPG} alt={data.name} />
              </div>
              <div className="text">
                <a href={`/scholarship/single/${data.id}`}>Read More</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default ListBeasiswa;
