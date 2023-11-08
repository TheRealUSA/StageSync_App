import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiSolidTrashAlt, BiSolidEditAlt } from 'react-icons/bi';
import { IoEyeSharp } from 'react-icons/io5';

const DataTableUsuario = () => {
  const [data, setData] = useState([
    { id: 1, name: 'Juan', email: 'juan@example.com' },
    { id: 2, name: 'Ana', email: 'ana@example.com' },
    { id: 3, name: 'Pedro', email: 'pedro@example.com' },
  ]);

  const navigate = useNavigate();
  const AgregarClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate('/Dashboard/AgregarUsuario');
  };

  const VerClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Navega a la vista 'Registrarse' al hacer clic en el botón
    navigate('/Dashboard/VerUsuario');
  };

  const EditarClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Navega a la vista 'Registrarse' al hacer clic en el botón
    navigate('/Dashboard/EditarUsuario');
  };

  // Estado para el término de búsqueda
  const [searchTerm, setSearchTerm] = useState('');

  // Filtrar datos en función del término de búsqueda
  const filteredData = data.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) 
  );

  const handleDeleteItem = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Tabla de Usuarios</h1>
      <div className="mb-4 flex items-center">
      <button
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={AgregarClick}
        >
          Agregar
        </button>
        <input
          type="text"
          placeholder="Buscar..."
          className="px-4 py-2 border rounded-l w-20% ml-auto"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-[#D1C6AE] text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 bg-[#D1C6AE] text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
              Nombre
            </th>
            <th className="px-6 py-3 bg-[#D1C6AE] text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 bg-[#D1C6AE] text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((user) => (
            <tr key={user.id}>
              <td className="px-6 py-4 whitespace-no-wrap">{user.id}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{user.name}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{user.email}</td>
              <td className="px-6 py-4 whitespace-no-wrap">
                <button
                  onClick={() => VerClick(user.id)}
                  className="text-blue-600 hover:text-blue-900 mr-2"
                >
                  <IoEyeSharp />
                </button>
                <button
                  onClick={() => EditarClick(user.id)}
                  className="text-green-600 hover:text-green-900 mr-2"
                >
                  <BiSolidEditAlt />
                </button>
                <button
                  onClick={() => handleDeleteItem(user.id)}
                  className="text-red-600 hover:text-red-900"
                >
                  <BiSolidTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTableUsuario;
