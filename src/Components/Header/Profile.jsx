import React, { useState } from "react";
import "./Profile.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PowerSettingsNew from "@mui/icons-material/PowerSettingsNew";

const Profile = ({ account, setAccount }) => {
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const logout = () => {
    setAccount("");
  };

  return (
    <div onClick={handleClick}>
      <p className="profile-name">{account}</p>
      <Menu
        id="profile-menu"
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            logout();
          }}
        >
          <PowerSettingsNew fontSize="small" color="primary" />
          <p className="profile-logout">Logout</p>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Profile;
