import React from 'react';
import { useNavigate } from 'react-router-dom';

const VerMusico = () => {
  const datosQuemados = [
    {
      id: 1,
      firstName: 'Juan',
      lastName: 'Pérez',
      secondLastName: 'López',
      birthdate: '1990-05-15',
      phoneNumber: '+123456789',
      province: 'San José',
      canton: 'Escazú',
      district: 'San Rafael',
      postalCode: '10201',
      profileImage: 'https://th.bing.com/th/id/R.9e6636a3531d504311061164455c64c8?rik=oKC6LlRm2wn8vw&pid=ImgRaw&r=0',
      skillsDescription: 'Guitarrista con experiencia en rock y jazz.',
      instrument: 'Guitarra eléctrica',
      whatsapp: 'https://wa.me/123456789',
      instagram: 'https://instagram.com/juanperezmusic',
      facebook: 'https://facebook.com/juanperezmusic',
    },
  ];

  const navigate = useNavigate();
  const BackClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate('/Dashboard/Musico');
  };

  // Obtén el primer músico de los datos quemados (puedes modificar esto según tus necesidades)
  const musico = datosQuemados[0];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Detalles del Músico</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-[#D1C6AE] shadow-lg rounded p-4">
          <strong>ID:</strong> {musico.id}
        </div>
        <div className="bg-[#D1C6AE] shadow-lg rounded p-4">
          <strong>Primer Nombre:</strong> {musico.firstName}
        </div>
        <div className="bg-[#D1C6AE] shadow-lg rounded p-4">
          <strong>Primer Apellido:</strong> {musico.lastName}
        </div>
        <div className="bg-[#D1C6AE] shadow-lg rounded p-4">
          <strong>Segundo Apellido:</strong> {musico.secondLastName}
        </div>
        <div className="bg-[#D1C6AE] shadow-lg rounded p-4">
          <strong>Fecha de Cumpleaños:</strong> {musico.birthdate}
        </div>
        <div className="bg-[#D1C6AE] shadow-lg rounded p-4">
          <strong>Número de Teléfono:</strong> {musico.phoneNumber}
        </div>
        <div className="bg-[#D1C6AE] shadow-lg rounded p-4">
          <strong>Provincia:</strong> {musico.province}
        </div>
        <div className="bg-[#D1C6AE] shadow-lg rounded p-4">
          <strong>Cantón:</strong> {musico.canton}
        </div>
        <div className="bg-[#D1C6AE] shadow-lg rounded p-4">
          <strong>Distrito:</strong> {musico.district}
        </div>
        <div className="bg-[#D1C6AE] shadow-lg rounded p-4">
          <strong>Código Postal:</strong> {musico.postalCode}
        </div>
        <div className="bg-[#D1C6AE] shadow-lg rounded p-4 col-span-3">
          <strong>Foto de Perfil:</strong>
          <img src={musico.profileImage} alt="Foto de perfil" className="mt-2 w-40 h-40 rounded" />
        </div>
        <div className="bg-[#D1C6AE] shadow-lg rounded p-4 col-span-3">
          <strong>Descripción de Habilidades:</strong> {musico.skillsDescription}
        </div>
        <div className="bg-[#D1C6AE] shadow-lg rounded p-4 col-span-3">
          <strong>Instrumento que Toca:</strong> {musico.instrument}
        </div>
        <div className="bg-[#D1C6AE] shadow-lg rounded p-4 col-span-3">
          <strong>Enlace de WhatsApp:</strong> <a href={musico.whatsapp} target="_blank" rel="noopener noreferrer">{musico.whatsapp}</a>
        </div>
        <div className="bg-[#D1C6AE] shadow-lg rounded p-4 col-span-3">
          <strong>Enlace de Instagram:</strong> <a href={musico.instagram} target="_blank" rel="noopener noreferrer">{musico.instagram}</a>
        </div>
        <div className="bg-[#D1C6AE] shadow-lg rounded p-4 col-span-3">
          <strong>Enlace de Facebook:</strong> <a href={musico.facebook} target="_blank" rel="noopener noreferrer">{musico.facebook}</a>
        </div>
      </div>
      <div className="mt-10 ">
        <button onClick={BackClick}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 ml-3"
        >
          Volver
        </button>
      </div>
    </div>
  );
};

export default VerMusico;
