import Logo from "../atoms/Logo"

const Header = () => {
  return (
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
          <ul className="flex gap-8">
            <li>
              <a href="">Carrito</a>
            </li>
            <li>
              <a href="">Perfil</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
