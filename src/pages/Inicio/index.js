import Banner from "components/Banner";
import Equipos from "components/Equipos";
import { useState } from "react";
import styles from "../Inicio/inicio.modules.css"

function Inicio({equipos, aggVideo,registrarVideo,eliminarVideo}){ 
    const [videoSeleccionado, setVideoSeleccionado] = useState({
        img: "banner", // Imagen por defecto
        titulo: "Challenge React",
        categoria: "Front End",
        descripcion:
        "Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.",
        video: null, // Video vacío inicialmente
    });
    
    const manejarSeleccionVideo = (video) => {
        setVideoSeleccionado({
        img: video.imagen, // Suponiendo que esta es la URL de la imagen del video
        titulo: video.titulo,
        categoria: video.categoria,
        descripcion: video.descripcion,
        video: video.video, // Añadimos la URL del video
        });
    };

    return(
        <>
                <Banner 
                img= "banner"
                className={styles.banner}
                titulo={videoSeleccionado.titulo}
                categoria={videoSeleccionado.categoria}
                descripcion={videoSeleccionado.descripcion}
                video={videoSeleccionado.video} 
                />

                {equipos.map((equipo) => (
                <Equipos 
                datos={equipo} 
                key={equipo.titulo} 
                aggVideo={aggVideo.filter(video => video.categoria === equipo.titulo)}
                registrarVideo={registrarVideo} 
                eliminarVideo={eliminarVideo}
                manejarSeleccionVideo={manejarSeleccionVideo}
                />
                ))}
                


        </>
    )
}

export default Inicio