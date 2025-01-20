import Campo from "components/Campos";
import { useState } from "react";
import styles from "./Formulario.module.css";
import Boton from "components/Botones";
import Categoria from "components/Categoria"; 

function Formulario(props) {
    const [titulo, actualizarTitulo] = useState("");
    const [imagen, actualizarFoto] = useState("");
    const [video, actualizarVideo] = useState("");
    const [descripcion, actualizarDescripcion] = useState("");
    const [categoria, actualizarCategoria] = useState("");
    const {registrarVideo} =props

    // Lista de categorías (puede moverse a un archivo de configuración si se usa en varios lugares)

    // Función para limpiar los campos
    const limpiarCampos = () => {
        actualizarTitulo("");
        actualizarFoto("");
        actualizarVideo("");
        actualizarDescripcion("");
        actualizarCategoria("");
    };

    const manejarEnvio = (e) => {
        e.preventDefault();
        
        let datosAEnviar={
            
                titulo,
                categoria,
                imagen,
                video,
                descripcion,      
        }
        registrarVideo(datosAEnviar);
        limpiarCampos(); 
    }

    return (
        <section className={styles.formulario}>
            <h3>Crear Tarjeta</h3>
            <form onSubmit={manejarEnvio}>
                <div>
                    <Campo
                        titulo="Titulo"
                        valor={titulo}
                        placeholder="Ingrese el título"
                        required
                        actualizarValor={actualizarTitulo}
                        
                    />
                    <Categoria
                        valor={categoria}
                        //categorias={categorias}
                        actualizarCategoria={actualizarCategoria}
                        required
                        equipos={props.equipos}
                    />
                </div>
                <div>
                    <Campo
                        valor={imagen}
                        titulo="Imagen"
                        placeholder="Ingrese el enlace de la imagen"
                        required
                        actualizarValor={actualizarFoto}
                    />
                    <Campo
                        valor={video}
                        titulo="Video"
                        placeholder="Ingrese el enlace del video"
                        required
                        actualizarValor={actualizarVideo}
                    />
                </div>
                <Campo
                    valor={descripcion}
                    titulo="Descripción"
                    placeholder="Escribe una descripción"
                    actualizarValor={actualizarDescripcion}
                    required
                    esTextarea={true}
                    className={styles.textarea}
                />
                <div className={styles.botones}>
                    <Boton type="submit" className={styles.botonGuardar}>Guardar</Boton>
                    <Boton className={styles.botonLimpiar} onClick={limpiarCampos}>Limpiar</Boton>
                </div>
            </form>
        </section>
    );
}

export default Formulario;
