import React, { useState, useEffect } from 'react';
import { createRecruitment, updateRecruitment, deleteRecruitment, getAllRecruitments, getRecruitmentById } from '../../Services/recruitments';

const DataTablereclutamiento = () => {
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
    <div className="container mx-auto p-4">
      <h2 className="text-2xl text-center">{creating ? 'Crear Reclutamiento' : 'Actualizar Reclutamiento'}</h2>
      <form>
        <div className="mt-4 p-4 bg-white shadow-md rounded-md grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="date_hire" className="block font-medium text-gray-700">Fecha de Contratación</label>
            <input
              type="date"
              id="date_hire"
              value={formData.date_hire}
              onChange={(e) => setFormData({ ...formData, date_hire: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="start_time" className="block font-medium text-gray-700">Hora de Inicio</label>
            <input
              type="time"
              id="start_time"
              value={formData.start_time}
              onChange={(e) => setFormData({ ...formData, start_time: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="end_time" className="block font-medium text-gray-700">Hora de Finalización</label>
            <input
              type="time"
              id="end_time"
              value={formData.end_time}
              onChange={(e) => setFormData({ ...formData, end_time: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="event_location" className="block font-medium text-gray-700">Ubicación del Evento</label>
            <input
              type="text"
              id="event_location"
              value={formData.event_location}
              onChange={(e) => setFormData({ ...formData, event_location: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="type_event" className="block font-medium text-gray-700">Tipo de Evento</label>
            <input
              type="text"
              id="type_event"
              value={formData.type_event}
              onChange={(e) => setFormData({ ...formData, type_event: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="agreed_rate" className="block font-medium text-gray-700">Tarifa Acordada</label>
            <input
              type="text"
              id="agreed_rate"
              value={formData.agreed_rate}
              onChange={(e) => setFormData({ ...formData, agreed_rate: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="payment_status" className="block font-medium text-gray-700">Estado de Pago</label>
            <input
              type="text"
              id="payment_status"
              value={formData.payment_status}
              onChange={(e) => setFormData({ ...formData, payment_status: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="payment_date" className="block font-medium text-gray-700">Fecha de Pago</label>
            <input
              type="date"
              id="payment_date"
              value={formData.payment_date}
              onChange={(e) => setFormData({ ...formData, payment_date: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
        <div className="mt-4">
          {creating ? (
            <button
              type="button"
              onClick={handleCreateRecruitment}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Crear Reclutamiento
            </button>
          ) : (
            <button
              type="button"
              onClick={handleUpdateRecruitment}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Actualizar Reclutamiento
            </button>
          )}
          <button
            type="button"
            onClick={clearForm}
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded ml-2"
          >
            Limpiar
          </button>
        </div>
      </form>
  
      <h2 className="text-2xl text-center mt-4 mb-4">Reclutamientos</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-[#D1C6AE]">
            <th className="border border-gray-300 py-2 px-4">Fecha de Contratación</th>
            <th className="border border-gray-300 py-2 px-4">Ubicación del Evento</th>
            <th className="border border-gray-300 py-2 px-4">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {recruitments.map((recruitment) => (
            <tr key={recruitment.id}>
              <td className="border border-gray-300 py-2 px-4 text-center">{recruitment.date_hire}</td>
              <td className="border border-gray-300 py-2 px-4 text-center">{recruitment.event_location}</td>
              <td className="border border-gray-300 py-2 px-4 text-center">
                <button
                  onClick={() => handleEditRecruitment(recruitment)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-1"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDeleteRecruitment(recruitment.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-1"
                >
                  Eliminar
                </button>
                <button
                  onClick={() => handleShowDetails(recruitment)}
                  className="bg-gray-500 hover-bg-gray-700 text-white font-bold py-1 px-2 rounded ml-1"
                >
                  Mostrar Detalles
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTablereclutamiento;