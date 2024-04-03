import { useState } from "react"
import CartIcon from "../atoms/CartIcon"

const CartModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }


  return (
    <li className="relative">
      <span className="cursor-pointer relative" onClick={toggleModal}>
        <CartIcon />
      </span>
      {isModalOpen && (
        <div className="absolute shadow-2xl left-2/4 transform -translate-x-2/4 mt-4 z-10 bg-white">
          <div className="title border-b p-4 border-b-gray-300 w-72">
            Cart
          </div>
          <div className="cart-container flex items-center justify-center min-h-28">
            Your cart is empty
          </div>
        </div>
      ) }
    </li>
  )
}

export default CartModal
