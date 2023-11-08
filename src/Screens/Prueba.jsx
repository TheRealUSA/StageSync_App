import React, { useState, useEffect } from 'react';
import { getAllRecruitments, getRecruitmentById } from '../Services/recruitments';

const Prueba = () => {
  const [selectedRecruitment, setSelectedRecruitment] = useState(null);
  const [recruitments, setRecruitments] = useState([]);

  const loadRecruitments = async () => {
    try {
      const data = await getAllRecruitments();
      setRecruitments(data);
    } catch (error) {
      console.error('Error al cargar reclutamientos', error);
    }
  };

  const handleLoadRecruitment = async (id) => {
    try {
      const data = await getRecruitmentById(id);
      setSelectedRecruitment(data);
    } catch (error) {
      console.error('Error al cargar los detalles del reclutamiento', error);
    }
  };

  useEffect(() => {
    loadRecruitments();
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Reclutamientos</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {recruitments.map((recruitment) => (
          <li
            key={recruitment.id}
            style={{
              border: '1px solid #ccc',
              margin: '10px',
              padding: '10px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span>
              {recruitment.date_hire} - {recruitment.event_location}
            </span>
            <button onClick={() => handleLoadRecruitment(recruitment.id)}>Ver Detalles</button>
          </li>
        ))}
      </ul>

      {selectedRecruitment && (
        <div
          style={{
            backgroundColor: '#f0f0f0',
            border: '1px solid #ccc',
            padding: '10px',
            margin: '10px',
          }}
        >
          <h3 style={{ textAlign: 'center' }}>Detalles del Reclutamiento</h3>
          <p>
            <strong>Fecha de Contratación:</strong> {selectedRecruitment.date_hire}
          </p>
          <p>
            <strong>Hora de Inicio:</strong> {selectedRecruitment.start_time}
          </p>
          <p>
            <strong>Hora de Finalización:</strong> {selectedRecruitment.end_time}
          </p>
          <p>
            <strong>Ubicación del Evento:</strong> {selectedRecruitment.event_location}
          </p>
          <p>
            <strong>Tipo de Evento:</strong> {selectedRecruitment.type_event}
          </p>
          <p>
            <strong>Tarifa Acordada:</strong> {selectedRecruitment.agreed_rate}
          </p>
          <p>
            <strong>Fecha de Pago:</strong> {selectedRecruitment.payment_date}
          </p>
          <p>
            <strong>Estado de Pago:</strong> {selectedRecruitment.payment_status}
          </p>
          {selectedRecruitment.musicianId && (
            <p>
              <strong>ID del Músico:</strong> {selectedRecruitment.musicianId}
            </p>
          )}
          {selectedRecruitment.contractorId && (
            <p>
              <strong>ID del Contratista:</strong> {selectedRecruitment.contractorId}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Prueba;
