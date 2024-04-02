import { useEffect, useState } from "react"
import Header from "../molecules/Header"
import ProductImage from "../organisms/ProductImage"
import axios from "axios"
import { formatPrice } from "../../helpers/numbers"

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
        <div className="product-info font-medium flex flex-col gap-4">
          <span className="text-orange-600 uppercase tracking-widest">{product.brand}</span>
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-gray-500">{product.description}</p>
          <div className="price-details flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <div className="final-price text-4xl font-bold">{formatPrice(product.final_price)}</div>
              <div className="bg-orange-200 text-orange-500 px-2 rounded">{product.percent_descount}%</div>
            </div>
            <div className=" line-through text-gray-400">
              {formatPrice(product.original_price)}
            </div>
          </div>
          <div className="actions flex">
            <div className="set-amout">
              <button>-</button>
              <input type="text" value="1" />
              <button>+</button>
            </div>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Product
