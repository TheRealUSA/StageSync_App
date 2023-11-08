import React, { useState, useEffect } from 'react';
import { createRecruitment, updateRecruitment, deleteRecruitment, getAllRecruitments, getRecruitmentById } from '../Services/recruitments';

const Prueba2 = () => {
  const [formData, setFormData] = useState({
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

  const [recruitments, setRecruitments] = useState([]);
  const [creating, setCreating] = useState(true);
  const [selectedRecruitment, setSelectedRecruitment] = useState(null);

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
  }, []);

  const handleCreateRecruitment = async () => {
    try {
      const { id, ...newFormData } = formData;
      newFormData.agreed_rate = parseFloat(newFormData.agreed_rate);

      const newRecruitment = await createRecruitment(newFormData);
      fetchRecruitments();
      clearForm();
    } catch (error) {
      console.error('Error al crear reclutamiento', error);
    }
  };

  const handleUpdateRecruitment = async () => {
    try {
      const updatedRecruitment = await updateRecruitment(formData.id, formData);
      fetchRecruitments();
      clearForm();
    } catch (error) {
      console.error('Error al actualizar el reclutamiento', error);
    }
  };

  const handleDeleteRecruitment = async (id) => {
    try {
      await deleteRecruitment(id);
      fetchRecruitments();
      clearForm();
    } catch (error) {
      console.error('Error al eliminar el reclutamiento', error);
    }
  };

  const handleEditRecruitment = async (recruitment) => {
    try {
      const selected = await getRecruitmentById(recruitment.id);
      setFormData({ ...selected });
      setSelectedRecruitment(selected);
      setCreating(false);
    } catch (error) {
      console.error('Error al obtener los detalles del reclutamiento', error);
    }
  };

  const handleShowDetails = async (recruitment) => {
    try {
      const selected = await getRecruitmentById(recruitment.id);
      setFormData({ ...selected });
      setSelectedRecruitment(selected);
    } catch (error) {
      console.error('Error al obtener los detalles del reclutamiento', error);
    }
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
    setSelectedRecruitment(null);
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
            <button onClick={() => handleShowDetails(recruitment)}> Mostrar Detalles</button>
          </li>
        ))}
      </ul>

    
    </div>
  );
};

export default Prueba2;
