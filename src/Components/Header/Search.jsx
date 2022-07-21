import React, { useState, useEffect } from "react";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import "./Search.css";
import { useSelector, useDispatch } from "react-redux";
import { getProducts as listProducts } from "../../Redux/Actions/ProductActions";
import { Link } from "react-router-dom";
import { List, ListItem } from "@mui/material";

const Search = () => {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(true);

  const getText = (text) => {
    setText(text);
    setOpen(false);
  };

  const getProducts = useSelector((state) => state.getProducts);
  const { products } = getProducts;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="SearchContainer">
      <InputBase
        className="InputSearchBase"
        value={text}
        inputProps={{ "aria-label": "search" }}
        placeholder="Search for products, brands and more"
        onChange={(e) => getText(e.target.value)}
      />

      <div className="SearchIconWrapper">
        <SearchIcon />
      </div>

      {text && (
        <List id="search-list" hidden={open}>
          {products
            .filter((product) =>
              product.title.longTitle.toLowerCase().includes(text.toLowerCase())
            )
            .map((product) => (
              <ListItem>
                <Link
                  to={`/product/${product.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                  onClick={() => setText("")}
                >
                  {product.title.longTitle}
                </Link>
              </ListItem>
            ))}
        </List>
      )}
    </div>
  );
};

export default Search;
