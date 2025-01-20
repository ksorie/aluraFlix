import styles from "./Banner.module.css";

function Banner({ img, titulo, categoria, descripcion, video,colorPrimario,equipos }) {
return (
    <section
    className={styles.capa}
    style={{ backgroundImage: `url("./img/${img}.png")` }}>
    <div className={styles.contenido}>
        <div className={styles.descripcionVideo}>
            <h2>{categoria}</h2>
            <h1 >{titulo}</h1>
            <p>{descripcion}</p>
        </div>


        {/* Mostrar el video si existe */}
        {video && (
          <div className={styles.video} style={{ color: colorPrimario }}>
            <iframe
              src={video}
              title={titulo}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles.videoIframe}
            ></iframe>
          </div>
        )}
      </div>
    </section>
  );
}

export default Banner;
