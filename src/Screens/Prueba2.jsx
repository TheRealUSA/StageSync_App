import React, { useState, useEffect } from 'react';
import { createRecruitment, updateRecruitment, deleteRecruitment, getAllRecruitments } from '../Services/recruitments';

const Prueba2 = () => {
  const [formData, setFormData] = useState({
    id: null, // Nuevo campo para el ID del reclutamiento (para actualizaciones)
    date_hire: '',
    start_time: '',
    end_time: '',
    event_location: '',
    type_event: '',
    agreed_rate: '', // Dejamos esto como cadena
    payment_status: '',
    payment_date: '',
  });

  const [recruitments, setRecruitments] = useState([]); // Para mostrar la lista de reclutamientos
  const [creating, setCreating] = useState(true); // Para saber si estamos creando o actualizando

  const fetchRecruitments = async () => {
    try {
      const response = await getAllRecruitments();
      setRecruitments(response);
    } catch (error) {
      console.error('Error al obtener reclutamientos', error);
    }
  };

  useEffect(() => {
    fetchRecruitments();
  }, []); // Esto se ejecutará al cargar el componente

  const handleCreateRecruitment = async () => {
    try {
      const { id, ...newFormData } = formData; // Elimina el campo 'id'
      newFormData.agreed_rate = parseFloat(newFormData.agreed_rate);
  
      const newRecruitment = await createRecruitment(newFormData);
      // Actualiza la lista de reclutamientos
      fetchRecruitments();
      clearForm();
    } catch (error) {
      console.error('Error al crear reclutamiento', error);
    }
  };

  const handleUpdateRecruitment = async () => {
    try {
      const updatedRecruitment = await updateRecruitment(formData.id, formData);
      // Actualiza la lista de reclutamientos
      fetchRecruitments();
      clearForm();
    } catch (error) {
      console.error('Error al actualizar el reclutamiento', error);
    }
  };

  const handleDeleteRecruitment = async (id) => {
    try {
      await deleteRecruitment(id);
      // Actualiza la lista de reclutamientos
      fetchRecruitments();
      clearForm();
    } catch (error) {
      console.error('Error al eliminar el reclutamiento', error);
    }
  };

  const handleEditRecruitment = (recruitment) => {
    setFormData({
      id: recruitment.id,
      date_hire: recruitment.date_hire,
      start_time: recruitment.start_time,
      end_time: recruitment.end_time,
      event_location: recruitment.event_location,
      type_event: recruitment.type_event,
      agreed_rate: recruitment.agreed_rate.toString(),
      payment_status: recruitment.payment_status,
      payment_date: recruitment.payment_date,
    });
    setCreating(false);
  };

  const clearForm = () => {
    setFormData({
      id: null,
      date_hire: '',
      start_time: '',
      end_time: '',
      event_location: '',
      type_event: '',
      agreed_rate: '',
      payment_status: '',
      payment_date: '',
    });
    setCreating(true);
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>{creating ? 'Crear Reclutamiento' : 'Actualizar Reclutamiento'}</h2>
    
      <form>
  <div>
    <label>Fecha de Contratación</label>
    <input
      type="date"
      value={formData.date_hire}
      onChange={(e) => setFormData({ ...formData, date_hire: e.target.value })}
    />
  </div>
  <div>
    <label>Hora de Inicio</label>
    <input
      type="time"
      value={formData.start_time}
      onChange={(e) => setFormData({ ...formData, start_time: e.target.value })}
    />
  </div>
  <div>
    <label>Hora de Finalización</label>
    <input
      type="time"
      value={formData.end_time}
      onChange={(e) => setFormData({ ...formData, end_time: e.target.value })}
    />
  </div>
  <div>
    <label>Ubicación del Evento</label>
    <input
      type="text"
      value={formData.event_location}
      onChange={(e) => setFormData({ ...formData, event_location: e.target.value })}
    />
  </div>
  <div>
    <label>Tipo de Evento</label>
    <input
      type="text"
      value={formData.type_event}
      onChange={(e) => setFormData({ ...formData, type_event: e.target.value })}
    />
  </div>
  <div>
    <label>Tarifa Acordada</label>
    <input
      type="text"
      placeholder="Mantenido como texto para el valor predeterminado"
      value={formData.agreed_rate}
      onChange={(e) => setFormData({ ...formData, agreed_rate: e.target.value })}
    />
  </div>
  <div>
    <label>Estado de Pago</label>
    <input
      type="text"
      value={formData.payment_status}
      onChange={(e) => setFormData({ ...formData, payment_status: e.target.value })}
    />
  </div>
  <div>
    <label>Fecha de Pago</label>
    <input
      type="date"
      value={formData.payment_date}
      onChange={(e) => setFormData({ ...formData, payment_date: e.target.value })}
    />
  </div>
  {creating ? (
    <button type="button" onClick={handleCreateRecruitment}>
      Crear Reclutamiento
    </button>
  ) : (
    <button type="button" onClick={handleUpdateRecruitment}>
      Actualizar Reclutamiento
    </button>
  )}
  <button type="button" onClick={clearForm}>
    Limpiar
  </button>
</form>


      <h2 style={{ textAlign: 'center' }}>Reclutamientos</h2>
      <ul>
        {recruitments.map((recruitment) => (
          <li key={recruitment.id}>
            {recruitment.date_hire} - {recruitment.event_location}
            <button onClick={() => handleEditRecruitment(recruitment)}>Editar</button>
            <button onClick={() => handleDeleteRecruitment(recruitment.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Prueba2;