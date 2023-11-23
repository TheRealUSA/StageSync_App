
import { data } from "autoprefixer";
import api from "../api/config";


export const signIn = async (loginData) => {
  try {
    const response = await api.post('/api/v1/auth/login', loginData);
    const { access_token } = response.data;
    localStorage.setItem("access_token", access_token);
    return {
      statusCode: response.status
    };
  } catch (error) {
    console.error('signIn - Error:', error);
    throw error;
  }
};

export const signUp = async (registerData) => {
  try {
    const response = await api.post('/api/v1/auth/login', registerData);
    return {
      data: response.data,
      statusCode: response.status
    };
  } catch (error) {
    console.error('signUp - Error:', error);
    throw error;
  }
};