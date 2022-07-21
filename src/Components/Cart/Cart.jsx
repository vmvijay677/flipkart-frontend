import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import TotalView from "./TotalView";
import Button from "@mui/material/Button";
import EmptyCart from "./EmptyCart";
import { DataContext } from "../../Context/DataProvider";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [totalItem, setTotalItem] = useState(1);

  const { account, setAccount } = useContext(DataContext);

  const totalAmount = () => {
    let price = 0,
      discount = 0;

    cartItems.map((item) => {
      price += item.price.mrp;
      discount += item.price.mrp - item.price.cost;
    });

    setPrice(price);
    setDiscount(discount);
  };

  useEffect(() => {
    totalAmount();
  }, [cartItems]);

  const placeOrder = () => {
    if (!account) {
      alert("Kindly login to make payments!");
    } else {
      var options = {
        key: "rzp_test_DaLJ6aorLXA2uL",
        key_secret: "bNKz3GLnXZBKvpai5za1YqCt",
        amount: (price - discount + 40) * 100,
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

  const getCounter = (data) => {
    setTotalItem(data);
  };

  return (
    <div>
      {cartItems.length ? (
        <div>
          <div className="cart-container">
            <div>
              <CartItem func={getCounter} />

              <div className="button-wrapper">
                <Button
                  id="place-button"
                  variant="contained"
                  onClick={() => placeOrder()}
                >
                  Place Order
                </Button>
              </div>
            </div>

            <div>
              <TotalView cartItems={cartItems} totalItem={totalItem} />
            </div>
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default Cart;
