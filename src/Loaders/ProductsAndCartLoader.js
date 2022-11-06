import { findCart } from "../utilities/fakedb"

const ProductsAndCartLoader = async () => {
  //get products
  const productsData = await fetch(`http://localhost:5000/products`)
  const { products } = await productsData.json()

  //get storedCart

  const storedCart = findCart()
  const innitialCart = []

  // console.log("saved cart", storedCart);
  for (const id in storedCart) {
    const addedProduct = products.find((product) => product._id === id)
    console.log(addedProduct)
    if (addedProduct) {
      const quantity = storedCart[id]
      addedProduct.quantity = quantity
      console.log(id, quantity)
      innitialCart.push(addedProduct)
    }
  }
  // console.log(products);
  return { products: products, innitialCart: innitialCart }
}

export default ProductsAndCartLoader
