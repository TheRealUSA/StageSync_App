import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AgregarContratante = () => {
  const [contractor, setContractor] = useState({
    id: Date.now(),
    contractorId: '',
    dateHire: '',
    startTime: '',
    endTime: '',
    eventLocation: '',
    typeEvent: '',
    agreedRate: '',
    paymentSatus: '',
    paymentDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContractor({
      ...contractor,
      [name]: value,
    });
  };

  const navigate = useNavigate();
  const BackClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate('/Dashboard/Contratantes');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del músico a tu backend o hacer lo que necesites con ellos.
    console.log('Datos del contratante:', contractor);
    // Luego, puedes redirigir o realizar otras acciones según tus necesidades.
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Agregar Contratante</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label htmlFor="contractorId" className="block text-sm font-medium text-gray-700">
              Nombre del contratante:
            </label>
            <input
              type="text"
              id="contractorId"
              name="contractorId"
              value={contractor.contractorId}
              onChange={handleChange}
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="dateHire" className="block text-sm font-medium text-gray-700">
              Fecha de evento:
            </label>
            <input
              type="date"
              id="dateHire"
              name="dateHire"
              value={contractor.dateHire}
              onChange={handleChange}
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="startTime" className="block text-sm font-medium text-gray-700">
              Hora de inicio:
            </label>
            <input
              type="time"
              id="startTime"
              name="startTime"
              value={contractor.startTime}
              onChange={handleChange}
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="endTime" className="block text-sm font-medium text-gray-700">
              Hora final:
            </label>
            <input
              type="time"
              id="endTime"
              name="endTime"
              value={contractor.endTime}
              onChange={handleChange}
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="eventLocation" className="block text-sm font-medium text-gray-700">
              Ubicación del evento:
            </label>
            <input
              type="varchar"
              id="eventLocation"
              name="eventLocation"
              value={contractor.eventLocation}
              onChange={handleChange}
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="typeEvent" className="block text-sm font-medium text-gray-700">
              Tipo de evento:
            </label>
            <input
              type="varchar"
              id="typeEvent"
              name="typeEvent"
              value={contractor.typeEvent}
              onChange={handleChange}
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="agreedRate" className="block text-sm font-medium text-gray-700">
              Tarifa acordada:
            </label>
            <input
              type="double"
              id="agreedRate"
              name="agreedRate"
              value={contractor.agreedRate}
              onChange={handleChange}
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="paymentSatus" className="block text-sm font-medium text-gray-700">
              Estado de pago:
            </label>
            <input
              type="varchar"
              id="paymentSatus"
              name="paymentSatus"
              value={contractor.paymentSatus}
              onChange={handleChange}
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="paymentDate" className="block text-sm font-medium text-gray-700">
              Fecha de pago:
            </label>
            <input
              type="date"
              id="paymentDate"
              name="paymentDate"
              value={contractor.paymentDate}
              onChange={handleChange}
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>
        </div>
        <div className="mt-10 ">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Agregar Contratante
          </button>
          <button onClick={BackClick}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 ml-3"
          >
            Volver
          </button>
        </div>
      </form>
    </div>
  );
};

export default AgregarContratante;