import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="logo" />
      <div className="container">
        {/* <a href="/">Home</a>
        <a href="/">Shop</a>
        <a href="/About">About</a>
        <a href="/orders">Order</a>
        <a href="/inventory">Inventory</a> */}
        <Link to={`/`}>Home</Link>
        <Link to={`/`}>Shop</Link>
        <Link to={`/orders`}>Orders</Link>
        <Link to={`/inventory`}>Inventory</Link>
        <Link to={`/about`}>About</Link>
      </div>
    </nav>
  );
};

export default Header;
