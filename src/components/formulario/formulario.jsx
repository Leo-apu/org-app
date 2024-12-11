import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./formulario.css";

const Formulario = ( { equipos }) => {
  const [showForm, setShowForm] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
    console.log("Datos enviados:", data);
  };

  const toggleForm = () => {
    setShowForm(!showForm); 
  };

  return (
    <div>
      {showForm && (
        <div className="form-container">
          <form onSubmit={handleSubmit(onSubmit)} className="form">
            <h2>Rellena el formulario para crear el colaborador.</h2>

            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                placeholder="Ingresar nombre"
                {...register("nombre", {
                  required: "El nombre es obligatorio",
                })}
              />
              {errors.nombre && (
                <p className="error">{errors.nombre.message}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="puesto">Puesto</label>
              <input
                type="text"
                id="puesto"
                placeholder="Ingresar puesto"
                {...register("puesto", {
                  required: "El puesto es obligatorio",
                })}
              />
              {errors.puesto && (
                <p className="error">{errors.puesto.message}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="foto">Foto</label>
              <input
                type="text"
                id="foto"
                placeholder="Ingresar enlace de foto"
                {...register("foto", {
                  required: "El enlace de la foto es obligatorio",
                  pattern: {
                    value: /^(http|https):\/\/[^\s$.?#].[^\s]*$/,
                    message: "El enlace debe ser una URL válida",
                  },
                })}
              />
              {errors.foto && <p className="error">{errors.foto.message}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="equipo">Equipo</label>
              <select
                id="equipo"
                {...register("equipo", {
                  required: "Seleccionar un equipo es obligatorio",
                })}
              >
                <option value="">Seleccionar equipo</option>
                {equipos.map((equipo, index) => (
                  <option key={index} value={equipo}>
                    {equipo}
                  </option>
                ))}
              </select>
              {errors.equipo && (
                <p className="error">{errors.equipo.message}</p>
              )}
            </div>

            <button type="submit" className="btn-crear">
              Crear
            </button>
          </form>
        </div>
      )}

      <section className="btn-container">
        <div className="titulo">
            <h2 className="title-org">Mi Organizacion</h2>
            <div className="line"></div>
        </div>
        <img className="btn-toggle" onClick={toggleForm} src="./img/btn-agregar.png" alt="agregar" />
      </section>
    </div>
  );
};

export default Formulario;
