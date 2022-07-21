import React from "react";
import "./Slide.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Countdown from "react-countdown";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Slide = ({ products, title, timer }) => {
  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <span>
        {hours} : {minutes} : {seconds} Left
      </span>
    );
  };

  return (
    <div className="slide-component">
      <div className="slide-deal">
        <p className="deal-text">{title}</p>
        {timer === true ? (
          <div className="slide-timer">
            <img
              src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg"
              className="timer-image"
              alt="time clock"
            />
            &nbsp; &nbsp;
            <Countdown date={Date.now() + 5.04e7} renderer={renderer} />
          </div>
        ) : (
          ""
        )}
        <Button id="viewall-button" variant="contained">
          View All
        </Button>
      </div>
      <Divider />

      <Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        centerMode={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={10000}
        keyBoardControl={true}
        showDots={false}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {products.map((product) => (
          <Link
            to={`/product/${product.id}`}
            style={{ textDecoration: "none" }}
          >
            <div style={{ textAlign: "center", padding: "25px 15px" }}>
              <img id="product-image" src={product.url} alt="product-pic"></img>
              <p className="product-title">{product.title.shortTitle}</p>
              <p className="product-discount">{product.discount}</p>
              <p className="product-tagline">{product.tagline}</p>
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
};

export default Slide;
