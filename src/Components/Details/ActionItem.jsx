import React, { useState, useContext } from "react";
import "./ActionItem.css";
import Button from "@mui/material/Button";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import FlashOn from "@mui/icons-material/FlashOn";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/Actions/CartActions";
import { DataContext } from "../../Context/DataProvider";

const ActionItem = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const { account, setAccount } = useContext(DataContext);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { id } = product;

  const addItemToCart = () => {
    dispatch(addToCart(id, quantity));
    navigate("/cart");
  };

  const buyNow = () => {
    if (!account) {
      alert("Kindly login to make payments!");
    } else {
      var options = {
        key: "rzp_test_DaLJ6aorLXA2uL",
        key_secret: "bNKz3GLnXZBKvpai5za1YqCt",
        amount: (40 + product.price.cost) * 100,
        currency: "INR",
        name: "Flipkart Clone Payments",
        description: "by Razorpay",
        handler: function (response) {
          alert("Payment successfull!");
        },
        prefill: {
          name: "Flipkart, LLC",
          email: "flipkart@gmail.com",
          contact: "9941994199",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#047BD5",
        },
      };
    }
    var pay = new window.Razorpay(options);

    pay.open();
  };

  return (
    <div className="left-container">
      <img className="product-image" src={product.detailUrl} alt=""></img>
      <br></br>
      <Button
        id="add-to-cart"
        variant="contained"
        onClick={() => addItemToCart()}
      >
        <ShoppingCart /> Add to cart
      </Button>
      <Button id="buy-now" variant="contained" onClick={() => buyNow()}>
        <FlashOn /> Buy now
      </Button>
    </div>
  );
};

export default ActionItem;
