import api from "../api/config";

export const getAllRecruitments = async () => {
  try {
    const response = await api.get('/api/v1/recruitments');
    console.log('getAllRecruitments - Datos recuperados:', response.data);
    return response.data;
  } catch (error) {
    console.error('getAllRecruitments - Error:', error);
    throw error;
  }
};

export const getRecruitmentById = async (id) => {
  try {
    const response = await api.get(`/api/v1/recruitments/${id}`);
    console.log('getRecruitmentById - Datos recuperados:', response.data);
    return response.data;
  } catch (error) {
    console.error('getRecruitmentById - Error:', error);
    throw error;
  }
};

export const createRecruitment = async (newRecruitment) => {
  try {
    const response = await api.post('/api/v1/recruitments', newRecruitment);
    console.log('createRecruitment - Datos recuperados:', response.data);
    return response.data;
  } catch (error) {
    console.error('createRecruitment - Error:', error);
    throw error;
  }
};

export const updateRecruitment = async (id, updatedRecruitment) => {
  try {
    const response = await api.patch(`/api/v1/recruitments/${id}`, updatedRecruitment);
    console.log('updateRecruitment - Datos actualizados:', response.data);
    return response.data;
  } catch (error) {
    console.error('updateRecruitment - Error:', error);
    throw error;
  }
};

export const deleteRecruitment = async (id) => {
  try {
    const response = await api.delete(`/api/v1/recruitments/${id}`);
    console.log('deleteRecruitment - Reclutamiento eliminado');
    return response.data;
  } catch (error) {
    console.error('deleteRecruitment - Error:', error);
    throw error;
  }
};
