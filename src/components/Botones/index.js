import styles from "./BotonesModule.css"

const Boton = ({ children, className, ...rest }) => {
    // Combina la clase base y las clases adicionales
    const botonClass = `${styles.boton} ${className || ""}`.trim();

    return (
        <button className={botonClass} {...rest}>
            {children}
        </button>
    );
};

export default Boton;
