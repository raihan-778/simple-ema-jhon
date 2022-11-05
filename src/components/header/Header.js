import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  const { user, userLogOut } = useContext(AuthContext);

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
        <Link to={`/shipping`}>Shipping</Link>
        <Link to={`/about`}>About</Link>
        {user?.uid ? (
          <button onClick={userLogOut}>LogOut</button>
        ) : (
          <>
            <Link to={`/login`}>Login</Link>
            <Link to={`/signup`}>Sign Up</Link>
          </>
        )}
        <h4>{user?.email}</h4>
      </div>
    </nav>
  );
};

export default Header;
