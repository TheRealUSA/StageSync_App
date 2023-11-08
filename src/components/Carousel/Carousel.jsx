import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importa los estilos del carrusel

function MyCarousel() {
  return (
    <Carousel autoPlay showThumbs={false} interval={5800} infiniteLoop>
      <div>
        <img src="/Img/Fotooo.webp" alt="Imagen 1" />
      </div>
      <div>
        <img src="/Img/Fotoo.webp" alt="Imagen 2" />
      </div>
      <div>
        <img src="/Img/Foto.webp" alt="Imagen 3" />
      </div>
    </Carousel>
  );
}

export default MyCarousel;