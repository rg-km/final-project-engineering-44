import React from "react";
import { useParams } from "react-router-dom";
import "./single.css";

const Single = () => {
  const { id } = useParams();
  return <div className="single">Single</div>;
};

export default Single;
