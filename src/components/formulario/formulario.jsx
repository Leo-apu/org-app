import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./formulario.css";

const Formulario = ( { equipos , agregarColaborador , agregarEquipo }) => {
  const [showForm, setShowForm] = useState(false);
  const {
    register : registerColaborador,
    handleSubmit : handleSubmitColaborador,
    reset : resetColaborador,
    formState: { errors : errorsColaborador },
  } = useForm();

  const {
    register : registerEquipo,
    handleSubmit : handleSubmitEquipo,
    reset : resetEquipo,
    formState: { errors : errorsEquipo },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Datos enviados:", data);
    agregarColaborador(data);
    resetColaborador();
    setShowForm(false);
  };

  const onSubmitEquipo = (data) => {
    console.log("Datos enviados:", data);
    agregarEquipo(data);
    resetEquipo();
    setShowForm(false);
  }
  const toggleForm = () => {
    setShowForm(!showForm); 
  };

  return (
    <div>
      {showForm && (
        <div className="form-container">
          <form onSubmit={handleSubmitColaborador (onSubmit)} className="form">
            <h2>Rellena el formulario para crear el colaborador.</h2>

            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                placeholder="Ingresar nombre"
                {...registerColaborador("nombre", {
                  required: "El nombre es obligatorio",
                })}
              />
              {errorsColaborador.nombre && (
                <p className="error">{errorsColaborador.nombre.message}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="puesto">Puesto</label>
              <input
                type="text"
                id="puesto"
                placeholder="Ingresar puesto"
                {...registerColaborador("puesto", {
                  required: "El puesto es obligatorio",
                })}
              />
              {errorsColaborador.puesto && (
                <p className="error">{errorsColaborador.puesto.message}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="foto">Foto</label>
              <input
                type="text"
                id="foto"
                placeholder="Ingresar enlace de foto"
                {...registerColaborador("foto", {
                  required: "El enlace de la foto es obligatorio",
                  pattern: {
                    value: /^(http|https):\/\/[^\s$.?#].[^\s]*$/,
                    message: "El enlace debe ser una URL válida",
                  },
                })}
              />
              {errorsColaborador.foto && <p className="error">{errorsColaborador.foto.message}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="equipo">Equipo</label>
              <select
                id="equipo"
                {...registerColaborador("equipo", {
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
              {errorsColaborador.equipo && (
                <p className="error">{errorsColaborador.equipo.message}</p>
              )}
            </div>

            <button type="submit" className="btn-crear">
              Crear
            </button>
          </form>

          <form onSubmit={handleSubmitEquipo(onSubmitEquipo)} className="form">
            <h2>Rellena el formulario para crear un equipo.</h2>

            <div className="form-group">
              <label htmlFor="title">titulo</label>
              <input
                type="text"
                id="title"
                placeholder="Ingresar titulo"
                {...registerEquipo("title", {
                  required: "El titulo es obligatorio",
                })}
              />
              {errorsEquipo.title && (
                <p className="error">{errorsEquipo.title.message}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="highlightColor">Color de fondo</label>
              <input className="color"
                type="color"
                id="highlightColor"
                placeholder="Ingresar color de fondo"
                {...registerEquipo("highlightColor", {
                  required: "El color de fondo es obligatorio",
                })}
              />
              {errorsEquipo.bgColor && (
                <p className="error">{errorsEquipo.bgColor.message}</p>
              )}
            </div>

            <button type="submit" className="btn-crear">
              Registrar Equipo
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
