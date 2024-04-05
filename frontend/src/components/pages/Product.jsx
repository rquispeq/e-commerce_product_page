import { useContext, useEffect, useState } from "react"
import Header from "../molecules/Header"
import ProductImage from "../organisms/ProductImage"
import axios from "axios"
import { formatPrice } from "../../helpers/numbers"
import { CartContext } from "../../contexts/CartContext"

const Product = () => {
  const [product, setProduct] = useState()
  const [quantity, setQuantity] = useState(1)
  const { state, dispatch } = useContext(CartContext)
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

  const handleAddCart = () => {
    dispatch(
      {
        type: "ADD_TO_CART",
        payload: {
          id: product.id,
          name: product.name,
          price: product.final_price,
          quantity: quantity,
          image: product.images[0],
        },
      }
    )
  }

  const handleRemoveCart = () => {
    dispatch(
      {
        type: "REMOVE_FROM_CART",
        payload: product.id
      }
    )
  }
  return (
    product && (
      <div className="container m-auto ">
        <Header />
        <div className="container-product flex flex-col lg:flex-row lg:justify-between lg:gap-20 lg:px-16">
          <div className="product-image lg:w-4/12 w-full">
            <ProductImage product={product} />
          </div>
          <div className="product-info font-medium flex flex-col gap-4 mt-16 px-6 lg:px-0">
            <span className="text-orange-600 uppercase tracking-widest">
              {product.brand}
            </span>
            <div className="flex gap-9 flex-col">
              <h1 className="text-4xl font-bold">{product.name}</h1>
              <p className="text-gray-500 ">{product.description}</p>
              <div className="price-details flex lg:flex-col gap-2 items-center justify-between lg:items-baseline lg:justify-normal">
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
              <div className="actions flex gap-4 lg:flex-row flex-col">
                <div className="set-amout flex justify-between lg:justify-center bg-gray-100 rounded text-lg">
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
                {!state.cart.find( p => p.id === product.id) ? <button className="bg-orange-600 lg:px-20 py-4 lg:py-0 rounded text-white shadow-2xl " onClick={handleAddCart}>
                  Add to Cart
                </button>:
                <button className="bg-orange-600 px-20 rounded text-white shadow-2xl " onClick={handleRemoveCart}>
                Remove to Cart
              </button>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  )
}
export default Product
