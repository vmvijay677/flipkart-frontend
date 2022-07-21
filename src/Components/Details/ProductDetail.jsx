import React from "react";
import "./ProductDetail.css";
import LocalOffer from "@mui/icons-material/LocalOffer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const ProductDetail = ({ product }) => {
  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);

  return (
    <div>
      <p className="offer-list">Available Offers</p>

      <div className="offer-text">
        <p>
          <LocalOffer id="badge" />
          <b>Special Price</b> Get extra 15% off (price inclusive of discount),
          T&C.
        </p>

        <p>
          <LocalOffer id="badge" />
          <b>Bank Offer</b> 5% Cashback on Flipkart Axis Bank Card, T&C.
        </p>

        <p>
          <LocalOffer id="badge" />
          <b>Bank Offer</b> Flat ₹100 Off* On 1st Transaction through Flipkart
          Pay Later, T&C.
        </p>

        <p>
          <LocalOffer id="badge" />
          <b>Bank Offer</b> 10% off on SBI Credit Cards, up to ₹1000. On orders
          of ₹5000 and above, T&C.
        </p>

        <p>
          <LocalOffer id="badge" />
          <b>Bank Offer</b> 10% Off on Bank of Baroda Mastercard debit card
          first time transaction, T&C.
        </p>
      </div>

      <Table id="table">
        <TableBody>
          <TableRow>
            <TableCell style={{ color: "#878787" }}>Delivery</TableCell>
            <TableCell style={{ fontWeight: 600 }}>
              Delivery by {date.toDateString()} | ₹40
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell style={{ color: "#878787" }}>Warranty</TableCell>
            <TableCell>No Warranty</TableCell>
          </TableRow>

          <TableRow>
            <TableCell style={{ color: "#878787" }}>Seller</TableCell>
            <TableCell>
              <span style={{ color: "#2874f0" }}>Indian Stores</span>
              <p>GST Invoice Available</p>
              <p>View more sellers starting from ₹{product.price.cost}</p>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell colSpan={2}>
              <img
                src="https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50"
                alt="super-coins"
                style={{ width: "390px" }}
              ></img>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell style={{ color: "#878787" }}>Description</TableCell>
            <TableCell>{product.description}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductDetail;
