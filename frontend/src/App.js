import { RouterProvider } from "react-router-dom"
import router from "./routes/Router"
import { CartProvider } from "./contexts/CartContext"

function App() {
  return (<CartProvider>
    <RouterProvider router={router} />
  </CartProvider>)
}

export default App
