import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { createReview, updateReview, deleteReview, getAllReviews, getReviewById } from '../../Services/reviews';
import { AiFillEdit, AiFillDelete, AiFillEye } from 'react-icons/ai';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const DataTableReview = () => {
  const [formData, setFormData] = useState({
    id: null,
    description: '',
    review: 1,
  });

  const [reviews, setReviews] = useState([]);
  const [creating, setCreating] = useState(true);
  const [selectedReview, setSelectedReviews] = useState(null);

  const fetchReviews = async () => {
    try {
      const response = await getAllReviews();
      setReviews(response);
    } catch (error) {
      console.error('Error al obtener la categoria de negocio', error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleCreateReview = async () => {
    try {
      const { id, ...newFormData } = formData;
      const newReview = await createReview(newFormData);
      console.log('Respuesta del servidor:', newReview);
      fetchReviews();
      clearForm();
  
      // Mostrar mensaje de éxito con SweetAlert2
      Swal.fire({
        title: '¡Creado!',
        text: 'La reseña ha sido creada con éxito.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
  
    } catch (error) {
      console.error('Error al crear la reseña', error);
  
      // Mostrar mensaje de error con SweetAlert2
      Swal.fire({
        title: 'Error',
        text: 'Hubo un error al crear la reseña.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    }
  };
  
  const handleUpdateReview = async () => {
    try {
      const { id, ...updateData } = formData;
      const updatedReview = await updateReview(formData.id, updateData);
      fetchReviews();
      clearForm();
  
      // Mostrar mensaje de éxito con SweetAlert2
      Swal.fire({
        title: '¡Actualizado!',
        text: 'La reseña ha sido actualizada con éxito.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
  
    } catch (error) {
      console.error('Error al actualizar la reseña', error);
  
      // Mostrar mensaje de error con SweetAlert2
      Swal.fire({
        title: 'Error',
        text: 'Hubo un error al actualizar la reseña.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    }
  }; 

  const handleDeleteReview = async (id) => {
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
      await deleteReview(id);
      fetchReviews();
      clearForm();
      MySwal.fire('Eliminado', 'La reseña ha sido eliminado.', 'success');
    }
  } catch (error) {
    console.error('Error al eliminar la reseña', error);
    MySwal.fire('Error', 'Hubo un error al eliminar la reseña.', 'error');
  }
};
  const handleEditReview = async (reviews) => {
    try {
      const selected = await getReviewById(reviews.id);
      setFormData({ ...selected });
      setSelectedReviews(selected);
      setCreating(false);
      setContainerVisible(true);
    } catch (error) {
      console.error('Error al obtener los detalles de la categoria de negocio', error);
    }
  };

  const handleShowDetails = async (review) => {
    try {
      const selected = await getReviewById(review.id);
      setFormData({ ...selected });
      setSelectedReviews(selected);
      setContainerVisible(true);
    } catch (error) {
      console.error('Error al obtener los detalles del reclutamiento', error);
    }
  };

  const clearForm = () => {
    setFormData({
      id: null,
      description: '',
      review: 1,
    });
    setCreating(true);
    setSelectedReviews(null);
  };

  const [containerVisible, setContainerVisible] = useState(false);

  const [filter, setFilter] = useState('');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredReviews = reviews.filter(review =>
    review.description.toLowerCase().includes(filter.toLowerCase())
  );

  const itemsPerPage = 5; // Puedes ajustar esto según tus necesidades
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredReviews.slice(indexOfFirstItem, indexOfLastItem);



  return (
    <div className="container mx-auto p-4">
      <form>
        <div className={`mt-4 ${containerVisible ? '' : 'hidden'}`}>
          <h2 className="text-2xl text-center">{creating ? 'Crear Revisión' : 'Actualizar Revisión'}</h2>
          <div className="p-4 bg-white shadow-md rounded-md grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label htmlFor="description" className="block font-medium text-gray-700">Description</label>
              <input
                type="text"
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="review" className="block font-medium text-gray-700">Revisión</label>
              <input
                type="number"
                id="review"
                value={formData.review}
                onChange={(e) => setFormData({ ...formData, review: parseInt(e.target.value, 10) })}
                min="1"
                max="5"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mt-4">
              {creating ? (
                <button
                  type="button"
                  onClick={handleCreateReview}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Crear
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleUpdateReview}
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

      <h2 className="text-2xl text-center mt-4 mb-4">Revisión</h2>
      <div className="mt-4 flex justify-between items-center mb-2">
        <button
          type="button"
          onClick={() => setContainerVisible(!containerVisible)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {containerVisible ? 'Ocultar' : 'Agregar revisión'}
        </button>

        <input
          type="text"
          value={filter}
          onChange={handleFilterChange}
          placeholder="Filtrar por descripción"
          className="w-48 p-2 border rounded"
        />
      </div>
      <table className="w-full border-collapse border border-gray-300 shadow-md rounded-md">
        <thead>
          <tr className="bg-[#D1C6AE]">
          <th className="border border-gray-300 py-2 px-4 text-sm font-semibold uppercase">ID</th>
            <th className="border border-gray-300 py-2 px-4 text-sm font-semibold uppercase">Descripcion</th>
            <th className="border border-gray-300 py-2 px-4 text-sm font-semibold uppercase">Revisión</th>
            <th className="border border-gray-300 py-2 px-4 text-sm font-semibold uppercase">Acciones</th>
          </tr>
        </thead>
        <tbody>



          {currentItems.map((review, index) => (
            <tr key={review.id}>
              <td className="border border-gray-300 py-2 px-4 text-center">{index + 1}</td>
              <td className="border border-gray-300 py-2 px-4 text-center">{review.description}</td>
              <td className="border border-gray-300 py-2 px-4 text-center">{review.review}</td>
              <td className="border border-gray-300 py-2 px-4 text-center">
                <button
                  onClick={() => handleEditReview(review)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-1"
                >
                  <AiFillEdit />
                </button>
                <button
                  onClick={() => handleDeleteReview(review.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-1"
                >
                  <AiFillDelete />
                </button>
                <button
                  onClick={() => handleShowDetails(review)}
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
        pageCount={Math.ceil(filteredReviews.length / itemsPerPage)}
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

export default DataTableReview;