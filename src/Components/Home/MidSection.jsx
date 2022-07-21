import React from "react";
import "./MidSection.css";

const MidSection = () => {
  return (
    <div>
      <div id="wrapper">
        <img
          className="first-image"
          src="https://www.exchange4media.com/news-photo/97008-AliaBhattandRanbirKapoorforFlipkartFashion.jpg"
          alt="ad"
        ></img>
        <img
          className="second-image"
          src="https://media.fashionnetwork.com/m/ee7f/eece/0027/1b58/2307/ac30/60ef/ee34/b9e0/0d0e/0d0e.jpeg"
          alt="ad"
        ></img>
      </div>

      <img
        src="https://digitalready.co/sites/all/themes/bartik/images/flipkart-sale-fb-ad.jpg"
        alt="ad"
        id="third-image"
      ></img>
    </div>
  );
};

export default MidSection;
