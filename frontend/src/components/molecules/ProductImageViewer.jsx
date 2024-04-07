import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Navigation, Thumbs } from "swiper/modules"
import { useState } from "react"
import CloseButtonViewer from "../atoms/CloseButtonViewer"
const ProductImageViewer = ({ images, onclick }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <div className="image-viewer-container absolute top-0 left-0 w-full bg-black bg-opacity-50 flex items-center justify-center z-20 h-full" >
      <div className="w-1/3 z-30 relative">
        <CloseButtonViewer onClick={onclick} />
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            loop={false}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2 mb-6 lg:rounded-2xl"
          >
            {images.map((image, index) => {
              return (
                <SwiperSlide key={index} className="cursor-pointer">
                  <img
                    src={image}
                    alt="product"
                    className="w-full lg:rounded-2xl"
                  />
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
            navigation={false}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} className="flex gap-2 cursor-pointer">
                <img src={image} alt="product" className="rounded-2xl" />
              </SwiperSlide>
            ))}
          </Swiper>
      </div>
    </div>
  )
}

export default ProductImageViewer
