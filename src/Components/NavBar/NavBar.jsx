import React, { useState } from "react";
import { Drawer } from "antd";
import "./NavBar.css";
import NftLogo from "../../Assets/images/ApolloNFT.png";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const showMenu = () => {
    setOpen(true);
  };
  const hideMenu = () => {
    setOpen(false);
  };
  return (
    <div className="navbar-container">
      <div className="logo">
        <img src={NftLogo} alt="Apollo NFT Logo" />
      </div>
      <div className="nav-list">
        <ul>
          <li>Marketplace</li>
          <li>Creator</li>
        </ul>
      </div>
      <div className="nav-button">
        <button>Connect Wallet</button>
      </div>
      <button onClick={showMenu} className="nav-bar-icon">
        <FaBars />
      </button>
      <Drawer
        placement="left"
        onClose={hideMenu}
        open={open}
        className="mobile-menu"
      >
        <ul>
          <li>Marketplace</li>
          <li>Creator</li>
          <button>Connect Wallet</button>
        </ul>
      </Drawer>
    </div>
  );
};

export default NavBar;
