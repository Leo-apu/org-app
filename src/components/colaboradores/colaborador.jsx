import React, { Fragment } from 'react';
import './colaborador.css';


function Colaborador( { colorPrimario, colaboradores} ) {
    return (
        <Fragment>
            {colaboradores.length > 0  && colaboradores.map((colaborador, index) => (
            <div key={index} className="colaborador">
                <div className="encabezado" style={{ backgroundColor: colorPrimario }} >
                <img src={colaborador.foto} alt={colaborador.nombre} />
                </div>
                <div className="info">
                <h4>{colaborador.nombre}</h4>
                <h5>{colaborador.puesto}</h5>
                </div>
            </div>
            ))}
        </Fragment>
    );
}       


export default Colaborador;