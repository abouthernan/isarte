import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import slider1Small from "../../assets/images/hero/slider/slider1-small.webp";
import slider1Full from "../../assets/images/hero/slider/slider1-full.webp";
import slider2Small from "../../assets/images/hero/slider/slider2-small.webp";
import slider2Full from "../../assets/images/hero/slider/slider2-full.webp";
import slider3Small from "../../assets/images/hero/slider/slider3-small.webp";
import slider3Full from "../../assets/images/hero/slider/slider3-full.webp";
import slider4Small from "../../assets/images/hero/slider/slider4-small.webp";
import slider4Full from "../../assets/images/hero/slider/slider4-full.webp";

const images = [
  {
    full: slider1Full,
    small: slider1Small,
  },
  {
    full: slider2Full,
    small: slider2Small,
  },
  {
    full: slider3Full,
    small: slider3Small,
  },
  {
    full: slider4Full,
    small: slider4Small,
  },
];

export function Slider() {
  return (
    <Carousel
      autoPlay
      showThumbs={false}
      swipeable
      infiniteLoop
      showArrows={false}
      className="slider"
      stopOnHover={false}
      interval={3500}
      showStatus={false}
    >
      {images.map(({ full, small }) => (
        <picture className="slider-picture" key={crypto.randomUUID()}>
          <source media="(max-width: 767px)" srcSet={small} />
          <source media="(min-width: 768px)" srcSet={full} />
          <img
            src={slider1Full}
            alt="puede ser una imagen de una obra de arte de isarte"
          />
        </picture>
      ))}
    </Carousel>
  );
}
