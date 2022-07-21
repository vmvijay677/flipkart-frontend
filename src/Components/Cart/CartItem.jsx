import React from "react";
import "./CartItem.css";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { addEllipsis } from "../Utils/CommonUtils";
import GroupedButton from "./ButtonGroup";
import Divider from "@mui/material/Divider";
import { removeFromCart } from "../../Redux/Actions/CartActions";
import { useDispatch } from "react-redux";

const CartItem = (props) => {
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCounter = (data) => {
    props.func(data);
  };

  return (
    <div className="cartitem-component">
      <p className="cart-header">My Cart ({cartItems?.length})</p>
      <Divider />
      {cartItems.map((item) => (
        <div>
          <div className="cartitem-container">
            <div>
              <img className="cart-product" src={item.url} alt="product"></img>
              <GroupedButton func={getCounter} />
            </div>

            <div className="cart-details">
              <p>{addEllipsis(item.title.longTitle)}</p>
              <p className="smalltext">
                Seller: Indian Products
                <span>
                  <img
                    className="fassured-image"
                    src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
                    alt="fassured"
                  ></img>
                </span>
              </p>
              <p style={{ margin: "15px 0 0 0" }}>
                <span className="product-cost">₹{item.price.cost}</span>
                &nbsp;&nbsp;&nbsp;
                <span className="product-mrp">
                  <strike>₹{item.price.mrp}</strike>
                </span>
                &nbsp;
                <span className="product-discount">
                  {item.price.discount} off
                </span>
                &nbsp; &nbsp;
                <span className="product-discount">1 Offer available</span>
              </p>

              <div style={{ display: "flex", gap: "10px" }}>
                <Button id="remove-button">Save for later</Button>
                <Button
                  id="remove-button"
                  onClick={() => removeItemFromCart(item.id)}
                >
                  Remove
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
