import styles from "./cardVideo.module.css"
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

function CardVideo(props){
    const { titulo, categoria,imagen, video, descripcion, id }=props.datos
    const {colorPrimario, eliminarVideo,onClick} =props

    return(
        <div className={styles.container} 
        style={{boxShadow: colorPrimario,color:colorPrimario, borde:colorPrimario }}
        onClick={onClick}>
            <div className={styles.card} style={{boxShadow: colorPrimario,color:colorPrimario, borde:colorPrimario}}>
                <div className={styles.imagen}> 
                    {/* Contenedor de la imagen y el título */}
                    <div className={styles.tituloContainer}>
                        <h3 className={styles.titulo}>{titulo}</h3>
                    </div>
                    <img src={imagen} alt={titulo} className={styles.videoImagen} />
                </div>
            </div>
            <div className={styles.videoContainer} id="videoContainer">
                <iframe 
                src={video} 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
                </iframe>
            </div>
            <div className={styles.cardBotones}>
                <button className={styles.botonBorrar} onClick={(e) => {
                    e.stopPropagation(); // Prevenir que el clic llegue al contenedor principal
                    eliminarVideo(id);
                }}>
                    <MdDeleteForever />
                    Borrar
                </button>
                <button className={styles.botonEditar}
                onClick={(e) => e.stopPropagation()}>
                    <FaEdit />
                    Editar
                </button>
            </div>
        </div>
    )
}

export default CardVideo
