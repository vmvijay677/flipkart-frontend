import React from "react";
import "./EmptyCart.css";

const EmptyCart = () => {
  return (
    <div className="empty-component">
      <h3 className="empty-mycart">My Cart</h3>
      <div className="empty-container">
        <img
          className="empty-image"
          src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
          alt="empty-cart"
        ></img>
        <p>Missing Cart items?</p>
        <span>Login to see the items you added previously.</span>
      </div>
    </div>
  );
};

export default EmptyCart;
