import React from 'react';
import { useNavigate } from 'react-router-dom';

const VerUsuario = () => {
  const datosQuemados = [
    {
      id: 1,
      username: 'Juan',
      email: 'juan@gmail.com',
      password: '12345678',
    },
  ];

  const navigate = useNavigate();
  const BackClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate('/Dashboard/Usuarios');
  };

  // Obtén el primer músico de los datos quemados (puedes modificar esto según tus necesidades)
  const user = datosQuemados[0];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Detalles del Usuario</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-[#D1C6AE] shadow-lg rounded p-4">
          <strong>ID:</strong> {user.id}
        </div>
        <div className="bg-[#D1C6AE] shadow-lg rounded p-4">
          <strong>Nombre:</strong> {user.username}
        </div>
        <div className="bg-[#D1C6AE] shadow-lg rounded p-4">
          <strong>Email:</strong> {user.email}
        </div>
        <div className="bg-[#D1C6AE] shadow-lg rounded p-4">
          <strong>Contraseña:</strong> {user.password}
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

export default VerUsuario;
