import React, { useEffect } from 'react';
import jwt from 'jsonwebtoken';

export const TokenDecoder = () => {
  useEffect(() => {
    const token = localStorage.getItem('access_token'); 

    const decodeToken = (token) => {
      try {
        const decoded = jwt.decode(token); 
        return decoded;
      } catch (error) {
        console.error('Error al decodificar el token:', error.message);
        return null;
      }
    };
    if (token) {
      const decodedToken = decodeToken(token);
      if (decodedToken) {
        console.log('Token decodificado:', decodedToken);
      } else {
        console.log('No se pudo decodificar el token');
      }
    } else {
      console.log('No se encontró el token en el localStorage');
    }
  }, []);
};

export default TokenDecoder;
