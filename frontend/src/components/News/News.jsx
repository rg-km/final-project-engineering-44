import React, { useState, useEffect } from "react";
import "./news.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import axios from "axios";
import URL from "./config";

const News = () => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(URL)
        .then((res) => {
          setLoading(true);
          setContent(res.data.data.memes);
        })
        .catch((e) => setError(true))
        .finally(setLoading(false));
    };
    fetchData();
  }, []);

  return (
    <div className="news">
      <Swiper slidesPerView={4} spaceBetween={50}>
        {error && "Error"}
        {loading
          ? content.map((data) => (
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
            ))
          : "Loading please wait..."}
      </Swiper>
    </div>
  );
};

export default News;
