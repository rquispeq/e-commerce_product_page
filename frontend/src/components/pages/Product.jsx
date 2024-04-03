import { useEffect, useState } from "react"
import Header from "../molecules/Header"
import ProductImage from "../organisms/ProductImage"
import axios from "axios"
import { formatPrice } from "../../helpers/numbers"

const Product = () => {
  const [product, setProduct] = useState()
  const [quantity, setQuantity] = useState(1)
  useEffect(() => {
    // Fetch product data from API
    axios
      .get("http://localhost:3001/products/2674848")
      .then((response) => {
        setProduct(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  const increase = () => {
    setQuantity(quantity + 1)
  }

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }
  return (
    product && (
      <div className="container m-auto">
        <Header />
        <div className="container-product flex justify-between gap-20 px-16">
          <div className="product-image w-4/12">
            <ProductImage product={product} />
          </div>
          <div className="product-info font-medium flex flex-col gap-4 mt-16">
            <span className="text-orange-600 uppercase tracking-widest">
              {product.brand}
            </span>
            <div className="flex gap-9 flex-col">
              <h1 className="text-4xl font-bold">{product.name}</h1>
              <p className="text-gray-500 ">{product.description}</p>
              <div className="price-details flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <div className="final-price text-4xl font-bold">
                    {formatPrice(product.final_price)}
                  </div>
                  <div className="bg-orange-200 text-orange-500 px-2 rounded">
                    {product.percent_descount}%
                  </div>
                </div>
                <div className=" line-through text-gray-400">
                  {formatPrice(product.original_price)}
                </div>
              </div>
              <div className="actions flex gap-4">
                <div className="set-amout flex justify-center bg-gray-100 rounded text-lg">
                  <button
                    className="text-orange-600 font-bold px-3 py-2"
                    onClick={decrease}
                    disabled={quantity === 1}
                  >
                    -
                  </button>
                  <input
                    type="text"
                    className="w-14 px-1 text-center bg-gray-100"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                  <button
                    className="text-orange-600 font-bold px-3 py-2"
                    onClick={increase}
                  >
                    +
                  </button>
                </div>
                <button className="bg-orange-600 px-20 rounded text-white shadow-2xl ">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  )
}
export default Product
