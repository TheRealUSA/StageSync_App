import React, { useState } from 'react';
import OportunitiCard from '../components/Oportunidades/OportunitiCard';

const Oportunitis = [
  {
    id: 1,
    contractorId: 'Occidental tamarindo',
    dateHire: '04/11/2023',
    startTime: '04:00pm',
    endTime: '07:00pm',
    eventLocation: 'Tamarindo, Guancaste',
    typeEvent: 'Matrimonio',
    agreedRate: '500.000',
    paymentSatus: 'Por pagar',
    paymentDate: '04/11/2023',
  },
  {
    id: 2,
    contractorId: 'Occidental Papagayo',
    dateHire: '04/11/2023',
    startTime: '04:00pm',
    endTime: '07:00pm',
    eventLocation: 'Playa hermosa, Guanacaste',
    typeEvent: 'Matrimonio',
    agreedRate: '500,000',
    paymentStatus: 'Por pagar',
    paymentDate: '04/11/2023'
  },
  {
    id: 3,
    contractorId: 'Marriott San Jose',
    dateHire: '05/15/2023',
    startTime: '03:30pm',
    endTime: '08:30pm',
    eventLocation: 'San Jose, Costa Rica',
    typeEvent: 'Conferencia',
    agreedRate: '750,000',
    paymentStatus: 'Por pagar',
    paymentDate: '05/15/2023'
  },
  {
    id: 4,
    contractorId: 'Sheraton Liberia',
    dateHire: '06/20/2023',
    startTime: '05:00pm',
    endTime: '10:00pm',
    eventLocation: 'Liberia, Guanacaste',
    typeEvent: 'Cumpleaños',
    agreedRate: '350,000',
    paymentStatus: 'Por pagar',
    paymentDate: '06/20/2023'
  },
  {
    id: 5,
    contractorId: 'Hilton Papagayo',
    dateHire: '07/10/2023',
    startTime: '06:30pm',
    endTime: '09:30pm',
    eventLocation: 'Papagayo, Guanacaste',
    typeEvent: 'Aniversario',
    agreedRate: '600,000',
    paymentStatus: 'Por pagar',
    paymentDate: '07/10/2023'
  },
  {
    id: 6,
    contractorId: 'Westin Playa Conchal',
    dateHire: '08/05/2023',
    startTime: '02:00pm',
    endTime: '06:00pm',
    eventLocation: 'Playa Conchal, Guanacaste',
    typeEvent: 'Boda',
    agreedRate: '800,000',
    paymentStatus: 'Por pagar',
    paymentDate: '08/05/2023'
  },
  {
    id: 7,
    contractorId: 'JW Marriott Guanacaste',
    dateHire: '10/08/2023',
    startTime: '07:00pm',
    endTime: '10:30pm',
    eventLocation: 'Tamarindo, Guanacaste',
    typeEvent: 'Reunión Corporativa',
    agreedRate: '1,000,000',
    paymentStatus: 'Por pagar',
    paymentDate: '10/08/2023'
  },
  {
    id: 8,
    contractorId: 'Four Seasons Costa Rica',
    dateHire: '11/25/2023',
    startTime: '04:30pm',
    endTime: '09:00pm',
    eventLocation: 'Papagayo, Guanacaste',
    typeEvent: 'Concierto',
    agreedRate: '1,200,000',
    paymentStatus: 'Por pagar',
    paymentDate: '11/25/2023'
  },
  {
    id: 9,
    contractorId: 'Hyatt Andaz Papagayo',
    dateHire: '12/15/2023',
    startTime: '01:00pm',
    endTime: '05:00pm',
    eventLocation: 'Papagayo, Guanacaste',
    typeEvent: 'Fiesta de Fin de Año',
    agreedRate: '900,000',
    paymentStatus: 'Por pagar',
    paymentDate: '12/15/2023'
  },
  {
    id: 10,
    contractorId: 'Reserva Conchal',
    dateHire: '01/10/2024',
    startTime: '06:00pm',
    endTime: '11:00pm',
    eventLocation: 'Conchal, Guanacaste',
    typeEvent: 'Conferencia',
    agreedRate: '700,000',
    paymentStatus: 'Por pagar',
    paymentDate: '01/10/2024'
  },

  // Agrega más músicos aquí...
];

const Oportunidades = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOportunitis, setFilteredOportunitis] = useState(Oportunitis); // Inicialmente, muestra todos los músicos

  const handleSearchChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    filterOportunitis(newSearchTerm);
  };

  const filterOportunitis = (term) => {
    const filtered = Oportunitis.filter((Oportuniti) => {
      return (
        Oportuniti.contractorId.toLowerCase().includes(term.toLowerCase()) ||
        Oportuniti.eventLocation.toLowerCase().includes(term.toLowerCase()) ||
        Oportuniti.startTime.toLowerCase().includes(term.toLowerCase()) ||
        Oportuniti.dateHire.toString().includes(term) // Convertir a cadena y luego buscar
        // Agrega más condiciones de filtrado según tus variables
      );
    });
    setFilteredOportunitis(filtered);
  };

  return (
    <div>
      <div className="p-4 mt-16 flex items-center justify-center bg-[#D9D9D9]">
        <input
          type="text"
          placeholder="Buscar evento..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="border rounded-md p-2"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 bg-[#D9D9D9] p-4">
        {filteredOportunitis.map((Oportuniti) => (
          <OportunitiCard key={Oportuniti.id} Oportuniti={Oportuniti} />
        ))}
      </div>
    </div>
  );
};

export default Oportunidades;
