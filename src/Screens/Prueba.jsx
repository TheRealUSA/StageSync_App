import React, { useState, useEffect } from 'react';
import { getProfileBusinessById, getAllProfileBusinesses } from '../Services/profilebusinesses';

const Prueba = () => {
  const [selectedProfileBusiness, setSelectedProfileBusiness] = useState(null);
  const [profileBusinesses, setProfileBusinesses] = useState([]);

  const loadProfileBusinesses = async () => {
    try {
      const data = await getAllProfileBusinesses();
      setProfileBusinesses(data);
    } catch (error) {
      console.error('Error al cargar perfiles de negocio', error);
    }
  };

  const handleLoadProfileBusiness = async (id) => {
    try {
      const data = await getProfileBusinessById(id);
      setSelectedProfileBusiness(data);
    } catch (error) {
      console.error('Error al cargar los detalles del perfil de negocio', error);
    }
  };

  useEffect(() => {
    loadProfileBusinesses();
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Perfiles de Negocio</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {profileBusinesses.map((profileBusiness) => (
          <li
            key={profileBusiness.id}
            style={{
              border: '1px solid #ccc',
              margin: '10px',
              padding: '10px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span>
              {profileBusiness.business_name} - {profileBusiness.city}
            </span>
            <button onClick={() => handleLoadProfileBusiness(profileBusiness.id)}>Ver Detalles</button>
          </li>
        ))}
      </ul>

      {selectedProfileBusiness && (
        <div
          style={{
            backgroundColor: '#f0f0f0',
            border: '1px solid #ccc',
            padding: '10px',
            margin: '10px',
          }}
        >
          <h3 style={{ textAlign: 'center' }}>Detalles del Perfil de Negocio</h3>
          <p>
            <strong>Nombre del Negocio:</strong> {selectedProfileBusiness.business_name}
          </p>
          <p>
            <strong>Propietario:</strong> {selectedProfileBusiness.owner_name} {selectedProfileBusiness.owner_lastname1} {selectedProfileBusiness.owner_lastname2}
          </p>
          <p>
            <strong>Ubicación:</strong> {selectedProfileBusiness.city}, {selectedProfileBusiness.state}
          </p>
          <p>
            <strong>Dirección:</strong> {selectedProfileBusiness.address}
          </p>
          <p>
            <strong>Días de la Semana:</strong> {selectedProfileBusiness.days_of_the_week}
          </p>
          <p>
            <strong>Hora de Apertura:</strong> {selectedProfileBusiness.openingTime}
          </p>
          <p>
            <strong>Hora de Cierre:</strong> {selectedProfileBusiness.closingTime}
          </p>
          <p>
            <strong>Ruta del Avatar:</strong> {selectedProfileBusiness.avatar_route}
          </p>
          <p>
            <strong>Nombre del Archivo del Avatar:</strong> {selectedProfileBusiness.avatar_filename}
          </p>
          <p>
            <strong>Acerca de:</strong> {selectedProfileBusiness.about}
          </p>
          <p>
            <strong>Facebook:</strong> {selectedProfileBusiness.facebook}
          </p>
          <p>
            <strong>Instagram:</strong> {selectedProfileBusiness.instagram}
          </p>
          <p>
            <strong>Categoría del Negocio:</strong> {selectedProfileBusiness.category.name}
          </p>
        </div>
      )}
    </div>
  );
};

export default Prueba;
