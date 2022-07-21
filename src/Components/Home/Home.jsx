import React, { useEffect } from "react";
import Banner from "./Banner";
import "./Home.css";
import Navbar from "./Navbar";
import { getProducts } from "../../Redux/Actions/ProductActions";
import { useDispatch, useSelector } from "react-redux";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";

const Home = () => {
  const { products } = useSelector((state) => state.getProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <Navbar />

      <div className="home-background">
        <Banner />
        <MidSlide products={products} title="Deals of the day" timer={true} />
        <MidSection />
        <Slide products={products} title="Discounts for you" timer={false} />
        <Slide
          products={products}
          title="Top selection of the day"
          timer={false}
        />
      </div>
    </div>
  );
};

export default Home;
