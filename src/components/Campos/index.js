import styles from "./Campo.module.css";

function Campo(props) {
    const placeholderModificado = `${props.placeholder}...`;
    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value);
    };

    return (
        <div className={styles.campo}>
            <label>{props.titulo}</label>
            {props.esTextarea ? (
                <textarea
                    placeholder={placeholderModificado}
                    required={props.required}
                    value={props.valor}
                    onChange={manejarCambio}
                    className={props.className || ""}
                ></textarea>
            ) : (
                <input
                    placeholder={placeholderModificado}
                    required={props.required}
                    value={props.valor}
                    onChange={manejarCambio}
                    className={props.className || ""}
                />
            )}
        </div>
    );
}

export default Campo;
