import React, { useState, useEffect } from "react";
import "./TotalView.css";

const TotalView = ({ cartItems, totalItem }) => {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

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

  return (
    <div className="totalview-component">
      <div className="totalview-header">
        <p className="totalview-heading">PRICE DETAILS</p>
      </div>

      <div className="totalview-container">
        <p>
          Price ({cartItems?.length} item)
          <span className="price-details">₹{totalItem * price}</span>
        </p>

        <p>
          Discount
          <span className="price-details">-₹{totalItem * discount}</span>
        </p>

        <p>
          Delivery Charges
          <span className="price-details">₹40</span>
        </p>

        <h3 className="total-amount">
          Total Amount
          <span className="price-details">
            ₹{totalItem * price - totalItem * discount + 40}
          </span>
        </h3>

        <p className="price-discount">
          You will save ₹{totalItem * discount - 40} on this order
        </p>
      </div>
    </div>
  );
};

export default TotalView;
