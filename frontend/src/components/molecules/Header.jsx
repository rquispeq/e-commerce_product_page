import { useEffect, useState } from "react"
import Logo from "../atoms/Logo"
import axios from "axios"

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

  return ( user &&
    <header className="border-b border-gray-300 mb-24 text-gray-400 font-medium py-11">
      <div className="content flex items-center justify-between ">
        <div className="content-left flex items-center gap-16">
          <Logo />
          <nav>
            <ul className="flex gap-6">
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
            <li>
              <a href="">Carrito</a>
            </li>
            <li>
              <a href="">
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
