import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewItems.css";

const ReviewItems = ({ handleRemoveItem, product }) => {
  console.log(product);
  const { name, id, quantity, price, img } = product;

  return (
    <div className="review-item">
      <img src={img} alt="" />
      <div className="review-details-container">
        <div className="review-details">
          <h2>Name: {name}</h2>
          <p>
            <small>Quantity: {quantity} Pcs</small>
          </p>
          <p>
            <small>Price: {price} $</small>
          </p>
        </div>
        <div>
          <button onClick={() => handleRemoveItem(id)} className="delete-btn">
            <FontAwesomeIcon
              className="delete-icon"
              icon={faTrashCan}
            ></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItems;
