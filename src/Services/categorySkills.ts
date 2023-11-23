import api from "../api/config";

export const getAllCategorySkills = async () => {
  try {
    const response = await api.get('/api/v1/category-skills');
    console.log('getAllCategorySkills - Datos recuperados:', response.data);
    return response.data;
  } catch (error) {
    console.error('getAllCategorySkills - Error:', error);
    throw error;
  }
};

export const getCategorySkillById = async (id) => {
  try {
    const response = await api.get(`/api/v1/category-skills/${id}`);
    console.log('getCategorySkillsById - Datos recuperados:', response.data);
    return response.data;
  } catch (error) {
    console.error('getCategorySkillsById - Error:', error);
    throw error;
  }
};

export const createCategorySkill = async (newCategorySkills) => {
  try {
    const response = await api.post('/api/v1/category-skills', newCategorySkills);
    console.log('createCategorySkills - Datos recuperados:', response.data);
    return response.data;
  } catch (error) {
    console.error('createCategorySkills - Error:', error);
    throw error;
  }
};

export const updateCategorySkill = async (id, updatedCategorySkills) => {
  try {
    const response = await api.patch(`/api/v1/category-skills/${id}`, updatedCategorySkills);
    console.log('updateCategorySkills - Datos actualizados:', response.data);
    return response.data;
  } catch (error) {
    console.error('updateCategorySkills - Error:', error);
    throw error;
  }
};

export const deleteCategorySkill = async (id) => {
  try {
    const response = await api.delete(`/api/v1/category-skills/${id}`);
    console.log('deleteCategorySkills - Categoría de negocio eliminada');
    return response.data;
  } catch (error) {
    console.error('deleteCategorySkills - Error:', error);
    throw error;
  }
};
