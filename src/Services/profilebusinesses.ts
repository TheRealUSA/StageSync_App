// Importa la configuración de Axios desde el archivo TypeScript config.ts
import api from "../api/config";

export const getAllProfileBusinesses = async () => {
  try {
    const response = await api.get('/api/v1/profile-businesses');
    console.log('getAllProfileBusinesses - Datos recuperados:', response.data); // Agregar esta línea para la depuración
    return response.data;
  } catch (error) {
    console.error('getAllProfileBusinesses - Error:', error); // Agregar esta línea para el manejo de errores
    throw error;
  }
};

export const getProfileBusinessById = async (id) => {
  try {
    const response = await api.get(`/api/v1/profile-businesses/${id}`);
    console.log('getProfileBusinessById - Datos recuperados:', response.data); // Agregar esta línea para la depuración
    return response.data;
  } catch (error) {
    console.error('getProfileBusinessById - Error:', error); // Agregar esta línea para el manejo de errores
    throw error;
  }
};

export const createProfileBusiness = async (profileBusinessData) => {
  try {
    const response = await api.post('/api/v1/profile-businesses', profileBusinessData);
    console.log('createProfileBusiness - Datos recuperados:', response.data);
    return response.data;
  } catch (error) {
    console.error('createProfileBusiness - Error:', error);
    throw error;
  }
};

export const updateProfileBusiness = async (id, updatedProfileData) => {
  try {
    const response = await api.patch(`/api/v1/profile-businesses/${id}`, updatedProfileData);
    console.log('updateProfileBusiness - Datos actualizados:', response.data);
    return response.data;
  } catch (error) {
    console.error('updateProfileBusiness - Error:', error);
    throw error;
  }
};

export const deleteProfileBusiness = async (id) => {
  try {
    const response = await api.delete(`/api/v1/profile-businesses/${id}`);
    console.log('deleteProfileBusiness - Perfil eliminado');
    return response.data;
  } catch (error) {
    console.error('deleteProfileBusiness - Error:', error);
    throw error;
  }
};