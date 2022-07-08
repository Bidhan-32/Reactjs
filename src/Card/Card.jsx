import React from "react";
import "./Card.css";

const Card = ({image, heading, detail, color}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={image} alt="" />
      <div className="bidhan">
      <span>{heading}</span>
      <span>{detail}</span>
      <button className="c-button">LEARN MORE  </button>
      </div>
    </div>
  );
};

export default Card