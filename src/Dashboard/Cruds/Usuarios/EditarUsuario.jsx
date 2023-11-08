import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EditarUsuario = () => {
  const [user, setUser] = useState({
    id: Date.now(),
    username: 'Juan',
    email: 'juan@gmail.com',
    password: '12345678',
 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const navigate = useNavigate();
  const BackClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate('/Dashboard/Usuarios');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del músico a tu backend o hacer lo que necesites con ellos.
    console.log('Datos del músico:', user);
    // Luego, puedes redirigir o realizar otras acciones según tus necesidades.
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Agregar Usuario</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Nombre:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={user.username}
              onChange={handleChange}
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Contraseña:
            </label>
            <input
              type="text"
              id="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Editar Usuario
          </button>
          <button onClick={BackClick}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 ml-3"
          >
            Volver
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditarUsuario;