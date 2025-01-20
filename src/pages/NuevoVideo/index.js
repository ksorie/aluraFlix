import Formulario from "components/Formulario"
import styles from "./NuevoVideo.css"

function NuevoVideo({equipos, registrarVideo, aggVideo}){

    
    return(
        <>
            <article>
                <h2>NUEVO VIDEO</h2>
                <p>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</p>
                <Formulario equipos={equipos.map((equipo) =>equipo.titulo)}  registrarVideo={registrarVideo} aggVideo={aggVideo} />
            </article>
            
        </>
)
}       
        
    

export default NuevoVideo