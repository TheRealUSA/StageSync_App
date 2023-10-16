import * as React from 'react';
import { useNavigate } from 'react-router-dom';

export default function FormRecuperar() {

    const navigate = useNavigate();
    const BackClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        // Navega a la vista 'Registrarse' al hacer clic en el botón
        navigate('/InicioSesion');
    };

    return (
        <div className='px-10 py-20'>
            <h1 className='text-4xl font-semibold text-white'>Recuperar Contraseña</h1>
            <div className='mt-8'>
                <div>
                    <label className='text-lg font-medium text-white'>Codigo</label>
                    <input className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent' placeholder='Ingresa el codigo que enviamos a tu Gmail'></input>
                </div>
            </div>
            <div>
                <div className='mt-5'>
                    <label className='text-lg font-medium text-white' >Contraseña nueva</label>
                    <input className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent' placeholder='Ingreese su nueva contraseña' type='password'></input>
                </div>
                <div className='mt-5'>
                    <label className='text-lg font-medium text-white' >Rreinserta la contraseña nueva</label>
                    <input className='w-full border-2 border-gray-100 text-white rounded-xl p-4 mt-1 bg-transparent' placeholder='Rreinserta su contraseña' type='password'></input>
                </div>
                <div className='mt-8 flex justify-between items-center'>
                    <div>
                        <input type='checkbox' id='remember'></input>
                        <label className='ml-2 font-medium text-base text-gray-300' for="remember">Recordar por 30 días</label>
                    </div>
                </div>
                <div className='mt-8 flex flex-col gap-y-4'>
                    <button className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 rounded-xl bg-[#D1C6AE] text-black text-center text-lg font-bold'>Recuperar contraseña</button>
                    <button className="flex items-center justify-center" onClick={BackClick}>
                    Volver
                </button>
                </div>
                
            </div>
        </div>
    )
}