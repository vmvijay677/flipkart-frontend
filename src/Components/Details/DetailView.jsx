import React, { useEffect } from "react";
import "./DetailView.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../Redux/Actions/ProductActions";
import ActionItem from "./ActionItem";
import ProductDetail from "./ProductDetail";
import { navData } from "../../SampleData/Data";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const DetailView = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const { loading, product } = useSelector((state) => state.getProductDetails);

  useEffect(() => {
    if (product && id !== product.id) dispatch(getProductDetails(id));
  }, [dispatch, id, product, loading]);

  return (
    <div className="detail-component">
      <div
        style={{
          background: "white",
          borderBottom: "1px solid lightgray",
          marginBottom: "10px",
          height: "42px",
        }}
      >
        <div className="navbar-component">
          {navData.map((data) => (
            <div className="nav-padding">
              <p className="nav-text">
                <span>{data.text}</span>
                <span>
                  <ExpandMoreIcon />
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {product && Object.keys(product).length && (
        <div className="detail-flex">
          <div>
            <ActionItem product={product} />
          </div>

          <div className="right-container">
            <p style={{ fontSize: "20px", marginBottom: "8px" }}>
              {product.title.longTitle}
            </p>
            <p className="product-ratings">
              8 Ratings & 1 review
              <span>
                <img
                  className="fassured"
                  src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
                  alt="fassured"
                ></img>
              </span>
            </p>

            <p>
              <span className="product-price">₹{product.price.cost}</span>
              <span className="product-mrp">
                <strike>₹{product.price.mrp}</strike>
              </span>
              <span className="product-discount">
                {product.price.discount} off
              </span>
            </p>

            <ProductDetail product={product} />
          </div>
          {/* <p style={{ width: "50%" }}>{product.description}</p> */}
        </div>
      )}
    </div>
  );
};

export default DetailView;
