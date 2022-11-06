import React, { useEffect, useState } from "react"
import { Link, useLoaderData } from "react-router-dom"
import { addToDb, deleteShoppingCart, findCart } from "../../utilities/fakedb"
import Cart from "../cart/Cart"
import Product from "../product/Product"
import "./Shop.css"

/*
Count:loaded
per page: 10
number of pages : count/perpage
page 
 */

const Shop = () => {
  // const { products, count } = useLoaderData()
  const [cart, setCart] = useState([])
  const [page, setPage] = useState(0)
  const [size, setsize] = useState(10)
  const [products, setProducts] = useState([])
  const [count, setCount] = useState(0)

  useEffect(() => {
    const url = `http://localhost:5000/products?page=${page}&size=${size}`
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCount(data.count)
        setProducts(data.products)
      })
  }, [page, size])

  const pages = Math.ceil(count / size)

  const handleClearCart = () => {
    setCart([])
    deleteShoppingCart()
  }

  useEffect(() => {
    const storedCart = findCart()
    console.log(storedCart)
    const savedCart = []
    console.log(savedCart)
    console.log(savedCart.length)
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product._id === id)
      if (addedProduct) {
        console.log(addedProduct)
        const quantity = storedCart[id]
        addedProduct.quantity = quantity
        savedCart.push(addedProduct)
      }
    }
    setCart(savedCart)
  }, [products])
  const handleAddToCart = (selectedProduct) => {
    let newCart = []
    const exist = cart.find((product) => product._id === selectedProduct._id)
    if (!exist) {
      selectedProduct.quantity = 1
      newCart = [...cart, selectedProduct]
    } else {
      const rest = cart.filter((product) => product._id !== selectedProduct._id)
      exist.quantity = exist.quantity + 1
      newCart = [...rest, exist]
    }
    /*  const newCart = cart.push(product) // not recomended */

    setCart(newCart)
    addToDb(selectedProduct._id)
  }

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => {
          return (
            <Product
              key={product._id}
              handleAddToCart={handleAddToCart}
              product={product}
            ></Product>
          )
        })}
      </div>
      <div className="shopping-cart">
        <Cart handleClearCart={handleClearCart} cart={cart}>
          <Link to={"/orders"}>Review Orders</Link>
        </Cart>
        {/* <p>Total added product: {cart.length}</p> */}
      </div>
      <div className="pagination">
        <p>Currently Selected Page: {page}</p>
        {[...Array(pages).keys()].map((number) => (
          <button
            className={page === number && "selected"}
            onClick={() => setPage(number)}
            key={number}
          >
            {number}
          </button>
        ))}
        <select onChange={(event) => setsize(event.target.value)}>
          <option value="5">5</option>
          <option value="10" selected>
            10
          </option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  )
}

export default Shop
