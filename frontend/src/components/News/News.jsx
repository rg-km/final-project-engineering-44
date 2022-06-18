import React, { useState, useEffect } from "react";
import "./news.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import axios from "axios";
import URL from "./config";

const News = () => {
  const [content, setContent] = useState([]);
  const fetchData = async () => {
    const res = await axios.get(URL);
    console.log(res.data.data.memes);
    setContent(res.data.data.memes);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="news">
      <Swiper slidesPerView={4} spaceBetween={50}>
        {content.map((data) => (
          <SwiperSlide key={data.id}>
            <div className="new">
              <div className="image">
                <img src={data.url} alt={data.title} />
              </div>
              <div className="text">
                <h2>{data.name}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default News;
