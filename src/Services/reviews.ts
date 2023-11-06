import api from "../api/config";

export const getAllReviews = async () => {
  try {
    const response = await api.get('/api/v1/reviews');
    console.log('getAllReviews - Datos recuperados:', response.data);
    return response.data;
  } catch (error) {
    console.error('getAllReviews - Error:', error);
    throw error;
  }
};

export const getReviewById = async (id) => {
  try {
    const response = await api.get(`/api/v1/reviews/${id}`);
    console.log('getReviewById - Datos recuperados:', response.data);
    return response.data;
  } catch (error) {
    console.error('getReviewById - Error:', error);
    throw error;
  }
};

export const createReview = async (newReview) => {
  try {
    const response = await api.post('/api/v1/reviews', newReview);
    console.log('createReview - Datos recuperados:', response.data);
    return response.data;
  } catch (error) {
    console.error('createReview - Error:', error);
    throw error;
  }
};

export const updateReview = async (id, updatedReview) => {
  try {
    const response = await api.patch(`/api/v1/reviews/${id}`, updatedReview);
    console.log('updateReview - Datos actualizados:', response.data);
    return response.data;
  } catch (error) {
    console.error('updateReview - Error:', error);
    throw error;
  }
};

export const deleteReview = async (id) => {
  try {
    const response = await api.delete(`/api/v1/reviews/${id}`);
    console.log('deleteReview - Reseña eliminada');
    return response.data;
  } catch (error) {
    console.error('deleteReview - Error:', error);
    throw error;
  }
};
