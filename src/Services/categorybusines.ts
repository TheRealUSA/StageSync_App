import api from "../api/config";

export const getAllCategoryBusinesses = async () => {
  try {
    const response = await api.get('/api/v1/category-business');
    console.log('getAllCategoryBusinesses - Datos recuperados:', response.data);
    return response.data;
  } catch (error) {
    console.error('getAllCategoryBusinesses - Error:', error);
    throw error;
  }
};

export const getCategoryBusinessById = async (id) => {
  try {
    const response = await api.get(`/api/v1/category-business/${id}`);
    console.log('getCategoryBusinessById - Datos recuperados:', response.data);
    return response.data;
  } catch (error) {
    console.error('getCategoryBusinessById - Error:', error);
    throw error;
  }
};

export const createCategoryBusiness = async (newCategoryBusiness) => {
  try {
    const response = await api.post('/api/v1/category-business', newCategoryBusiness);
    console.log('createCategoryBusiness - Datos recuperados:', response.data);
    return response.data;
  } catch (error) {
    console.error('createCategoryBusiness - Error:', error);
    throw error;
  }
};

export const updateCategoryBusiness = async (id, updatedCategoryBusiness) => {
  try {
    const response = await api.patch(`/api/v1/category-business/${id}`, updatedCategoryBusiness);
    console.log('updateCategoryBusiness - Datos actualizados:', response.data);
    return response.data;
  } catch (error) {
    console.error('updateCategoryBusiness - Error:', error);
    throw error;
  }
};

export const deleteCategoryBusiness = async (id) => {
  try {
    const response = await api.delete(`/api/v1/category-business/${id}`);
    console.log('deleteCategoryBusiness - Categoría de negocio eliminada');
    return response.data;
  } catch (error) {
    console.error('deleteCategoryBusiness - Error:', error);
    throw error;
  }
};
