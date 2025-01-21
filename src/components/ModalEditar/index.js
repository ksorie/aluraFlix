/*import Campo from "components/Campos";
import styles from "./ModalEditar.module.css";
import Categoria from "components/Categoria";
import Boton from "components/Botones";
import Formulario from "components/Formulario";

/*function ModalEditar({equipos, datos, isOpen, onClose, onSave, limpiarCampos }) {
  if (!isOpen) return null;

  const { titulo, categoria, imagen, video, descripcion } = datos;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          ✖
        </button>
        <h3>Editar Video</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const editedData = {
              titulo: e.target.titulo.value,
              categoria: e.target.categoria.value,
              imagen: e.target.imagen.value,
              video: e.target.video.value,
              descripcion: e.target.descripcion.value,
            };
            console.log("Datos guardados:", editedData); // Debug
            onSave(editedData);
          }}
          
        >
        const ModalEditar = ({ titulo, categoria,video, imagen,descripcion,limpiarCampos, equipos}) => { //Recibimo la foto que e sun objeto, y la imahen viene nula

            return <>
                {Formulario && <> 
                    <Overlay /> 

                        <form method="dialog" onClose={alCerrar}>
                            <Campo valor={titulo} titulo="Titulo" required />
                            <Categoria
                            equipos={equipos || []} // Array de equipos
                            valor={categoria} // Valor actual de la categoría
                            actualizarValor={(nuevaCategoria) => {
                                console.log("Nueva categoría seleccionada:", nuevaCategoria);
                            }}
                        />
                            <Campo valor={imagen} titulo="Imagen" required />
                            <Campo valor={video} titulo="Video" required />
                            <Campo valor={descripcion} titulo="Descripcion" esTextarea={true} />
                            <div className={styles.botones}>
                                    <Boton type="submit" className={styles.botonGuardar}>Guardar</Boton>
                                    <Boton className={styles.botonLimpiar} onClick={limpiarCampos}>Limpiar</Boton>
                            </div>
                        </form>
                </>}
        
            </>
        
        
        }
        

 /*           <Campo defaultValue={titulo} titulo="Titulo" required />
            <Categoria
            equipos={equipos || []} // Array de equipos
            valor={categoria} // Valor actual de la categoría
            actualizarValor={(nuevaCategoria) => {
                console.log("Nueva categoría seleccionada:", nuevaCategoria);
            }}
        />
            <Campo defaultValue={imagen} titulo="Imagen" required />
            <Campo defaultValue={video} titulo="Video" required />
            <Campo defaultValue={descripcion} titulo="Descripcion" esTextarea={true} />
            <div className={styles.botones}>
                    <Boton type="submit" className={styles.botonGuardar}>Guardar</Boton>
                    <Boton className={styles.botonLimpiar} onClick={limpiarCampos}>Limpiar</Boton>
            </div>
        </form>
      </div>
    </div>
  );
}
  
export default ModalEditar;*/


