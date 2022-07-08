import React from "react";
import "./Card2.css";

const Card2 = ({image, heading, detail, color}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={image} alt="" />
      <div className="bidhan">
      <span>{heading}</span>
      <span>{detail}</span>
      <button className="c-button">Connect Now</button>
      </div>
    </div>
  );
};

export default Card2