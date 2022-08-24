import React from "react";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" srcset="" />
      <div className="nav-link">
        {/* <Link to="/shop">Shop</Link> */}
        <Link to="">Inventor</Link>
        <Link to="">Order</Link>
        <Link to="">About Us</Link>
      </div>
    </nav>
  );
};

export default Header;
