import React, { useState, useEffect } from 'react';
import { createCategoryBusiness, updateCategoryBusiness, deleteCategoryBusiness, getAllCategoryBusinesses, getCategoryBusinessById } from '../../Services/categorybusines';

const DataTableCategoryBusiness = () => {
  const [formData, setFormData] = useState({
    id: null,
    name: '',
  });

  const [categoryBusiness, setCategoryBusiness] = useState([]);
  const [creating, setCreating] = useState(true);
  const [selectedCategoryBusines, setSelectedCategoryBusiness] = useState(null);

  const fetchCategoryBusiness = async () => {
    try {
      const response = await getAllCategoryBusinesses();
      setCategoryBusiness(response);
    } catch (error) {
      console.error('Error al obtener la categoria de negocio', error);
    }
  };

  useEffect(() => {
    fetchCategoryBusiness();
  }, []);

  const handleCreateCategoryBusines = async () => {
    try {
      const { id, ...newFormData } = formData;

      const newCategoryBusines = await createCategoryBusiness(newFormData);
      fetchCategoryBusiness();
      clearForm();
    } catch (error) {
      console.error('Error al crear la categoria de negocio', error);
    }
  };

  const handleUpdateCategoryBusines = async () => {
    try {
      const updatedCategoryBusines = await updateCategoryBusiness(formData.id, formData);
      fetchCategoryBusiness();
      clearForm();
    } catch (error) {
      console.error('Error al actualizar la categoria de negocio', error);
    }
  };

  const handleDeleteCategoryBusines = async (id) => {
    try {
      await deleteCategoryBusiness(id);
      fetchCategoryBusiness();
      clearForm();
    } catch (error) {
      console.error('Error al eliminar la categoria de negocio', error);
    }
  };

  const handleEditCategoryBusines = async (categoryBusiness) => {
    try {
      const selected = await getCategoryBusinessById(categoryBusiness.id);
      setFormData({ ...selected });
      setSelectedCategoryBusiness(selected);
      setCreating(false);
    } catch (error) {
      console.error('Error al obtener los detalles de la categoria de negocio', error);
    }
  };

  const handleShowDetails = async (categoryBusiness) => {
    try {
      const selected = await getCategoryBusinessById(categoryBusiness.id);
      setFormData({ ...selected });
      setSelectedCategoryBusiness(selected);
    } catch (error) {
      console.error('Error al obtener los detalles del reclutamiento', error);
    }
  };

  const clearForm = () => {
    setFormData({
      id: null,
      name: '',
    });
    setCreating(true);
    setSelectedCategoryBusines(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl text-center">{creating ? 'Crear Categoria de negocio' : 'Actualizar Categoria de negocio'}</h2>
      <form>
        <div className="mt-4 p-4 bg-white shadow-md rounded-md grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium text-gray-700">Nombre</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
        <div className="mt-4">
          {creating ? (
            <button
              type="button"
              onClick={handleCreateCategoryBusines}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Crear Reclutamiento
            </button>
          ) : (
            <button
              type="button"
              onClick={handleUpdateCategoryBusines}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Actualizar Reclutamiento
            </button>
          )}
          <button
            type="button"
            onClick={clearForm}
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded ml-2"
          >
            Limpiar
          </button>
        </div>
      </form>
  
      <h2 className="text-2xl text-center mt-4 mb-4">Reclutamientos</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-[#D1C6AE]">
            <th className="border border-gray-300 py-2 px-4">Nombre</th>
            <th className="border border-gray-300 py-2 px-4">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {categoryBusiness.map((categoryBusines) => (
            <tr key={categoryBusines.id}>
              <td className="border border-gray-300 py-2 px-4 text-center">{categoryBusines.name}</td>
              <td className="border border-gray-300 py-2 px-4 text-center">
                <button
                  onClick={() => handleEditCategoryBusines(categoryBusines)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-1"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDeleteCategoryBusines(categoryBusines.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-1"
                >
                  Eliminar
                </button>
                <button
                  onClick={() => handleShowDetails(categoryBusines)}
                  className="bg-gray-500 hover-bg-gray-700 text-white font-bold py-1 px-2 rounded ml-1"
                >
                  Mostrar Detalles
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTableCategoryBusiness;