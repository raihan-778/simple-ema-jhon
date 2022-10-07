import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  let total = 0;
  let shipping = 0;
  let tex = 0;
  let grandTotal = 0;
  let quantity = 0;
  for (let product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
    tex = parseInt((total * 0.1).toFixed(2));
    grandTotal = total + shipping + tex;
  }
  return (
    <div className="cart-container">
      <h2>This is shopping cart</h2>
      {/* <p>Total added product: {props.cart.length}</p> */}
      <p>Total added product: ${quantity}</p>
      <p>Total Price: ${total} </p>
      <p>Total Shopping Charges: ${shipping}</p>
      <p>Tax: ${tex}</p>
      <h4>Grand Total: ${grandTotal}</h4>
    </div>
  );
};

export default Cart;
