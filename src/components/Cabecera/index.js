import styles from "./Cabecera.module.css"
import logo from "./LogoMain.png"
import { Link } from "react-router-dom"
import CabeceraLink from "components/CabeceraLink"

function Cabecera (){
    return(
       
        <header className={styles.cabecera}>
            <Link to="/">
                <img src={logo} alt="Logo AluraFlix" />
            </Link>
            <nav>
                <CabeceraLink url="/"  className="homeButton">Home</CabeceraLink>
                <CabeceraLink url="/nuevo-video" className="videoButton">Nuevo Video</CabeceraLink>
            </nav>
        </header>
    )
}

export default Cabecera