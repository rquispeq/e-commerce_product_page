import { useContext, useState } from "react"
import CartIcon from "../atoms/CartIcon"
import DeleteButton from "../atoms/DeleteButton"
import { CartContext } from "../../contexts/CartContext"
import { formatPrice } from "../../helpers/numbers"

const CartModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { state } = useContext(CartContext)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <li className="relative">
      <span className="cursor-pointer relative" onClick={toggleModal}>
        <CartIcon />
        <span className="text-white bg-red-600 rounded-full flex justify-center items-center w-4 max-h-4 p-3 absolute -top-4 -right-4">
          {state.cart.length}
        </span>
      </span>
      {isModalOpen && (
        <div className="absolute shadow-2xl left-2/4 transform -translate-x-2/4 mt-4 z-10 bg-white ">
          <div className="title border-b p-4 border-b-gray-300 w-72">Cart</div>
          <div className="cart-container flex gap-3 flex-col items-center justify-center min-h-28 p-5">
            {state.cart.length > 0 ? (
              <>
                {state.cart.map((product) => (
                  <div key={product.id} className="flex items-center justify-between w-full gap-2">
                  <img src={product.image} className="w-14 rounded" alt="" />
                  <div className="flex-grow">
                    <div>{product.name}</div>
                    <div>
                      {formatPrice(product.price)} x {product.quantity} <span className="text-black">{formatPrice(product.price * product.quantity)}</span>
                    </div>
                  </div>
                  <DeleteButton productId={product.id} />
                </div>
                ))}
                
                <button className="bg-orange-500 w-full text-white rounded-xl p-4">
                  Checkout
                </button>
              </>
            ) : (
              "Your cart is empty"
            )}
          </div>
        </div>
      )}
    </li>
  )
}

export default CartModal
