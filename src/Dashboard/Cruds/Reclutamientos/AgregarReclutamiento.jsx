import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createRecruitment, getAllRecruitments } from '../../../Services/recruitments';

const AgregarReclutamiento = () => {
  //const [contractor, setContractor] = useState({
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigate = useNavigate();
  const BackClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate('/Dashboard/Contratantes');
  };

  //const handleSubmit = (e) => {
   // e.preventDefault();
    // Aquí puedes enviar los datos del músico a tu backend o hacer lo que necesites con ellos.
    //console.log('Datos del contratante:', contractor);
    // Luego, puedes redirigir o realizar otras acciones según tus necesidades.
  //};

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
      <h1 className="text-2xl font-semibold mb-4">Agregar Contratante</h1>
      <form >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label htmlFor="date_hire" className="block text-sm font-medium text-gray-700">
              Fecha de evento:
            </label>
            <input
              type="date"
              id="date_hire"
              name="datedate_hireHire"
              value={formData.date_hire}
              onChange={(e) => setFormData({ ...formData, date_hire: e.target.value })}
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="start_time" className="block text-sm font-medium text-gray-700">
              Hora de inicio:
            </label>
            <input
              type="time"
              id="start_time"
              name="start_time"
              value={formData.start_time}
              onChange={(e) => setFormData({ ...formData, start_time: e.target.value })}
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="end_time" className="block text-sm font-medium text-gray-700">
              Hora final:
            </label>
            <input
              type="time"
              id="end_time"
              name="end_time"
              value={formData.end_time}
              onChange={(e) => setFormData({ ...formData, end_time: e.target.value })}
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="event_location" className="block text-sm font-medium text-gray-700">
              Ubicación del evento:
            </label>
            <input
              type="text"
              id="event_location"
              name="event_location"
              value={formData.event_location}
              onChange={(e) => setFormData({ ...formData, event_location: e.target.value })}
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="type_event" className="block text-sm font-medium text-gray-700">
              Tipo de evento:
            </label>
            <input
              type="text"
              id="type_event"
              name="type_event"
              value={formData.type_event}
              onChange={(e) => setFormData({ ...formData, type_event: e.target.value })}
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="agreed_rate" className="block text-sm font-medium text-gray-700">
              Tarifa acordada:
            </label>
            <input
              type="text"
              id="agreed_rate"
              name="agreed_rate"
              value={formData.agreed_rate}
              onChange={(e) => setFormData({ ...formData, agreed_rate: e.target.value })}
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="payment_status" className="block text-sm font-medium text-gray-700">
              Estado de pago:
            </label>
            <input
              type="text"
              id="payment_status"
              name="payment_status"
              value={formData.payment_status}
              onChange={(e) => setFormData({ ...formData, payment_status: e.target.value })}
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="payment_date" className="block text-sm font-medium text-gray-700">
              Fecha de pago:
            </label>
            <input
              type="date"
              id="payment_date"
              name="payment_date"
              value={formData.payment_date}
              onChange={(e) => setFormData({ ...formData, payment_date: e.target.value })}
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>
        </div>
        <div className="mt-10 ">
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
    className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded"
  >
    Limpiar
  </button>
        </div>
      </form>
    </div>
  );
};

export default AgregarReclutamiento;