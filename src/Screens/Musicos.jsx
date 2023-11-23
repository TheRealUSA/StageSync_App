
import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import MusicianCard from '../components/Musicos/MusicianCard';
import { getAllProfiles } from '../Services/profile';

const Musicos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [profiles, setProfiles] = useState([]);
  const [filteredMusicians, setFilteredMusicians] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const profilesPerPage = 6; // Define la cantidad de músicos por página

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const profilesData = await getAllProfiles();
        setProfiles(profilesData);
      } catch (error) {
        console.error('Error al obtener los perfiles:', error);
      }
    };

    fetchProfiles();
  }, []);

  useEffect(() => {
    filterMusicians(searchTerm);
  }, [searchTerm, profiles]);

  const handleSearchChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
  };

  const filterMusicians = (term) => {
    const filtered = profiles.filter((profile) => {
      return (
        profile.name.toLowerCase().includes(term.toLowerCase()) ||
        profile.city.toLowerCase().includes(term.toLowerCase()) ||
        profile.state.toLowerCase().includes(term.toLowerCase()) ||
        profile.street.toString().includes(term)
      );
    });
    setFilteredMusicians(filtered);
    setCurrentPage(0); // Reiniciar a la primera página cuando se realiza una búsqueda
  };

  const offset = currentPage * profilesPerPage;
  const currentMusicians = filteredMusicians.slice(offset, offset + profilesPerPage);
  const pageCount = Math.ceil(filteredMusicians.length / profilesPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div>
      <div className="p-4 mt-16 flex items-center justify-center bg-[#D9D9D9]">
        <input
          type="text"
          placeholder="Buscar músicos..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="border rounded-md p-2"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 bg-[#D9D9D9] p-4">
        {currentMusicians.map((profile) => (
          <MusicianCard key={profile.id} profile={profile} />
        ))}
      </div>
      {pageCount > 1 && (
        <ReactPaginate
          previousLabel={'Anterior'}
          nextLabel={'Siguiente'}
          breakLabel={'...'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'flex justify-center mt-4 mb-4 space-x-2'}
          subContainerClassName={'flex items-center'}
          activeClassName={'bg-blue-500 text-white px-3 py-2 rounded-full'}
          pageClassName={'px-3 py-2 rounded-full bg-gray-200 text-gray-700'}
          previousClassName={'px-3 py-2 rounded-full bg-gray-200 text-gray-700'}
          nextClassName={'px-3 py-2 rounded-full bg-gray-200 text-gray-700'}
          breakClassName={'px-3 py-2 rounded-full bg-gray-200 text-gray-700'}
        />
      )}
    </div>
  );
};

export default Musicos;