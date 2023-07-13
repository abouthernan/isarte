import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import slider1Small from "../../assets/images/hero/slider/slider1-small.webp";
import slider1Full from "../../assets/images/hero/slider/slider1-full.webp";

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
      <picture className="slider-picture">
        <source media="(max-width: 767px)" srcset={slider1Small} />
        <source media="(min-width: 768px)" srcset={slider1Full} />
        <img
          src={slider1Full}
          alt="puede ser una imagen de una obra de arte de isarte"
        />
      </picture>

      <picture className="slider-picture">
        <source media="(max-width: 767px)" srcset={slider1Small} />
        <source media="(min-width: 768px)" srcset={slider1Full} />
        <img
          src={slider1Full}
          alt="puede ser una imagen de una obra de arte de isarte"
        />
      </picture>
    </Carousel>
  );
}
