import React, { useState } from "react";
import styles from "./Categoria.module.css"

const Categoria = (props) => {

    

    const manejarCambio = (e) => {
        props.actualizarCategoria(e.target.value);
    };

    return (
        <div>
            <label>Categoría</label>
            <select
            className={styles.categoria}
                id="categoria"
                value={props.valor}
                onChange={manejarCambio}
            >
                <option value="" disabled defaultValue="" hidden>Seleccione una categoría</option>
                {props.equipos.map((equipo, index) => (
                    <option key={index} value={equipo}>
                        {equipo}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Categoria;
