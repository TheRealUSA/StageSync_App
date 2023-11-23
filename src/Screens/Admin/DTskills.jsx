import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import {
  createSkill,
  updateSkill,
  getAllSkills,
  getSkillById,
  deleteSkill,
} from "../../Services/skills";
import { AiFillEdit, AiFillDelete, AiFillEye } from "react-icons/ai";
import { getAllCategorySkills } from "../../Services/categorySkills";
const DataTableSkills = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: null,
  });
  const [skills, setSkills] = useState([]);
  const [creating, setCreating] = useState(true);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [containerVisible, setContainerVisible] = useState(false);
  const [filter, setFilter] = useState("");
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0);
  const [categories, setCategories] = useState([]); // Estado para las categorías

  const fetchSkills = async () => {
    try {
      const response = await getAllSkills();
      setSkills(response);
    } catch (error) {
      console.error("Error al obtener las habilidades", error);
    }
  };

  useEffect(() => {
    fetchSkills();

    getAllCategorySkills()
      .then((categories) => {
        setCategories(categories);
      })
      .catch((error) => {
        console.error("Error al obtener categorías:", error);
      });
  }, []);

  const handleCreateSkill = async () => {
    try {
      const { category, ...restFormData } = formData;
      const parsedCategory = parseInt(category, 10);
  
      if (isNaN(parsedCategory)) {
        // Manejar el caso en el que 'category' no sea un número válido
        // Puedes lanzar un error, establecer un valor por defecto o manejarlo de otra manera
        throw new Error("La categoría debe ser un número válido");
      }
  
      // Asignar 'parsedCategory' al 'newFormData'
      const newFormData = { ...restFormData, category: parsedCategory };
  
      const newSkill = await createSkill(newFormData);
      fetchSkills();
      clearForm();
    } catch (error) {
      console.error("Error al crear la habilidad", error);
    }
  };
  
  const handleUpdateSkill = async () => {
    try {
      const { id, ...updateData } = formData;
      const parseId = parseInt(updateData.category);
      updateData.category = parseId;
      const updatedSkill = await updateSkill(formData.id, updateData);
      fetchSkills();
      clearForm();
    } catch (error) {
      console.error("Error al actualizar la habilidad", error.response.data);
    }
  };

  const handleDeleteSkill = async (id) => {
    try {
      await deleteSkill(id);
      fetchSkills();
      clearForm();
    } catch (error) {
      console.error("Error al eliminar la habilidad", error);
    }
  };

  const handleEditSkill = async (skill) => {
    try {
      const selected = await getSkillById(skill.id);
      setFormData({ ...selected });
      setSelectedSkill(selected);
      setCreating(false);
      setContainerVisible(true);
    } catch (error) {
      console.error("Error al obtener los detalles de la habilidad", error);
    }
  };

  const clearForm = () => {
    setFormData({
      name: "",
      category: "",
    });
    setCreating(true);
    setSelectedSkill(null);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredSkills = skills.filter((skill) =>
    skill.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredSkills.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="container mx-auto p-4">
      <form>
        <div className={`mt-4 ${containerVisible ? "" : "hidden"}`}>
          <h2 className="text-2xl text-center">
            {creating ? "Crear Habilidad" : "Actualizar Habilidad"}
          </h2>
          <div className="mt-4 p-4 bg-white shadow-md rounded-md grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label htmlFor="name" className="block font-medium text-gray-700">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="category"
                className="block font-medium text-gray-700"
              >
                Categoría de la habilidad
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
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
                  onClick={handleCreateSkill}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Crear
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleUpdateSkill}
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
      <h2 className="text-2xl text-center mt-4 mb-4">Habilidades</h2>
      <div className="mt-4 flex justify-between items-center mb-2">
        <button
          type="button"
          onClick={() => setContainerVisible(!containerVisible)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {containerVisible ? "Ocultar" : "Agregar habilidad"}
        </button>
        <input
          type="text"
          value={filter}
          onChange={handleFilterChange}
          placeholder="Filtrar por nombre"
          className="w-48 p-2 border rounded"
        />
      </div>
      <table className="w-full border-collapse border border-gray-300 shadow-md rounded-md">
        <thead>
          <tr className="bg-[#D1C6AE]">
            <th className="border border-gray-300 py-2 px-4 text-sm font-semibold uppercase">
              ID
            </th>
            <th className="border border-gray-300 py-2 px-4 text-sm font-semibold uppercase">
              Nombre
            </th>
            <th className="border border-gray-300 py-2 px-4 text-sm font-semibold uppercase">
              Categoria de la Habilidad
            </th>
            <th className="border border-gray-300 py-2 px-4 text-sm font-semibold uppercase">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((skill, index) => (
            <tr key={skill.id}>
              <td className="border border-gray-300 py-2 px-4 text-center">
                {index + 1}
              </td>
              <td className="border border-gray-300 py-2 px-4 text-center">
                {skill.name}
              </td>
              <td className="border border-gray-300 py-2 px-4 text-center">
                {skill.category.name}
              </td>
              <td className="border border-gray-300 py-2 px-4 text-center">
                <button
                  onClick={() => handleEditSkill(skill)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-1"
                >
                  <AiFillEdit />
                </button>
                <button
                  onClick={() => handleDeleteSkill(skill.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-1"
                >
                  <AiFillDelete />
                </button>
                <button
                  onClick={() => handleShowDetails(skill)}
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
        previousLabel={"Anterior"}
        nextLabel={"Siguiente"}
        breakLabel={"..."}
        pageCount={Math.ceil(filteredSkills.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={"flex justify-center mt-4 space-x-2"}
        subContainerClassName={"flex items-center"}
        activeClassName={"bg-blue-500 text-white px-3 py-2 rounded-full"}
        pageClassName={"px-3 py-2 rounded-full bg-gray-200 text-gray-700"}
        previousClassName={"px-3 py-2 rounded-full bg-gray-200 text-gray-700"}
        nextClassName={"px-3 py-2 rounded-full bg-gray-200 text-gray-700"}
        breakClassName={"px-3 py-2 rounded-full bg-gray-200 text-gray-700"}
      />
    </div>
  );
};

export default DataTableSkills;
