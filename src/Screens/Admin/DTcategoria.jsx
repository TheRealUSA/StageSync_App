import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { createCategoryBusiness, updateCategoryBusiness, deleteCategoryBusiness, getAllCategoryBusinesses, getCategoryBusinessById } from '../../Services/categorybusines';
import { AiFillEdit, AiFillDelete, AiFillEye } from 'react-icons/ai';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

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
  
      // Mostrar mensaje de éxito con SweetAlert2
      Swal.fire({
        title: '¡Creada!',
        text: 'La categoría de negocio ha sido creada con éxito.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
  
    } catch (error) {
      console.error('Error al crear la categoría de negocio', error);
  
      // Mostrar mensaje de error con SweetAlert2
      Swal.fire({
        title: 'Error',
        text: 'Hubo un error al crear la categoría de negocio.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    }
  };
  
  const handleUpdateCategoryBusines = async () => {
    try {
      const { id, ...updateData } = formData;
      const updatedCategoryBusines = await updateCategoryBusiness(formData.id, updateData);
      fetchCategoryBusiness();
      clearForm();
  
      // Mostrar mensaje de éxito con SweetAlert2
      Swal.fire({
        title: '¡Actualizada!',
        text: 'La categoría de negocio ha sido actualizada con éxito.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
  
    } catch (error) {
      console.error('Error al actualizar la categoría de negocio', error);
  
      // Mostrar mensaje de error con SweetAlert2
      Swal.fire({
        title: 'Error',
        text: 'Hubo un error al actualizar la categoría de negocio.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    }
  };
  

  const handleDeleteCategoryBusines = async (id) => {
    try {
      const result = await MySwal.fire({
        title: '¿Estás seguro?',
        text: '¡No podrás revertir esto!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminarlo',
        cancelButtonText: 'Cancelar',
      });
      if (result.isConfirmed) {
      await deleteCategoryBusiness(id);
      fetchCategoryBusiness();
      clearForm();
      MySwal.fire('Eliminado', 'La categoría ha sido eliminado.', 'success');
    }
  } catch (error) {
    console.error('Error al eliminar la categoría', error);
    MySwal.fire('Error', 'Hubo un error al eliminar la categoría.', 'error');
  }
};

  const handleEditCategoryBusines = async (categoryBusiness) => {
    try {
      const selected = await getCategoryBusinessById(categoryBusiness.id);
      setFormData({ ...selected });
      setSelectedCategoryBusiness(selected);
      setCreating(false);
      setContainerVisible(true);
    } catch (error) {
      console.error('Error al obtener los detalles de la categoria de negocio', error);
    }
  };

  const handleShowDetails = async (categoryBusiness) => {
    try {
      const selected = await getCategoryBusinessById(categoryBusiness.id);
      setFormData({ ...selected });
      setSelectedCategoryBusiness(selected);
      setContainerVisible(true);
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
    setSelectedCategoryBusiness(null);
  };


  const [containerVisible, setContainerVisible] = useState(false);

  const [filter, setFilter] = useState('');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredCategoryBusiness = categoryBusiness.filter(categoryBusines =>
    categoryBusines.name.toLowerCase().includes(filter.toLowerCase())
  );

  const itemsPerPage = 5; // Puedes ajustar esto según tus necesidades
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCategoryBusiness.slice(indexOfFirstItem, indexOfLastItem);


  return (
    <div className="container mx-auto p-4">
      <form>
      <div className={`mt-4 ${containerVisible ? '' : 'hidden'}`}>
      <h2 className="text-2xl text-center">{creating ? 'Crear categoría de negocio' : 'Actualizar categoría de negocio'}</h2>
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
              onClick={handleCreateCategoryBusines}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Crear
            </button>
          ) : (
            <button
              type="button"
              onClick={handleUpdateCategoryBusines}
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
  
      <h2 className="text-2xl text-center mt-4 mb-4">Categoría de negocios</h2>
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
          {currentItems.map((categoryBusines, index) => (
            <tr key={categoryBusines.id}>
              <td className="border border-gray-300 py-2 px-4 text-center">{index + 1}</td>
              <td className="border border-gray-300 py-2 px-4 text-center">{categoryBusines.name}</td>
              <td className="border border-gray-300 py-2 px-4 text-center">
                <button
                  onClick={() => handleEditCategoryBusines(categoryBusines)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-1"
                >
                  <AiFillEdit />
                </button>
                <button
                  onClick={() => handleDeleteCategoryBusines(categoryBusines.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-1"
                >
                  <AiFillDelete />
                </button>
                <button
                  onClick={() => handleShowDetails(categoryBusines)}
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
        pageCount={Math.ceil(filteredCategoryBusiness.length / itemsPerPage)}
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

export default DataTableCategoryBusiness;