import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { createCategorySkill, updateCategorySkill, getAllCategorySkills, getCategorySkillById, deleteCategorySkill } from '../../Services/categorySkills';
import { AiFillEdit, AiFillDelete, AiFillEye } from 'react-icons/ai';

const DataTableCategorySkills = () => {
  const [formData, setFormData] = useState({
    id: null,
    name: '',
  });

  const [categorySkills, setCategorySkills] = useState([]);
  const [creating, setCreating] = useState(true);
  const [selectedCategorySkill, setSelectedCategorySkill] = useState(null);
  const [containerVisible, setContainerVisible] = useState(false);
  const [filter, setFilter] = useState('');
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0);

  const fetchCategorySkills = async () => {
    try {
      const response = await getAllCategorySkills();
      setCategorySkills(response);
    } catch (error) {
      console.error('Error al obtener las categorías de habilidades', error);
    }
  };

  useEffect(() => {
    fetchCategorySkills();
  }, []);

  const handleCreateCategorySkill = async () => {
    try {
      const { id, ...newFormData } = formData;

      const newCategorySkill = await createCategorySkill(newFormData);
      fetchCategorySkills();
      clearForm();
    } catch (error) {
      console.error('Error al crear la categoría de habilidad', error);
    }
  };

  const handleUpdateCategorySkill = async () => {
    try {
      const { id, ...updateData } = formData;
      const updatedCategorySkill = await updateCategorySkill(formData.id, updateData);
      fetchCategorySkills();
      clearForm();
    } catch (error) {
      console.error('Error al actualizar la categoría de habilidad', error.response.data);
    }
  };

  const handleDeleteCategorySkill = async (id) => {
    try {
      await deleteCategorySkill(id);
      fetchCategorySkills();
      clearForm();
    } catch (error) {
      console.error('Error al eliminar la categoría de habilidad', error);
    }
  };

  const handleEditCategorySkill = async (categorySkill) => {
    try {
      const selected = await getCategorySkillById(categorySkill.id);
      setFormData({ ...selected });
      setSelectedCategorySkill(selected);
      setCreating(false);
      setContainerVisible(true);
    } catch (error) {
      console.error('Error al obtener los detalles de la categoría de habilidad', error);
    }
  };

  const clearForm = () => {
    setFormData({
      id: null,
      name: '',
    });
    setCreating(true);
    setSelectedCategorySkill(null);
  };
  
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };


  const filteredCategorySkills = categorySkills.filter(categorySkill =>
    categorySkill.name.toLowerCase().includes(filter.toLowerCase())
  );


  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCategorySkills.slice(indexOfFirstItem, indexOfLastItem);

  

  return (
    <div className="container mx-auto p-4">
      <form>
        <div className={`mt-4 ${containerVisible ? '' : 'hidden'}`}>
          <h2 className="text-2xl text-center">
            {creating ? 'Crear Categoría de habilidad' : 'Actualizar Categoría de habilidad'}
          </h2>
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
            <div className="mt-4">
              {creating ? (
                <button
                  type="button"
                  onClick={handleCreateCategorySkill}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Crear
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleUpdateCategorySkill}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Actualizar
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
          </div>
        </div>
      </form>

      <h2 className="text-2xl text-center mt-4 mb-4">Categorías de habilidades</h2>
      <div className="mt-4 flex justify-between items-center mb-2">
        <button
          type="button"
          onClick={() => setContainerVisible(!containerVisible)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {containerVisible ? 'Ocultar' : 'Agregar categoría'}
        </button>

        <input
          type="text"
          value={filter}
          onChange={handleFilterChange}
          placeholder="Filtrar por nombre"
          className="w-48 p-2 border rounded"
        />
      </div>
      <table className="w-full border-collapse border border-gray-300 shadow-md rounded-md">
        <thead>
          <tr className="bg-[#D1C6AE]">
            <th className="border border-gray-300 py-2 px-4 text-sm font-semibold uppercase">ID</th>
            <th className="border border-gray-300 py-2 px-4 text-sm font-semibold uppercase">Nombre</th>
            <th className="border border-gray-300 py-2 px-4 text-sm font-semibold uppercase">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((categorySkill, index) => (
            <tr key={categorySkill.id}>
              <td className="border border-gray-300 py-2 px-4 text-center">{index + 1}</td>
              <td className="border border-gray-300 py-2 px-4 text-center">{categorySkill.name}</td>
              <td className="border border-gray-300 py-2 px-4 text-center">
                <button
                  onClick={() => handleEditCategorySkill(categorySkill)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-1"
                >
                  <AiFillEdit />
                </button>
                <button
                  onClick={() => handleDeleteCategorySkill(categorySkill.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-1"
                >
                  <AiFillDelete />
                </button>
                <button
                  onClick={() => handleShowDetails(categorySkill)}
                  className="bg-gray-500 hover-bg-gray-700 text-white font-bold py-1 px-2 rounded ml-1"
                >
                  <AiFillEye />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        previousLabel={'Anterior'}
        nextLabel={'Siguiente'}
        breakLabel={'...'}
        pageCount={Math.ceil(filteredCategorySkills.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={'flex justify-center mt-4 space-x-2'}
        subContainerClassName={'flex items-center'}
        activeClassName={'bg-blue-500 text-white px-3 py-2 rounded-full'}
        pageClassName={'px-3 py-2 rounded-full bg-gray-200 text-gray-700'}
        previousClassName={'px-3 py-2 rounded-full bg-gray-200 text-gray-700'}
        nextClassName={'px-3 py-2 rounded-full bg-gray-200 text-gray-700'}
        breakClassName={'px-3 py-2 rounded-full bg-gray-200 text-gray-700'}
      />
    </div>
  );
};

export default DataTableCategorySkills;
