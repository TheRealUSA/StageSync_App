import React from 'react';
import { useNavigate } from 'react-router-dom';
import MyCarousel from '../components/Carousel/Carousel';

function Inicio() {

  const navigate = useNavigate();
  const ExplorarClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate('/Oportunidades');
  };

  const RegisterClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate('/Registrarse');
  };

  return (
    <>
   <div className="min-h-screen bg-[#700E11]">
      <div className="w-full min-w-screen-xl">
      <MyCarousel />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-white text-center">
        <h1 className="text-3xl sm:text-5xl mb-5 font-bold tracking-widest">
            ¡Afinemos tus Oportunidades!
          </h1>
          <h1 className='text-3xl sm:text-5xl mb-5 sm:mb-20 font-normal tracking-widest'>
            Conectando Músicos y Escenarios
          </h1>
          <p className="text-xl sm:text-3xl mt-4 tracking-widest">
            "Simplificamos la búsqueda y contratación de
          </p>
          <p className="text-xl sm:text-3xl tracking-widest mb-5">
            músicos para eventos y colaboraciones"
          </p>
          <button className="bg-[#D1C6AE] hover:bg-zinc-100 text-black font-bold py-2 px-4 mt-6 mb-5 rounded-full" onClick={ExplorarClick}>
            Explorar Ahora
          </button>
        </div>
      </div>
    </div>
      <div className="bg-[#D1C6AE] text-center p-2 sm:p-5">
        <h1 className="text-4xl font-semibold text-black mt-10 mb-10">
          Descubre un Mundo de Oportunidades Musicales
        </h1>
        <p className='text-xl sm:text-3xl font-thin text-black mt-5 mb-10'>
          Bienvenido a Stage Sync, el lugar donde la música cobra <br />
          vida y las conexiones musicales florecen. Estamos aquí <br />
          para revolucionar la forma en que los músicos, artistas y <br />
          contratantes se unen, crean y se expresan a través de la <br />  música.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl text-center font-bold mt-10 mb-6">¿Cómo Funcionamos?</h1>
      </div>
      <div className="flex flex-col md:flex-row mb-8">
        <div className="w-full md:w-1/2">
          <div className="bg-[#700E11] p-4 m-4 text-white shadow-lg mb-8">
            <h1 className="text-2xl md:text-3xl text-center font-semibold mt-4 mb-6">
              Explora Músicos Destacados
            </h1>
            <p className="text-base md:text-lg mb-6">
              Navega a través de perfiles detallados de músicos y artistas talentosos de una variedad
              de géneros. Descubre su formación, habilidades técnicas y experiencia musical. Vea videos
              y muestras de su trabajo para encontrar la voz perfecta para tu próximo proyecto.
            </p>
          </div>
          <div className="bg-[#D1C6AE] p-4 m-4 text-white shadow-lg">
            <h1 className="text-2xl md:text-3xl text-center text-black font-semibold mt-4 mb-6">
              Evaluaciones y Calificaciones
            </h1>
            <p className="text-base md:text-lg text-black mb-6">
              Fomentamos la transparencia y la calidad a través de nuestro sistema de evaluaciones
              mutuas. Los músicos son evaluados por su desempeño y los contratantes son evaluados por
              su trato y profesionalismo. Así se construye confianza y se garantiza una experiencia excepcional.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="bg-[#D1C6AE] p-4 m-4 text-black shadow-lg mb-8">
            <h1 className="text-2xl md:text-3xl text-center font-semibold mt-4 mb-6">
              Conexiones Directas
            </h1>
            <p className="text-base md:text-lg mb-6">
              Una vez que encuentres al músico o artista adecuado, comunícate directamente con ellos.
              Discute los detalles de tu evento, colaboración o proyecto musical. Estamos aquí para
              eliminar las barreras y facilitar la comunicación fluida. <br />
              <br />
            </p>
          </div>
          <div className="bg-[#700E11] p-4 m-4 text-white shadow-lg">
            <h1 className="text-2xl md:text-3xl text-center font-semibold mt-4 mb-6">
              Descubre Oportunidades Musicales
            </h1>
            <p className="text-base md:text-lg mb-6">
              Músicos, nuestra plataforma te conecta con una amplia gama de oportunidades emocionantes.
              Encuentra audiciones, colaboraciones, eventos en vivo y más, todo en un solo lugar.<br />
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="bg-black w-full md:w-1/3 flex items-center justify-center">
          <img
            src="/Img/Musico.jpg"
            alt="Persona con guitarra"
            className="w-56 h-50 mt-10 mb-8"
          />
        </div>
        <div className="bg-black w-full md:w-1/3 flex items-center justify-center">
          <h1 className="text-base md:text-lg text-white p-3 text-center">
            Regístrate hoy y da el primer paso para explorar un mundo lleno de melodías, oportunidades
            y colaboraciones que solo nuestra plataforma puede ofrecer.
          </h1>
        </div>
        <div className="bg-black w-full md:w-1/3 flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl text-white text-center mt-4 mb-6">
              ¿Listo para Unirte?
            </h1>
            <button
              className="bg-[#D1C6AE] hover:bg-zinc-100 text-black font-bold py-2 px-4 mt-4 rounded-full text-lg md:text-xl mb-10"
              onClick={RegisterClick}
            >
              Registrarme
            </button>
          </div>
        </div>
      </div>
     
    </>
  );
}

export default Inicio;