import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import MusicianCard from '../components/Musicos/MusicianCard';

const musicians = [
  {
    id: 1,
    nombre: 'Geiner Zuñiga Flores',
    instrumento: 'Bajo',
    valoracion: '1',
    ubicación: 'Santa Cruz, Guancaste, Costa Rica',
    telefono: '+506 62541236',
    correo: 'Geiner@gmail.com',
    fechaNacimiento: '27/10/200',
    descripcion: 'Guitarrista talentoso con experiencia en rock y jazz.',
    imagenURL: '/Img/Ethan.jpg',
    redesSociales: {
      facebook: 'https://www.facebook.com/ejemplo2',
      whatsapp: 'https://wa.me/1234567890',
      instagram: 'https://www.instagram.com/ejemplo2',
    },
  },
  {
    id: 2,
    nombre: 'Gerald Gonzalez Valdes',
    valoracion: '5',
    instrumento: 'Marimba',
    ubicación: 'La palma de Puerto Jimenez, Puntarenas, Costa Rica',
    telefono: '+506 62238176',
    correo: 'juan@example.com',
    fechaNacimiento: '27/10/200',
    descripcion: 'Marinbista talentoso con experiencia en musica tradicional.',
    imagenURL: '/Img/Gerald.jpg', 
    redesSociales: {
      facebook: 'https://www.facebook.com/gerald.gonzalesvaldes',
      whatsapp: 'https://wa.link/tppcpr',
      instagram: 'https://www.instagram.com/ejemplo2',
    },
  },
  {
    id: 3,
    nombre: 'Ivan Alvarado Cruz',
    valoracion: '3',
    instrumento: 'Mujeres',
    ubicación: 'Abangares, Guanacaste, Costa Rica',
    telefono: '+506 62238176',
    correo: 'thefooster@example.com',
    fechaNacimiento: '27/10/200',
    descripcion: 'Mujeriego talentoso con experiencia en musica tradicional.',
    imagenURL: '/Img/Ivan.jpg', 
    redesSociales: {
      facebook: 'https://www.facebook.com/ejemplo2',
      whatsapp: 'https://twitter.com/ejemplo2',
      instagram: 'https://www.instagram.com/ejemplo2',
    },
  },
  {
    id: 4,
    nombre: 'Grettel Rodriguez Muñoz',
    valoracion: '4',
    instrumento: 'Marimba',
    ubicación: 'Hojancha, Guanacaste, Costa Rica',
    telefono: '+506 62238176',
    correo: 'juan@example.com',
    fechaNacimiento: '27/10/200',
    descripcion: 'Marinbista talentoso con experiencia en musica tradicional.',
    imagenURL: '/Img/Gree.jpg', 
    redesSociales: {
      facebook: 'https://www.facebook.com/ejemplo2',
      whatsapp: 'https://twitter.com/ejemplo2',
      instagram: 'https://www.instagram.com/ejemplo2',
    },
  },
  {
    id: 5,
    nombre: 'Grettel Rodriguez Muñoz',
    valoracion: '4',
    instrumento: 'Marimba',
    ubicación: 'Hojancha, Guanacaste, Costa Rica',
    telefono: '+506 62238176',
    correo: 'juan@example.com',
    fechaNacimiento: '27/10/200',
    descripcion: 'Marinbista talentoso con experiencia en musica tradicional.',
    imagenURL: '/Img/Gree.jpg', 
    redesSociales: {
      facebook: 'https://www.facebook.com/ejemplo2',
      whatsapp: 'https://twitter.com/ejemplo2',
      instagram: 'https://www.instagram.com/ejemplo2',
    },
  },
  {
    id: 6,
    nombre: 'Grettel Rodriguez Muñoz',
    valoracion: '4',
    instrumento: 'Marimba',
    ubicación: 'Hojancha, Guanacaste, Costa Rica',
    telefono: '+506 62238176',
    correo: 'juan@example.com',
    fechaNacimiento: '27/10/200',
    descripcion: 'Marinbista talentoso con experiencia en musica tradicional.',
    imagenURL: '/Img/Gree.jpg', 
    redesSociales: {
      facebook: 'https://www.facebook.com/ejemplo2',
      whatsapp: 'https://twitter.com/ejemplo2',
      instagram: 'https://www.instagram.com/ejemplo2',
    },
  },
  {
    id: 7,
    nombre: 'Grettel Rodriguez Muñoz',
    valoracion: '4',
    instrumento: 'Marimba',
    ubicación: 'Hojancha, Guanacaste, Costa Rica',
    telefono: '+506 62238176',
    correo: 'juan@example.com',
    fechaNacimiento: '27/10/200',
    descripcion: 'Marinbista talentoso con experiencia en musica tradicional.',
    imagenURL: '/Img/Gree.jpg', 
    redesSociales: {
      facebook: 'https://www.facebook.com/ejemplo2',
      whatsapp: 'https://twitter.com/ejemplo2',
      instagram: 'https://www.instagram.com/ejemplo2',
    },
  },
  // Agrega más músicos aquí...
];

const Musicos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMusicians, setFilteredMusicians] = useState(musicians);
  const [currentPage, setCurrentPage] = useState(0);

  const musiciansPerPage = 6; // Define la cantidad de músicos por página

  const handleSearchChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    filterMusicians(newSearchTerm);
  };

  const filterMusicians = (term) => {
    const filtered = musicians.filter((musician) => {
      return (
        musician.nombre.toLowerCase().includes(term.toLowerCase()) ||
        musician.instrumento.toLowerCase().includes(term.toLowerCase()) ||
        musician.ubicación.toLowerCase().includes(term.toLowerCase()) ||
        musician.valoracion.toString().includes(term)
      );
    });
    setFilteredMusicians(filtered);
    setCurrentPage(0); // Reiniciar a la primera página cuando se realiza una búsqueda
  };

  const offset = currentPage * musiciansPerPage;
  const currentMusicians = filteredMusicians.slice(offset, offset + musiciansPerPage);

  const pageCount = Math.ceil(filteredMusicians.length / musiciansPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div>
      <div className="p-4 mt-16 flex items-center justify-center bg-[#D9D9D9]">
        <input
          type="text"
          placeholder="Buscar músicos..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="border rounded-md p-2"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 bg-[#D9D9D9] p-4">
        {currentMusicians.map((musician) => (
          <MusicianCard key={musician.id} musician={musician} />
        ))}
      </div>

      {pageCount > 1 && (
        <ReactPaginate
          previousLabel={'Anterior'}
          nextLabel={'Siguiente'}
          breakLabel={'...'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'flex justify-center mt-4 mb-4 space-x-2'}
          subContainerClassName={'flex items-center'}
          activeClassName={'bg-blue-500 text-white px-3 py-2 rounded-full'}
          pageClassName={'px-3 py-2 rounded-full bg-gray-200 text-gray-700'}
          previousClassName={'px-3 py-2 rounded-full bg-gray-200 text-gray-700'}
          nextClassName={'px-3 py-2 rounded-full bg-gray-200 text-gray-700'}
          breakClassName={'px-3 py-2 rounded-full bg-gray-200 text-gray-700'}
        />
      )}
    </div>
  );
};

export default Musicos;

