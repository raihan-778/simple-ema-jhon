import React from "react";

const Cart = (props) => {
  return (
    <div>
      <h2>This is shopping cart</h2>
      <p>Total added product: {props.cart.length}</p>
    </div>
  );
};

export default Cart;
