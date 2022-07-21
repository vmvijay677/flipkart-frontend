import React from "react";
import "./MidSlide.css";
import Slide from "./Slide";

const MidSlide = ({ products, title, timer }) => {
  return (
    <div className="midslide-component">
      <div className="left-component">
        <Slide products={products} title={title} timer={timer} />
      </div>

      <div className="right-component">
        <img
          src="https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70"
          alt="ad"
        ></img>
      </div>
    </div>
  );
};

export default MidSlide;
