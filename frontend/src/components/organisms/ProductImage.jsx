import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Navigation, Thumbs } from "swiper/modules"
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
const ProductImage = ({ product }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

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
        className="mySwiper2 border-2 border-gray-300"
      >
        {product.images.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <img src="https://i.imgur.com/yTjz3H6.jpg" alt="product" className="w-full" />
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
          <SwiperSlide key={index}>
            <img src={image} alt="product" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default ProductImage
