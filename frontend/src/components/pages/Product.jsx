import Header from "../molecules/Header"
import ProductImage from "../organisms/ProductImage"

const Product = () => {
  const product = {
    name: "Product Name",
    description: "Product Description",
    price: 100.00,
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
  }
  return (
    <div className="container m-auto">
      <Header />
      <div className="container-product flex justify-between gap-20 px-16">
        <div className="product-image w-4/12">
          <ProductImage product={product} />
        </div>
        <div className="product-info">
          <h1>Product Name</h1>
          <p>Product Description</p>
          <p>$100.00</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
export default Product
