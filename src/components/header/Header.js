import React from "react";
import logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="logo" />
      <div className="container">
        <a href="/Home">Home</a>
        <a href="/Shop">Shop</a>
        <a href="/About">About</a>
        <a href="/Order">Order</a>
        <a href="/Enventory">Enventory</a>
      </div>
    </nav>
  );
};

export default Header;
