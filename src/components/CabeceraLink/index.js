import { Link } from "react-router-dom";
import styles from "./CabeceraBotones.module.css"; // Asegúrate de importar los estilos correctamente.

function CabeceraLink({ url, children, className }) {
  return (
    <Link className={`${styles.linkButton} ${styles[className]}`} to={url}>      
    {children}
    </Link>
  );
}

export default CabeceraLink;