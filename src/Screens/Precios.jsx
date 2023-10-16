import React from "react";

const Precios = () => {
    return (
        <>
            <div className="flex">
                <div className="w-1/3 bg-[#700E11] flex items-center justify-center">
                    <img
                        src="/Img/Dash.png"
                        alt="Logo de Stage Sync"
                        className="w-56 h-50 mt-28 mb-10"
                    />
                </div>
                <div className="w-2/3 bg-[#700E11] flex items-center justify-center">
                    <div className="text-center mt-28 mb-10">
                        <h1 className="text-white text-3xl font-bold">Elige el plan de Stage Sync Plus adecuado para ti</h1>
                        <h1 className="text-white text-lg font-semibold mt-3">Más visualización y beneficios adicionales</h1>
                        <p className="text-white p-7">
                            Todas las Cuentas de SS Plus tienen visualización. Al actualizar a un plan de SS Plus aceptas las
                            <a href="https://www.youtube.com/shorts/16uJ-jxcKHo" target="_blank" rel="noopener noreferrer" className="text-blue-400" > Condiciones del Servicio</a>, de SS Plus Nota:
                            <a href="https://www.youtube.com/watch?v=ZDZmADRQAMc" target="_blank" rel="noopener noreferrer" className="text-blue-400"> La Política de Privacidad</a>. de
                            SS Plus describe cómo se procesan los datos en este servicio.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-[#700E11] p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="bg-[#D1C6AE] rounded-lg p-4">
                        <h2 className="text-lg font-semibold text-center">Plan Gratis</h2>
                        <p className="text-zinc-900 p-5">Incluye:</p>
                        <p className="text-zinc-900 p-5">Ser expuesto al publico para contratacion</p>
                        <p className="text-zinc-900 p-5">Poder conectar con oportunidades laborales tu mismo</p>
                    </div>
                    <div className="bg-[#D1C6AE] rounded-lg p-4 text-center">
                        <h2 className="text-lg font-semibold text-center">Plan Mensual</h2>
                        <h2 className="text-lg font-semibold text-center">CRC 3,999</h2>
                        <p className="text-zinc-900 p-5 text-left">Incluye:</p>
                        <p className="text-zinc-900 p-5 text-left">Prioridad en la lista de musicos</p>
                        <p className="text-zinc-900 p-5 text-left mb-20">Prioridad en las oportunidades laborales</p>
                        <button className="bg-[#D1C6AE] hover:bg-zinc-100 text-black font-bold py-2 px-4 mt-6 rounded-sm">
                            Obetener Plan
                        </button>
                    </div>
                    <div className="bg-[#D1C6AE] rounded-lg p-9 text-center">
                        <h2 className="text-lg font-semibold text-center">Plan Anual</h2>
                        <h2 className="text-lg font-semibold text-center">CRC 40,400</h2>
                        <p className="text-zinc-900 p-5 text-left">Incluye:</p>
                        <p className="text-zinc-900 p-5 text-left">Ahorra un 16%</p>
                        <p className="text-zinc-900 p-5 p-5 text-left">Prioridad en la lista de musicos</p>
                        <p className="text-zinc-900 p-5 p-5 text-left">Prioridad en las oportunidades laborales</p>
                        <button className="bg-[#D1C6AE] hover:bg-zinc-100 text-black font-bold py-2 px-4 mt-6 rounded-sm">
                            Obetener Plan
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Precios;