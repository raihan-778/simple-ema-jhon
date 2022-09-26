import React, { useEffect, useState } from "react";
import { addToDb, findCart } from "../../utilities/fakedb";
import Cart from "../cart/Cart";
import Product from "../product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(`products.json`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  useEffect(() => {
    const storedCart = findCart();
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      console.log(addedProduct);
      // if (storedCart) {
      //   let quantity = storedCart[id];
      //   addedProduct.quantity = quantity;
      //   console.log(quantity);
      // }
    }
  }, [products]);
  const handleAddToCart = (product) => {
    /*  const newCart = cart.push(product) // not recomended */
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              handleAddToCart={handleAddToCart}
              product={product}
            ></Product>
          );
        })}
      </div>
      <div className="shopping-cart">
        <Cart cart={cart}></Cart>
        {/* <p>Total added product: {cart.length}</p> */}
      </div>
    </div>
  );
};

export default Shop;
