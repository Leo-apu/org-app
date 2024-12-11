import React, { Fragment } from "react";
import "./equipo.css";
import Colaborador from "../colaborador/colaborador";

function Equipo( { equipos, colaboradores } ) {
    return (
        <Fragment>
            { equipos && equipos.map( (equipo ) => {
                return (
                    <section key={ equipo.title } className="equipo" style={{ backgroundColor: equipo.bgColor }}>
                        <h3  style={{ borderColor: equipo.highlightColor , color: equipo.highlightColor }}>
                            { equipo.title } 
                        </h3>
                        <div className="colaboradores">
                            <Colaborador colorPrimario={ equipo.highlightColor }  
                            colaboradores={ colaboradores.filter( colaborador => colaborador.equipo === equipo.title ) }/>
                        </div>
                    </section>
                );
            })} 
        </Fragment>
    );
}   

export default Equipo;