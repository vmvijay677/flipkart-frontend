import React, { useState, useContext } from "react";
import "./CustomButtons.css";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LoginDialog from "../Login/LoginDialog";
import { DataContext } from "../../Context/DataProvider";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";

const CustomButtons = () => {
  const [open, setOpen] = useState(false);
  const { account, setAccount } = useContext(DataContext);

  const openDialog = () => {
    setOpen(true);
  };

  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div>
      <div className="Wrapper">
        {account ? (
          <Profile account={account} setAccount={setAccount} />
        ) : (
          <Button
            id="login-button"
            variant="contained"
            onClick={() => openDialog()}
          >
            Login
          </Button>
        )}

        <p className="header-seller">Become a seller</p>
        <p className="header-more">
          More <ExpandMoreIcon className="more-icon" />
        </p>

        <Link to="/cart">
          <div>
            <div className="cart">
              <Badge badgeContent={cartItems?.length} color="error">
                <ShoppingCartIcon className="cart-icon" />
              </Badge>
              {cartItems?.length ? " " : ""}
              &nbsp;Cart
            </div>
          </div>
        </Link>
      </div>
      <LoginDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default CustomButtons;
