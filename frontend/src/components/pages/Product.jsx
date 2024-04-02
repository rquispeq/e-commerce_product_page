import { useEffect, useState } from "react"
import Header from "../molecules/Header"
import ProductImage from "../organisms/ProductImage"
import axios from "axios"

const Product = () => {
  const [product, setProduct] = useState()
  useEffect(() => {
    // Fetch product data from API
    axios.get("http://localhost:3001/products/2674848").then((response) => {
      console.log(response)
      setProduct(response.data)
    }).catch((error) => {
      console.error(error)
    })
  }, [])
  return ( product &&
    <div className="container m-auto">
      <Header />
      <div className="container-product flex justify-between gap-20 px-16">
        <div className="product-image w-4/12">
          <ProductImage product={product} />
        </div>
        <div className="product-info">
          <h1>Product Name</h1>
          <p>Product Description</p>
          <p>$100.00</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
export default Product
