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
    console.log(storedCart);
    const savedCart=[];
    console.log(savedCart)
    console.log(savedCart.length)
    for (const id in storedCart) {
      const addedProduct=products.find(product=>product.id===id)
      if(addedProduct){
        console.log(addedProduct)
        const quantity =storedCart[id]
        addedProduct.quantity=quantity
        savedCart.push(addedProduct)
      }
    }
    setCart(savedCart)
  }, [products]);
  const handleAddToCart = (selectedProduct) => {
    let newCart=[]
    const exist=cart.find(product=>product.id===selectedProduct.id)
    if(!exist){
      selectedProduct.quantity=1;
      newCart=[...cart,selectedProduct]
    }else{
      const rest=cart.filter(product=>product.id!==selectedProduct.id)
      exist.quantity=exist.quantity+1
      newCart=[...rest,exist]

    }
    /*  const newCart = cart.push(product) // not recomended */
     
    setCart(newCart);
    addToDb(selectedProduct.id);
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
