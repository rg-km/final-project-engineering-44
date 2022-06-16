import React, { useState, useEffect } from "react";
import "./news.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import axios from "axios";
import URL from "./config";

const News = () => {
  const [berita, setBerita] = useState([]);
  const fetchData = async () => {
    const res = await axios.get(URL);
    setBerita(res.data.articles);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="news">
      <Swiper slidesPerView={4} spaceBetween={50}>
        {berita.map((data) => (
          <SwiperSlide key={data.id}>
            <div className="new">
              <div className="image">
                <img src={data.urlToImage} alt={data.title} />
              </div>
              <div className="text">
                <h2>{data.title}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default News;
