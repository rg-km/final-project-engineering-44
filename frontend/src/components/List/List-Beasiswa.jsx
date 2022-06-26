import "./list-beasiswa.css";
import BeasiswaPPG from "../../assets/beasiswa-PPG.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import scholarStore from "../../store/scholarStore";

const ListBeasiswa = () => {
  const beasiswa = scholarStore((state) => state.beasiswa);

  return (
    <div className="list-beasiswa">
      <Swiper slidesPerView={4} spaceBetween={50}>
        {/* {beasiswa.map((data, index) => (
          <SwiperSlide key={index}>
            <div className="beasiswa">
              <div className="image">
                <img src={data?.image || BeasiswaPPG} alt={data.name} />
              </div>
              <div className="text">
                <a href={`/scholarship/single/${data.id}`}>Read More</a>
              </div>
            </div>
          </SwiperSlide>
        ))} */}
      </Swiper>
    </div>
  );
};
export default ListBeasiswa;
