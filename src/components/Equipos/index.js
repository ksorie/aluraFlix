import styles from "./Equipo.module.css"
import CardVideo from "components/cardVideo"
function Equipos(props){
    //Destructuracion
    const {colorPrimario, titulo} =props.datos
    const {aggVideo, eliminarVideo,manejarSeleccionVideo} =props

    const obj ={
        backgroundColor: colorPrimario
    }

    return <> 
    { aggVideo.length > 0 &&
        <section className={styles.equipo}>
            <h3 style={obj}>{titulo}</h3>
            <div className={styles.containerVideo}>    
                {
                    aggVideo.map((video,index) => <CardVideo 
                    datos={video} 
                    key={index} colorPrimario={colorPrimario}
                    eliminarVideo={eliminarVideo}
                    onClick={() => manejarSeleccionVideo(video)}/>)
                    
                }          
            </div>
        </section>
        }
    </>
    

}
export default Equipos