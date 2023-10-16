import * as React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Form() {

    const navigate = useNavigate();
    const DashClick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      navigate('/Dashboard');
  };

  const InicioClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate('/');
};

const RegisterClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate('/Registrarse');
};

const RecuperarContraseñaClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate('/RecuperarContraseña');
};

    return (
        <div className='px-10 py-20'>
            <div className='flex'>
            <h1 className='text-5xl font-semibold text-white'>Iniciar Sesión</h1>
            <button className='text-white ml-auto' onClick={InicioClick} >Volver</button>
            </div>
            <p className='font-medio text-lg text-white mt-4'> Bienvenido! Por favor ingrese su información</p>
            <div className='mt-8'>
                <div>
                    <label className='text-lg font-medium text-white'>Correo</label>
                    <input className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent text-white' placeholder='Ingreese su correo'></input>
                </div>
            </div>
            <div>
                <div className='mt-5'>
                    <label className='text-lg font-medium text-white' >Contraseña</label>
                    <input className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent text-white' placeholder='Ingreese su contraseña' type='password'></input>
                </div>
                <div className='mt-8 flex justify-between items-center'>
                    <div>
                        <input type='checkbox' id='remember'></input>
                        <label className='ml-2 font-medium text-base text-gray-300' for="remember">Recordar por 30 días</label>
                    </div>
                    <button className='font-mediun text-base' onClick={RecuperarContraseñaClick}>Recuperar contraseña</button>
                </div>
                <div className='mt-8 flex flex-col gap-y-4'>
                    <button className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] 
                    ease-in-out py-3 rounded-xl bg-[#D1C6AE] text-black text-center text-lg font-bold' onClick={DashClick}>Iniciar Sesión</button>
             
                </div>
                <div className='mt-8 flex justify-center items-center'>
                    <p className='font-thin text-base text-white'>No tienes una cuenta?</p>
                    <button 
                        className='ml-2 font-normal text-base text-white' onClick={RegisterClick}>Registrate</button>
                </div>
            </div>
        </div>
    )
}