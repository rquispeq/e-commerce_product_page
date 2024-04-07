import { useCallback, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Navigation, Thumbs } from "swiper/modules"
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import "../../assets/styles/index.css"
import ProductImageViewer from "../molecules/ProductImageViewer";

const ProductImage = ({ product }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [isViewerOpen, setIsViewerOpen] = useState(false)
  const images = product.images
  const openImageViewer = useCallback((index) => {
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setIsViewerOpen(false);
  };
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={false}
        spaceBetween={10}
        navigation={false}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 mb-6 lg:rounded-2xl"
      >
        {product.images.map((image, index) => {
          return (
            <SwiperSlide key={index} className="cursor-pointer">
              <img src={image} alt="product" onClick={() => openImageViewer(index)} className="w-full lg:rounded-2xl" />
            </SwiperSlide>
          )
        })}

      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={false}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={false}
        watchSlidesProgress={false}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper flex flex-col"
        navigation={true}
      >
        {product.images.map((image, index) => (
          <SwiperSlide key={index} className="flex gap-2 cursor-pointer">
            <img src={image} alt="product" className="rounded-2xl" />
          </SwiperSlide>
        ))}
      </Swiper>
      {isViewerOpen && (

        <ProductImageViewer images={images} onclick= {closeImageViewer}/>
      )}
    </>
  )
}

export default ProductImage
