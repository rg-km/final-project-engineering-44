import React from "react";
import { useParams } from "react-router-dom";
import "./single.css";
import scholarStore from "../../store/scholarStore";
import Navbar from "../../components/Navbar/Navbar";
import BeasiswaImage from "../../assets/beasiswa-PPG.jpeg";
import { GoLocation } from "react-icons/go";
import { IoSchoolOutline } from "react-icons/io5";
const Single = () => {
  const { id } = useParams();
  const beasiswa = scholarStore((state) => state.beasiswa);

  const data = beasiswa[id - 1];

  return (
    <div className="single">
      <Navbar />
      <div className="content">
        <div className="image">
          <img src={BeasiswaImage} alt="" />
        </div>
        <div className="text">
          <h1>{data.name}</h1>
          <p>{data.description}</p>
        </div>
        <div className="bottom">
          <div className="location">
            <GoLocation className="icon" />
            <p>
              <b>{data.kota}</b>
            </p>
          </div>
          <div className="jenjang">
            <IoSchoolOutline className="icon" />
            <p>
              <b>{data.jenjang}</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
