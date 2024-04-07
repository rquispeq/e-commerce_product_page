import { useEffect, useState } from "react"
import Logo from "../atoms/Logo"
import axios from "axios"
import CartModal from "./CartModal"
import MenuButton from "../atoms/MenuButton"
import CloseButton from "../atoms/CloseButton"

const Header = () => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    // Fetch user data from API
    axios
      .get("http://localhost:3001/user/")
      .then((response) => {
        setUser(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  const openMenu = () => {
    let menu = document.getElementById("menu")
    menu.classList.toggle("-left-3/4")
    menu.classList.toggle("left-0")
  }

  return ( user &&
    <header className="border-b border-gray-300 md:mb-24 md:mbtext-black  font-medium py-6 md:py-11">
      <div className="content flex items-center justify-between ">
        <div className="content-left flex items px-6 gap-6">
          {/* <button className="md:hidden " onClick={openMenu}>menu</button> */}
          <MenuButton handle={openMenu} />
          <Logo />
          <nav id="menu" className="absolute bg-white min-h-full z-20 top-0 md:text-gray-400 p-8 w-3/4 -left-3/4 md:static md:bg-none md:min-h-0 md:z-0 lg:p-0 md:w-0">
            {/* <button className="pb-12 md:hidden" onClick={openMenu}>cerrar</button> */}
            <CloseButton onClick={openMenu} />
            <ul className="flex gap-6 flex-col justify-center md:flex-row md:justify-normal">
              <li className="hover:text-gray-600 transition-colors duration-300">
                <a href="/">Collections</a>
              </li>
              <li className="hover:text-gray-600 transition-colors duration-300">
                <a href="/product">Men</a>
              </li>
              <li className="hover:text-gray-600 transition-colors duration-300">
                <a href="/about">Women</a>
              </li>
              <li className="hover:text-gray-600 transition-colors duration-300">
                <a href="/about">About</a>
              </li>
              <li className="hover:text-gray-600 transition-colors duration-300">
                <a href="/about">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="content-right">
          <ul className="flex gap-8 items-center">
            <CartModal />
            <li>
              <a href="/">
                <img src={user.avatar} className="w-10" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
