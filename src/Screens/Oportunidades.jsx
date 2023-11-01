import React from "react";
import { useQuery } from 'react-query';
import { getAllProfileBusinesses } from '../Services/profilebusinesses.ts';

const Oportunidades = () => {
    const { data: profiles, error, isLoading } = useQuery('Profile', () => getAllProfileBusinesses());

    if (isLoading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error al cargar los datos: {error.message}</div>;
    }

    return (
        <div>
            <h2>Perfiles de Negocio</h2>
            <ul>
                {profiles.map((profile) => (
                    <li key={profile.id}>
                        <div>
                            <h3>{profile.business_name}</h3>
                            <p>Owner: {profile.owner_name} {profile.owner_lastname1} {profile.owner_lastname2}</p>
                            <p>Phone Number: {profile.phone_number}</p>
                            <p>Location: {profile.city}, {profile.state}</p>
                            <p>Address: {profile.street}, {profile.address}</p>
                            <p>Days of the Week: {profile.days_of_the_week}</p>
                            <p>Opening Time: {profile.openingTime}</p>
                            <p>Closing Time: {profile.closingTime}</p>
                            <p>About: {profile.about}</p>
                            <p>Facebook: <a href={profile.facebook}>{profile.facebook}</a></p>
                            <p>Instagram: <a href={profile.instagram}>{profile.instagram}</a></p>
                            <img src={profile.avatar_route} alt={profile.avatar_filename} />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Oportunidades;
