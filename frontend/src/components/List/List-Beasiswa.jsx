import "./list-beasiswa.css";
import BeasiswaPPG from "../../assets/beasiswa-PPG.jpeg";
import BeasiswaBI from "../../assets/beasiswa-BI.png";
import BeasiswaKaltim from "../../assets/beasiswa-kaltim.png";
import BeasiswaKarawang from "../../assets/beasiswa-karawang.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ListBeasiswa = () => {
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
      <Swiper slidesPerView={4} spaceBetween={50}>
        {datas.map((data) => (
          <SwiperSlide key={data.id}>
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
