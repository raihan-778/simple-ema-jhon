import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../cart/Cart";
import ReviewItems from "../ReviewItems/ReviewItems";

const Orders = () => {
  const { products, innitialCart } = useLoaderData(); //{ products: products, innitialCart: innitialCart }
  const [cart, setCart] = useState(innitialCart);

  const handleRemoveItem = (id) => {
    const remainingItems = cart.filter((product) => product.id !== id);
    console.log(id);
    setCart(remainingItems);
    removeFromDb(id);
  };

  return (
    <div>
      <div className="shop-container">
        <div className="orders-container">
          {cart.map((product) => (
            <ReviewItems
              handleRemoveItem={handleRemoveItem}
              key={product.id}
              product={product}
            ></ReviewItems>
          ))}
        </div>
      </div>
      <div className="shopping-cart">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Orders;
