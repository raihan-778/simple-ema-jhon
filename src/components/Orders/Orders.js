import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
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
  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
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
          {cart.length === 0 && (
            <h2>
              No Items for revidews. Please add some item from here,
              <Link to={"/"}>Buy Now</Link>
            </h2>
          )}
        </div>
      </div>
      <div className="shopping-cart">
        <Cart handleClearCart={handleClearCart} cart={cart}>
          <Link to={"/shipping"}>Continue Shipping</Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
