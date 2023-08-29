import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

// import required modules
import { EffectCoverflow, Pagination, Mousewheel } from 'swiper/modules'

export interface SwiperProps {}

const IMGS = [
  'https://cdn.shopify.com/s/files/1/0783/7561/6831/files/22.Ojazos.jpg?v=1692221899',
  'https://cdn.shopify.com/s/files/1/0783/7561/6831/files/ObraSuenos_1.jpg?v=1689021766',
  'https://cdn.shopify.com/s/files/1/0783/7561/6831/files/39.Turpialamarillo.jpg?v=1692298047',
  'https://cdn.shopify.com/s/files/1/0783/7561/6831/files/30.imagen.jpg?v=1692291024',
  'https://cdn.shopify.com/s/files/1/0783/7561/6831/files/Capturadepantalla2023-08-16ala_s_6.24.25a.m..png?v=1692142235',
  'https://cdn.shopify.com/s/files/1/0783/7561/6831/files/23.Antojo.jpg?v=1692222780',
  'https://cdn.shopify.com/s/files/1/0783/7561/6831/files/13.Atento.jpg?v=1692203910',
  'https://cdn.shopify.com/s/files/1/0783/7561/6831/files/16.Caracola.jpg?v=1692205610',
  'https://cdn.shopify.com/s/files/1/0783/7561/6831/files/36.Gorrion.jpg?v=1692296965',
  'https://cdn.shopify.com/s/files/1/0783/7561/6831/files/IMG_2774.jpg?v=1689021402',
  'https://cdn.shopify.com/s/files/1/0783/7561/6831/files/IMG_2785_1.jpg?v=1689021167'
]

export const SwiperExpo = () => {
  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={1}
      allowTouchMove
      loop
      mousewheel
      speed={2500}
      coverflowEffect={{
        rotate: 30,
        stretch: 0,
        depth: 1000,
        modifier: 2,
        slideShadows: false
      }}
      pagination
      modules={[EffectCoverflow, Pagination, Mousewheel]}
      className="mySwiperExpo"
    >
      {IMGS.map(img => (
        <SwiperSlide>
          <img src={img} alt='puede ser una imagen que hace parte de una exposicion de arte de isabel renfijo' />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
