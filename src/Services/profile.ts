import api from "../api/config";

export const getAllProfiles = async () => {
  try {
    const response = await api.get('/api/v1/profile');
    console.log('getAllProfile - Datos recuperados:', response.data);
    return response.data;
  } catch (error) {
    console.error('getAllProfile - Error:', error);
    throw error;
  }
};

export const getCategorySkillById = async (id) => {
  try {
    const response = await api.get(`/api/v1/profile/${id}`);
    console.log('getProfileById - Datos recuperados:', response.data);
    return response.data;
  } catch (error) {
    console.error('getProfileById - Error:', error);
    throw error;
  }
};

export const createCategorySkill = async (newProfile) => {
  try {
    const response = await api.post('/api/v1/profile', newProfile);
    console.log('createProfile - Datos recuperados:', response.data);
    return response.data;
  } catch (error) {
    console.error('createProfile - Error:', error);
    throw error;
  }
};

export const updateCategorySkill = async (id, updatedProfile) => {
  try {
    const response = await api.patch(`/api/v1/profile/${id}`, updatedProfile);
    console.log('updateProfile - Datos actualizados:', response.data);
    return response.data;
  } catch (error) {
    console.error('updateProfile - Error:', error);
    throw error;
  }
};

export const deleteProfile = async (id) => {
  try {
    const response = await api.delete(`/api/v1/profile/${id}`);
    console.log('deleteProfile - Perfil eliminado');
    return response.data;
  } catch (error) {
    console.error('deleteProfile - Error:', error);
    throw error;
  }
};
