import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../Services/authService";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export default function Form() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [alertProps, setAlertProps] = useState(null); // Estado para configurar las propiedades de la alerta

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: val,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signIn(formData);
      const alertProps = verifyStatusResponseAndSetAlertProperties(response);
      setAlertProps(alertProps); 
      await showAlert(alertProps);
      DashClick();
    } catch (error) {
      console.error("Error al enviar datos:", error);
    }
  };

 const verifyStatusResponseAndSetAlertProperties = (response) => {
  const { statusCode, message } = response;
  if (statusCode !== 401 && statusCode !== 400 && statusCode !== 422) {
    return {
      type: "success",
      title: "Autenticación exitosa",
      text: "¡Se ha autenticado exitosamente en Stage Sync!",
      confirmButtonText: true,
      timer: 2000,
      position: "center",
    };
  } else {
    return {
      type: "error",
      title: "Ha ocurrido un error",
      text: message,
      confirmButtonText: true,
      timer: 2000,
      position: "center",
    };
  }
};

  const showAlert = (alertProps) => {
    const { type, title, position, timer, text } = alertProps;
    Swal.fire({
      position,
      icon: type,
      title,
      text,
      timer,
      showConfirmButton: false,
    }).then(() => {
      console.log('Sweet Alert cerrado');
    });
  };

  const navigate = useNavigate();
  const DashClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/Dashboard");
  };

  const InicioClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/");
  };

  const RegisterClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/Registrarse");
  };

  const RecuperarContraseñaClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/RecuperarContraseña");
  };

  const handleConfirm = () => {
    console.log("Sweet Alert cerrado");
    // ... Más lógica después de cerrar la alerta si es necesaria
    setAlertProps(null); // Limpiar las propiedades de la alerta después de cerrarla
  };

  return (
    <div>
      <div className="px-10 py-20">
        <div className="flex">
          <h1 className="text-5xl font-semibold text-white">Iniciar Sesión</h1>
          <button className="text-white ml-auto" onClick={InicioClick}>
            Volver
          </button>
        </div>
        <p className="font-medio text-lg text-white mt-4">
          {" "}
          Bienvenido! Por favor ingrese su información
        </p>
        <div className="mt-8">
          <div>
            <label className="text-lg font-medium text-white">Correo</label>
            <input
              value={formData.email}
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent text-white"
              placeholder="Ingreese su correo"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            ></input>
          </div>
        </div>
        <div>
          <div className="mt-5">
            <label className="text-lg font-medium text-white">Contraseña</label>
            <input
              value={formData.password}
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent text-white"
              placeholder="Ingreese su contraseña"
              type="password"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            ></input>
          </div>
          <div className="mt-8 flex justify-between items-center">
            <div>
              <input type="checkbox" id="remember"></input>
              <label
                className="ml-2 font-medium text-base text-gray-300"
                for="remember"
              >
                Recordar por 30 días
              </label>
            </div>
            <button
              className="font-mediun text-base text-white"
              onClick={RecuperarContraseñaClick}
            >
              Recuperar contraseña
            </button>
          </div>
          <div className="mt-8 flex flex-col gap-y-4">
            <button
              className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] 
                    ease-in-out py-3 rounded-xl bg-[#D1C6AE] text-black text-center text-lg font-bold"
              onClick={handleSubmit}
            >
              Iniciar Sesión
            </button>
          </div>
          <div className="mt-8 flex justify-center items-center">
            <p className="font-thin text-base text-white">
              No tienes una cuenta?
            </p>
            <button
              className="ml-2 font-normal text-base text-white"
              onClick={RegisterClick}
            >
              Registrate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
