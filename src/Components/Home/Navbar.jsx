import React from "react";
import "./Navbar.css";
import { navData } from "../../SampleData/Data";

const Navbar = () => {
  return (
    <div style={{ background: "white" }}>
      <div className="nav-component">
        {navData.map((data) => (
          <div className="nav-padding">
            <img className="nav-image" src={data.url} alt="nav-icon"></img>
            <p className="nav-text">{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
