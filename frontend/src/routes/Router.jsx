import { createBrowserRouter } from "react-router-dom"
import Product from "../components/pages/Product"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Product />,
  },
])

export default router
