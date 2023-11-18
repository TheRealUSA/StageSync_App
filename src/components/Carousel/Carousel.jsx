import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function MyCarousel() {
  return (
    <Carousel
      autoPlay
      showThumbs={false}
      interval={5800}
      infiniteLoop
      className="w-full min-h-screen-lg mx-auto"
    >
      <div className="w-ful">
        <img
          src="/Img/Fotooo.webp"
          alt="Imagen 1"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="w-full">
        <img
          src="/Img/Fotoo.webp"
          alt="Imagen 2"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="w-full">
        <img
          src="/Img/Foto.webp"
          alt="Imagen 3"
          className="w-full h-auto object-cover"
        />
      </div>
    </Carousel>
  );
}

export default MyCarousel;
