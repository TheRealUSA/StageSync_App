import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { createProfileBusiness, updateProfileBusiness, deleteProfileBusiness, getAllProfileBusinesses, getProfileBusinessById } from '../../Services/profilebusinesses';
import { AiFillEdit, AiFillDelete, AiFillEye } from 'react-icons/ai';
import { getAllCategoryBusinesses } from '../../Services/categorybusines';

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
    categoryId: '',
  });
  

  const [profileBusiness, setProfileBusiness] = useState([]);
  const [creating, setCreating] = useState(true);
  const [selectedProfileBusines, setSelectedProfileBusines] = useState(null);
  const [categories, setCategories] = useState([]); // Estado para las categorías

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
   
    getAllCategoryBusinesses()
      .then((categories) => {
        setCategories(categories);
      })
      .catch((error) => {
        console.error('Error al obtener categorías:', error);
      });
  }, []);

  const handleCreateProfileBusines = async () => {
    try {
      const { id, ...newFormData } = formData;
      const newProfileBusines = await createProfileBusiness(newFormData);
      fetchProfileBusiness();
      clearForm();
    } catch (error) {
      console.error('Error al crear el perfil de negocio', error);
    }
  };


  const handleUpdateProfileBusines = async () => {
    try {
      const { id, ...updateData } = formData;  // Elimina el campo 'id'
      const updatedProfileBusines = await updateProfileBusiness(formData.id, updateData);
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
      const selected = await getProfileBusinessById(ProfileBusines.id);
      setFormData({ ...selected });
      setSelectedProfileBusines(selected);
      setCreating(false);
      setContainerVisible(true);
    } catch (error) {
      console.error('Error al obtener los detalles del perfil de negocio', error);
    }
  };

  const handleShowDetails = async (ProfileBusines) => {
    try {
      const selected = await getProfileBusinessById(ProfileBusines.id);
      setFormData({ ...selected });
      setSelectedProfileBusines(selected);
      setContainerVisible(true);
    } catch (error) {
      console.error('Error al obtener los detalles del perfil de negocio', error);
    }
  };
  

  const handleCheckboxChange = (day) => {
    const updatedDays = formData.days_of_the_week.includes(day)
      ? formData.days_of_the_week.filter((d) => d !== day)
      : [...formData.days_of_the_week, day];

    setFormData({ ...formData, days_of_the_week: updatedDays });
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
      categoryId: '',
    });
    setCreating(true);
    
    setSelectedProfileBusines(null);
  };

  const [containerVisible, setContainerVisible] = useState(false);

  const [filter, setFilter] = useState('');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredProfileBusiness = profileBusiness.filter(profileBusines =>
    profileBusines.business_name.toLowerCase().includes(filter.toLowerCase())
  );

  const itemsPerPage = 5; // Puedes ajustar esto según tus necesidades
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProfileBusiness.slice(indexOfFirstItem, indexOfLastItem);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="container mx-auto p-4">
      <form>
        <div className={`mt-4 ${containerVisible ? '' : 'hidden'}`}>
          <h2 className="text-2xl text-center">{creating ? 'Crear perfil de negocio' : 'Actualizar perfil de negocio'}</h2>
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
                type="number"
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
  <label className="block font-medium text-gray-700">Días de la semana</label>
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'].map(day => (
      <div key={day} className="flex items-center">
        <input
          type="checkbox"
          id={day}
          checked={formData.days_of_the_week.includes(day)}
          onChange={() => handleCheckboxChange(day)}
          className="mr-2"
        />
        <label htmlFor={day}>{capitalizeFirstLetter(day)}</label>
      </div>
    ))}
  </div>
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
              <label htmlFor="closingTime" className="block font-medium text-gray-700">Hora de cierre</label>
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
            <div className="mb-4">
              <label htmlFor="categoryId" className="block font-medium text-gray-700">Categoría del negocio</label>
              <select
                name="categoryId"
                value={formData.categoryId}
                onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })}
                className="w-full p-2 border rounded"
              >
                <option value="">Selecciona una categoría</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-4">
              {creating ? (
                <button
                  type="button"
                  onClick={handleCreateProfileBusines}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
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
          </div>
        </div>
      </form>
      <h2 className="text-2xl text-center mt-4 mb-4">Perfiles de negocios</h2>
      <div className="mt-4 flex justify-between items-center mb-2">
        <button
          type="button"
          onClick={() => setContainerVisible(!containerVisible)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {containerVisible ? 'Ocultar' : 'Agregar perfil de negocio'}
        </button>

        <input
          type="text"
          value={filter}
          onChange={handleFilterChange}
          placeholder="Filtrar por empresa"
          className="w-48 p-2 border rounded"
        />
      </div>
      <table className="w-full border-collapse border border-gray-300 shadow-md rounded-md">
        <thead>
          <tr className="bg-[#D1C6AE]">
            <th className="border border-gray-300 py-2 px-4 text-sm font-semibold uppercase">ID</th>
            <th className="border border-gray-300 py-2 px-4 text-sm font-semibold uppercase">Nombre del propietario</th>
            <th className="border border-gray-300 py-2 px-4 text-sm font-semibold uppercase">Nombre de la empresa</th>
            <th className="border border-gray-300 py-2 px-4 text-sm font-semibold uppercase">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((profileBusines, index) => (
            <tr key={profileBusines.id}>
               <td className="border border-gray-300 py-2 px-4 text-center">{index + 1}</td>
              <td className="border border-gray-300 py-2 px-4 text-center">{profileBusines.owner_name}</td>
              <td className="border border-gray-300 py-2 px-4 text-center">{profileBusines.business_name}</td>
              <td className="border border-gray-300 py-2 px-4 text-center">
                <button
                  onClick={() => handleEditProfileBusines(profileBusines)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-1"
                >
                  <AiFillEdit />
                </button>
                <button
                  onClick={() => handleDeleteProfileBusines(profileBusines.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-1"
                >
                  <AiFillDelete />
                </button>
                <button
                  onClick={() => handleShowDetails(profileBusines)}
                  className="bg-gray-500 hover-bg-gray-700 text-white font-bold py-1 px-2 rounded ml-1"
                >
                  <AiFillEye />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        previousLabel={'Anterior'}
        nextLabel={'Siguiente'}
        breakLabel={'...'}
        pageCount={Math.ceil(filteredProfileBusiness.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={'flex justify-center mt-4 space-x-2'}
        subContainerClassName={'flex items-center'}
        activeClassName={'bg-blue-500 text-white px-3 py-2 rounded-full'}
        pageClassName={'px-3 py-2 rounded-full bg-gray-200 text-gray-700'}
        previousClassName={'px-3 py-2 rounded-full bg-gray-200 text-gray-700'}
        nextClassName={'px-3 py-2 rounded-full bg-gray-200 text-gray-700'}
        breakClassName={'px-3 py-2 rounded-full bg-gray-200 text-gray-700'}
      />
    </div>
  );
};

export default DataTableProfileBusiness;