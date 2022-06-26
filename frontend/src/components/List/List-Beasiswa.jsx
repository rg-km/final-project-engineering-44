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
  console.log(beasiswa);

  return (
    <div className="list-beasiswa">
      <Swiper slidesPerView={4} spaceBetween={50}>
        {beasiswa.map((data, index) => (
          <SwiperSlide key={index}>
            <div className="beasiswa">
              <div className="image">
                <img src={data.image} alt={data.name} />
              </div>
              <div className="text">
                <a href="/">Read More</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default ListBeasiswa;
