import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EditarMusico = () => {
    const [musician, setMusician] = useState({
        id: Date.now(),
        firstName: '',
        lastName: '',
        secondLastName: '',
        birthdate: '',
        phoneNumber: '',
        province: '',
        canton: '',
        district: '',
        postalCode: '',
        profileImage: '',
        skillsDescription: '',
        instrument: '',
        whatsapp: '',
        instagram: '',
        facebook: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setMusician({
          ...musician,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes enviar los datos del músico a tu backend o hacer lo que necesites con ellos.
        console.log('Datos del músico:', musician);
        // Luego, puedes redirigir o realizar otras acciones según tus necesidades.
      };

      const navigate = useNavigate();
      const BackClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        navigate('/Dashboard/Musico');
      };
    
      return (
        <div className="container mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-4">Editar Músico</h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                Primer Nombre:
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={musician.firstName}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Primer Apellido:
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={musician.lastName}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
                required
              />
            </div>
            <div>
              <label htmlFor="secondLastName" className="block text-sm font-medium text-gray-700">
                Segundo Apellido:
              </label>
              <input
                type="text"
                id="secondLastName"
                name="secondLastName"
                value={musician.secondLastName}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
                required
              />
            </div>
            <div>
              <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700">
                Fecha de Cumpleaños:
              </label>
              <input
                type="date"
                id="birthdate"
                name="birthdate"
                value={musician.birthdate}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
                required
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                Número de Teléfono:
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={musician.phoneNumber}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
                required
              />
            </div>
            <div>
              <label htmlFor="province" className="block text-sm font-medium text-gray-700">
                Provincia:
              </label>
              <input
                type="text"
                id="province"
                name="province"
                value={musician.province}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
                required
              />
            </div>
            <div>
              <label htmlFor="canton" className="block text-sm font-medium text-gray-700">
                Cantón:
              </label>
              <input
                type="text"
                id="canton"
                name="canton"
                value={musician.canton}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
                required
              />
            </div>
            <div>
              <label htmlFor="district" className="block text-sm font-medium text-gray-700">
                Distrito:
              </label>
              <input
                type="text"
                id="district"
                name="district"
                value={musician.district}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
                required
              />
            </div>
            <div>
              <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
                Código Postal:
              </label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={musician.postalCode}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
                required
              />
            </div>
            <div>
  <label htmlFor="profileImage" className="block text-sm font-medium text-gray-700">
    Foto de Perfil:
  </label>
  <input
    type="file"
    id="profileImage"
    name="profileImage"
    accept="image/*"
    onChange={(e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        setMusician({
          ...musician,
          profileImage: e.target.result,
        });
      };
      reader.readAsDataURL(file);
    }}
    className="mt-1 p-2 border rounded w-full "
    required
  />
</div>
            <div>
              <label htmlFor="skillsDescription" className="block text-sm font-medium text-gray-700">
                Descripción de Habilidades:
              </label>
              <textarea
                id="skillsDescription"
                name="skillsDescription"
                value={musician.skillsDescription}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full "
                required
              />
            </div>
            <div>
              <label htmlFor="instrument" className="block text-sm font-medium text-gray-700">
                Instrumento que Toca:
              </label>
              <input
                type="text"
                id="instrument"
                name="instrument"
                value={musician.instrument}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full "
                required
              />
            </div>
            <div>
              <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700">
                Enlace de WhatsApp:
              </label>
              <input
                type="text"
                id="whatsapp"
                name="whatsapp"
                value={musician.whatsapp}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full "
                required
              />
            </div>
            <div>
              <label htmlFor="instagram" className="block text-sm font-medium text-gray-700">
                Enlace de Instagram:
              </label>
              <input
                type="text"
                id="instagram"
                name="instagram"
                value={musician.instagram}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full "
                required
              />
            </div>
            <div>
            <label htmlFor="facebook" className="block text-sm font-medium text-gray-700">
              Enlace de Facebook:
            </label>
            <input
              type="text"
              id="facebook"
              name="facebook"
              value={musician.facebook}
              onChange={handleChange}
              className="mt-1 p-2 border rounded w-full "
              required
            />
          </div>
        </div>
        
        <div className="mt-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Editar Músico
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

export default EditarMusico;