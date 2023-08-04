import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import styles from './swiper.module.css'

export interface SwiperProps {
  images: { src: string }[]
}

export function Swiper({ images }: SwiperProps) {
  return (
    images.length <= 0
      ? <img src={images[0].src} />
      : <Carousel
        autoPlay
        showThumbs={false}
        swipeable
        infiniteLoop
        className={`${styles.swiper}`}
        stopOnHover
        interval={3500}
        showStatus={false}
        showIndicators={false}
      >
        {images.map(({ src }) => (
          <img className={`${styles.swiper__img}`} key={crypto.randomUUID()} src={src} alt="" />
        ))}
      </Carousel>
  )
}
