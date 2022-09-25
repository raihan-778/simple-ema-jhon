import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
import "./Product.css";

const Product = ({ product, handleAddToCart }) => {
  /* const { product, handleAddToCart } = props; */
  const { name, img, seller, price, ratings, category } = product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h4 className="product-name">{name}</h4>
        <p>Category: {category}</p>
        <p>Price: {price}</p>
        <p>
          <small>Ratings: {ratings}</small>
        </p>
        <p>
          <small>Brand: {seller}</small>
        </p>
      </div>
      <button onClick={() => handleAddToCart(product)} className="cart-btn">
        <p>Add to Cart</p>
        <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
