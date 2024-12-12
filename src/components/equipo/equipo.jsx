import React, { Fragment } from "react";
import "./equipo.css";
import Colaborador from "../colaboradores/colaborador";

function Equipo( { equipos, colaboradores , eliminarColaborador , actualizarColor } ) {

    function obtenerValorCSS(variableCSS) {
        if (variableCSS.startsWith("var(") && variableCSS.endsWith(")")) {
            const nombreVariable = variableCSS.slice(4, -1).trim();
            return getComputedStyle(document.documentElement).getPropertyValue(nombreVariable).trim();
        }
        return variableCSS;
    }

    return (
        <Fragment>
            { equipos && equipos.map( (equipo ) => {

                const colorPrimario = obtenerValorCSS(equipo.highlightColor);
                return (
                    <section key={ equipo.title } className="equipo" style={{ backgroundColor: equipo.bgColor }}>
                        <input
                            type='color'
                            className="input-color"
                            value={ colorPrimario}
                            onChange={(evento) => {
                                actualizarColor(evento.target.value, equipo.id);
                            }}
                        />
                        <h3  style={{ borderColor: equipo.highlightColor , color: equipo.highlightColor }}>
                            { equipo.title } 
                        </h3>
                        <div className="colaboradores">
                            <Colaborador colorPrimario={ equipo.highlightColor }  
                            colaboradores={ colaboradores.filter( colaborador => colaborador.equipo === equipo.title ) }
                            eliminarColaborador={ eliminarColaborador }/>
                        </div>
                    </section>
                );
            })} 
        </Fragment>
    );
}   

export default Equipo;