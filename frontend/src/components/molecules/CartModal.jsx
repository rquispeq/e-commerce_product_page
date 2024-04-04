import { useState } from "react"
import CartIcon from "../atoms/CartIcon"
import DeleteButton from "../atoms/DeleteButton"

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
        <div className="absolute shadow-2xl left-2/4 transform -translate-x-2/4 mt-4 z-10 bg-white ">
          <div className="title border-b p-4 border-b-gray-300 w-72">
            Cart
          </div>
          <div className="cart-container flex gap-3 flex-col items-center justify-center min-h-28 p-5">
            {/* Your cart is empty */}
            <div className="flex items-center justify-between w-full">
              <img src="https://via.placeholder.com/50" alt="" />
              <div>
                <div>Product name</div>
                <div>150 x 3 <span>375</span></div>
              </div>
              <DeleteButton />
            </div>
            <button className="bg-orange-500 w-full text-white rounded-xl p-4">
              Checkout
            </button>
          </div>
        </div>
      ) }
    </li>
  )
}

export default CartModal
