import React, { Fragment } from "react";
import "./equipo.css";

function Equipo( { equipos } ) {
    return (
        <Fragment>
            { equipos && equipos.map( (equipo ) => {
                return (
                    <section key={ equipo.title } className="equipo" style={{ backgroundColor: equipo.bgColor }}>
                        <h3  style={{ borderColor: equipo.highlightColor , color: equipo.highlightColor }}>
                            { equipo.title } 
                        </h3>
                        <div className="colaboradores">
                        </div>
                    </section>
                );
            })} 
        </Fragment>
    );
}   

export default Equipo;