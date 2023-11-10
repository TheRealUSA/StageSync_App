import React, { useState, useEffect } from 'react';
import { createProfileBusiness, updateProfileBusiness, deleteProfileBusiness, getAllProfileBusinesses, getProfileBusinessById } from '../../Services/profilebusinesses';

const DataTableProfileBusiness = () => {
  const [formData, setFormData] = useState({
    id: null,
    owner_name: '',
    owner_lastname1: '',
    owner_lastname2: '',
    business_name: '',
    phone_number: '',
    state: '',
    city: '',
    street: '',
    address: '',
    days_of_the_week: '',
    openingTime: '',
    closingTime: '',
    avatar_route: '',
    avatar_filename: '',
    about: '',
    facebook: '',
    instagram: '',
  });

  const [profileBusiness, setProfileBusiness] = useState([]);
  const [creating, setCreating] = useState(true);
  const [selectedProfileBusines, setSelectedProfileBusines] = useState(null);

  const fetchProfileBusiness = async () => {
    try {
      const response = await getAllProfileBusinesses();
      setProfileBusiness(response);
    } catch (error) {
      console.error('Error al obtener el perfil de negocio', error);
    }
  };

  useEffect(() => {
    fetchProfileBusiness();
  }, []);

  const handleCreateProfileBusines = async () => {
    try {
      const { id, ...newFormData } = formData;
      newFormData.business_name = parseFloat(newFormData.business_name);

      const newProfileBusines = await createProfileBusiness(newFormData);
      fetchProfileBusiness();
      clearForm();
    } catch (error) {
      console.error('Error al crear el perfil de negocio', error);
    }
  };

  const handleUpdateProfileBusines = async () => {
    try {
      const updatedProfileBusines = await updateProfileBusiness(formData.id, formData);
      fetchProfileBusiness();
      clearForm();
    } catch (error) {
      console.error('Error al actualizar el perfil de negocio', error);
    }
  };

  const handleDeleteProfileBusines = async (id) => {
    try {
      await deleteProfileBusiness(id);
      fetchProfileBusiness();
      clearForm();
    } catch (error) {
      console.error('Error al eliminar el perfil de negocio', error);
    }
  };

  const handleEditProfileBusines = async (ProfileBusines) => {
    try {
      const selected = await getProfileBusinessById(profileBusiness.id);
      setFormData({ ...selected });
      setSelectedProfileBusines(selected);
      setCreating(false);
    } catch (error) {
      console.error('Error al obtener los detalles del perfil de negocio', error);
    }
  };

  const handleShowDetails = async (ProfileBusines) => {
    try {
      const selected = await getProfileBusinessById(profileBusiness.id);
      setFormData({ ...selected });
      setSelectedProfileBusines(selected);
    } catch (error) {
      console.error('Error al obtener los detalles del perfil de negocio', error);
    }
  };

  const clearForm = () => {
    setFormData({
      id: null,
      owner_name: '',
    owner_lastname1: '',
    owner_lastname2: '',
    business_name: '',
    phone_number: '',
    state: '',
    city: '',
    street: '',
    address: '',
    days_of_the_week: '',
    openingTime: '',
    closingTime: '',
    avatar_route: '',
    avatar_filename: '',
    about: '',
    facebook: '',
    instagram: '',
    });
    setCreating(true);
    setSelectedProfileBusines(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl text-center">{creating ? 'Crear perfil de negocio' : 'Actualizar perfil de negocio'}</h2>
      <form>
        <div className="mt-4 p-4 bg-white shadow-md rounded-md grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="owner_name" className="block font-medium text-gray-700">Nombre del propietario</label>
            <input
              type="text"
              id="owner_name"
              value={formData.owner_name}
              onChange={(e) => setFormData({ ...formData, owner_name: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="owner_lastname1" className="block font-medium text-gray-700">Primer Apellido propietario</label>
            <input
              type="text"
              id="owner_lastname1"
              value={formData.owner_lastname1}
              onChange={(e) => setFormData({ ...formData, owner_lastname1: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="owner_lastname2" className="block font-medium text-gray-700">Segundo Apellido propietario</label>
            <input
              type="text"
              id="owner_lastname2"
              value={formData.owner_lastname2}
              onChange={(e) => setFormData({ ...formData, owner_lastname2: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="business_name" className="block font-medium text-gray-700">Nombre del negocio</label>
            <input
              type="text"
              id="business_name"
              value={formData.business_name}
              onChange={(e) => setFormData({ ...formData, business_name: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone_number" className="block font-medium text-gray-700">Numero de teléfono</label>
            <input
              type="tel"
              id="phone_number"
              value={formData.phone_number}
              onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="state" className="block font-medium text-gray-700">Estado</label>
            <input
              type="text"
              id="state"
              value={formData.state}
              onChange={(e) => setFormData({ ...formData, state: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="city" className="block font-medium text-gray-700">Ciudad</label>
            <input
              type="text"
              id="city"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="street" className="block font-medium text-gray-700">Calle</label>
            <input
              type="text"
              id="street"
              value={formData.street}
              onChange={(e) => setFormData({ ...formData, street: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block font-medium text-gray-700">Dirección</label>
            <input
              type="text"
              id="address"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="days_of_the_week" className="block font-medium text-gray-700">Día de la semana</label>
            <input
              type="text"
              id="days_of_the_week"
              value={formData.days_of_the_week}
              onChange={(e) => setFormData({ ...formData, days_of_the_week: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="openingTime" className="block font-medium text-gray-700">Hora de apertura</label>
            <input
              type="time"
              id="openingTime"
              value={formData.openingTime}
              onChange={(e) => setFormData({ ...formData, openingTime: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="closingTime" className="block font-medium text-gray-700">Hora de apertura</label>
            <input
              type="time"
              id="closingTime"
              value={formData.closingTime}
              onChange={(e) => setFormData({ ...formData, closingTime: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="avatar_route" className="block font-medium text-gray-700">Ruta del avatar</label>
            <input
              type="text"
              id="avatar_route"
              value={formData.avatar_route}
              onChange={(e) => setFormData({ ...formData, avatar_route: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="avatar_filename" className="block font-medium text-gray-700">Nombre del archivo</label>
            <input
              type="text"
              id="avatar_filename"
              value={formData.avatar_filename}
              onChange={(e) => setFormData({ ...formData, avatar_filename: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="about" className="block font-medium text-gray-700">Acerca de</label>
            <input
              type="text"
              id="about"
              value={formData.about}
              onChange={(e) => setFormData({ ...formData, about: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="facebook" className="block font-medium text-gray-700">Facebook</label>
            <input
              type="text"
              id="facebook"
              value={formData.facebook}
              onChange={(e) => setFormData({ ...formData, facebook: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="instagram" className="block font-medium text-gray-700">Instagram</label>
            <input
              type="text"
              id="instagram"
              value={formData.instagram}
              onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
        <div className="mt-4">
          {creating ? (
            <button
              type="button"
              onClick={handleCreateProfileBusines}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Crear
            </button>
          ) : (
            <button
              type="button"
              onClick={handleUpdateProfileBusines}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Actualizar
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
  
      <h2 className="text-2xl text-center mt-4 mb-4">perfiles de negocios</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-[#D1C6AE]">
            <th className="border border-gray-300 py-2 px-4">Nombre del propietario</th>
            <th className="border border-gray-300 py-2 px-4">Nombre de la empresa</th>
            <th className="border border-gray-300 py-2 px-4">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {profileBusiness.map((profileBusines) => (
            <tr key={profileBusines.id}>
              <td className="border border-gray-300 py-2 px-4 text-center">{profileBusines.owner_name}</td>
              <td className="border border-gray-300 py-2 px-4 text-center">{profileBusines.business_name}</td>
              <td className="border border-gray-300 py-2 px-4 text-center">
                <button
                  onClick={() => handleEditProfileBusines(profileBusines)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-1"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDeleteProfileBusines(profileBusines.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-1"
                >
                  Eliminar
                </button>
                <button
                  onClick={() => handleShowDetails(profileBusines)}
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

export default DataTableProfileBusiness;