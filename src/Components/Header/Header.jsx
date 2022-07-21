import React from "react";
import "./Header.css";
import Search from "./Search";
import CustomButtons from "./CustomButtons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="styled-header">
      <div className="header-container">
        <div className="component">
          <Link to="/">
            <img
              src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
              alt="logo"
              style={{ width: "75px" }}
            ></img>
            <p className="sub-heading">
              Explore{" "}
              <span style={{ color: "#FFE500", fontWeight: "bold" }}>Plus</span>
              <img
                className="plus-image"
                src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
                alt="sub-logo"
              ></img>
            </p>
          </Link>
        </div>

        <div>
          <Search />
        </div>

        <div>
          <CustomButtons />
        </div>
      </div>
    </div>
  );
};

export default Header;
