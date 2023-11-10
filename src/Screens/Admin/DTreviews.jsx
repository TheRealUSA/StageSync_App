import React, { useState, useEffect } from 'react';
import { createReview, updateReview, deleteReview, getAllReviews, getReviewById } from '../../Services/reviews';

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
      newFormData.description = parseFloat(newFormData.description);
      const newReview = await createReview(newFormData);
      console.log('Respuesta del servidor:', newReview);
      fetchReviews();
      clearForm();
    } catch (error) {
      console.error('Error al crear la categoria de negocio', error);
    }
  };

  const handleUpdateReview = async () => {
    try {
      const updatedReview = await updateReview(formData.id, formData);
      fetchReviews();
      clearForm();
    } catch (error) {
      console.error('Error al actualizar la categoria de negocio', error);
    }
  };

  const handleDeleteReview = async (id) => {
    try {
      await deleteReview(id);
      fetchReviews();
      clearForm();
    } catch (error) {
      console.error('Error al eliminar la categoria de negocio', error);
    }
  };

  const handleEditReview = async (reviews) => {
    try {
      const selected = await getReviewById(reviews.id);
      setFormData({ ...selected });
      setSelectedReviews(selected);
      setCreating(false);
    } catch (error) {
      console.error('Error al obtener los detalles de la categoria de negocio', error);
    }
  };

  const handleShowDetails = async (review) => {
    try {
      const selected = await getReviewById(review.id);
      setFormData({ ...selected });
      setSelectedReviews(selected);
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

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl text-center">{creating ? 'Crear Revisión' : 'Actualizar Revisión'}</h2>
      <form>
        <div className="mt-4 p-4 bg-white shadow-md rounded-md grid grid-cols-2 gap-4">
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
              onChange={(e) => setFormData({ ...formData, review: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
        <div className="mt-4">
          {creating ? (
            <button
              type="button"
              onClick={handleCreateReview}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Crear Revisión
            </button>
          ) : (
            <button
              type="button"
              onClick={handleUpdateReview}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Actualizar Revisión
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
  
      <h2 className="text-2xl text-center mt-4 mb-4">Revisión</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-[#D1C6AE]">
            <th className="border border-gray-300 py-2 px-4">Descripcion</th>
            <th className="border border-gray-300 py-2 px-4">Revisión</th>
            <th className="border border-gray-300 py-2 px-4">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <tr key={review.id}>
              <td className="border border-gray-300 py-2 px-4 text-center">{review.description}</td>
              <td className="border border-gray-300 py-2 px-4 text-center">{review.review}</td>
              <td className="border border-gray-300 py-2 px-4 text-center">
                <button
                  onClick={() => handleEditReview(review)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-1"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDeleteReview(review.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-1"
                >
                  Eliminar
                </button>
                <button
                  onClick={() => handleShowDetails(review)}
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

export default DataTableReview;