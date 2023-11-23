import api from "../api/config";

export const getAllSkills = async () => {
  try {
    const response = await api.get('/api/v1/skills');
    console.log('getAllSkills - Datos recuperados:', response.data);
    return response.data;
  } catch (error) {
    console.error('getAllSkills - Error:', error);
    throw error;
  }
};

export const getSkillById = async (id) => {
  try {
    const response = await api.get(`/api/v1/skills/${id}`);
    console.log('getSkillsById - Datos recuperados:', response.data);
    return response.data;
  } catch (error) {
    console.error('getSkillsById - Error:', error);
    throw error;
  }
};

export const createSkill = async (newSkills) => {
  try {
    const response = await api.post('/api/v1/skills', newSkills);
    console.log('createSkills - Datos recuperados:', response.data);
    return response.data;
  } catch (error) {
    console.error('createSkills - Error:', error);
    throw error;
  }
};

export const updateSkill = async (id, updatedSkills) => {
  try {
    const response = await api.patch(`/api/v1/skills/${id}`, updatedSkills);
    console.log('updateSkills - Datos actualizados:', response.data);
    return response.data;
  } catch (error) {
    console.error('updateSkills - Error:', error);
    throw error;
  }
};

export const deleteSkill = async (id) => {
  try {
    const response = await api.delete(`/api/v1/skills/${id}`);
    console.log('deleteSkills - Categoría de negocio eliminada');
    return response.data;
  } catch (error) {
    console.error('deleteSkills - Error:', error);
    throw error;
  }
};
