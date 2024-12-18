import React, { Fragment } from 'react';
import './colaborador.css';
import { AiFillCloseCircle , AiFillHeart , AiOutlineHeart } from 'react-icons/ai';



function Colaborador( { colorPrimario, colaboradores , eliminarColaborador , like } ) {
    return (
        <Fragment>
            {colaboradores.length > 0  && colaboradores.map((colaborador, index) => (
            <div key={index} className="colaborador">
                <AiFillCloseCircle className="eliminar" onClick={() => eliminarColaborador(colaborador.id)} />
                <div className="encabezado" style={{ backgroundColor: colorPrimario }} >
                    <img src={colaborador.foto} alt={colaborador.nombre} />
                </div>
                <div className="info">
                    <h4>{colaborador.nombre}</h4>
                    <h5>{colaborador.puesto}</h5>
                    {colaborador.fav ? <AiFillHeart className='favorito' color="red" onClick={() => like(colaborador.id)} /> : <AiOutlineHeart className='favorito' onClick={() => like(colaborador.id)} />}
                </div>
            </div>
            ))}
        </Fragment>
    );
}       


export default Colaborador;