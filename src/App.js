import Cabecera from "components/Cabecera";
import Container from "components/Container";
import Pie from "components/Pie";
import Inicio from "pages/Inicio";
import NuevoVideo from "pages/NuevoVideo";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [aggVideo, actualizarAggVideo] = useState([
    {  
      id: uuidv4(),
      "titulo": "Como utilizar el Display block, inline, inline-block",
      "categoria": "Front End",
      "imagen": "https://caelum-online-public.s3.amazonaws.com/ESP-2052+-++React%3A+practicando+React+con+Js/282x425+-+Jean.png",
      "video": "https://www.youtube.com/embed/AG2QssLpQzI?si=6Yn355wcxAqU7_Ld",
      "descripcion":"Como utilizar el Display block, inline, inline-block"
  },
  {
      id: uuidv4(),
      "titulo": "Productividad en el trabajo remoto",
      "categoria": "Innovación y Gestion",
      "imagen": "https://caelum-online-public.s3.amazonaws.com/ESP-2052+-++React%3A+practicando+React+con+Js/282x425+-+Gabi.png",
      "video": "https://www.youtube.com/embed/AULPtYo25Lw?si=UGdKX1NSrEcQ0jfn",
      "descripcion": "Productividad en el trabajo remoto"
  },
  {
      id: uuidv4(),
      "titulo": "¿Cuáles son las principales áreas de la programación?",
      "categoria": "Programación",
      "imagen": "https://caelum-online-public.s3.amazonaws.com/ESP-2052+-++React%3A+practicando+React+con+Js/282x425+-+Genesis.png",
      "video": "https://www.youtube.com/embed/03cxUlwLVt4?si=zVCUQNO-eS2RZQTO",
      "descripcion": "¿Cuáles son las principales áreas de la programación?"

  },
  {
      id: uuidv4(),
      "titulo": "Detección de intruso con IA",
      "categoria": "Devops",
      "imagen": "https://caelum-online-public.s3.amazonaws.com/ESP-2052+-++React%3A+practicando+React+con+Js/282x425+-+Ale.png",
      "video": "https://www.youtube.com/embed/5T_Q_NtNLZE",
      "descripcion":  "Detección de intruso con IA"

  },,
  {
      id: uuidv4(),
      "titulo": "¿Cómo un desarrollador Front End utiliza el Figma?",
      "categoria":  "Front End",
      "imagen": "https://caelum-online-public.s3.amazonaws.com/ESP-2052+-++React%3A+practicando+React+con+Js/282x425+-+Gabi.png",
      "video": "https://www.youtube.com/watch?v=UuAX5azcvDQ&t=184s",
      "descripcion":  "¿Cómo un desarrollador Front End utiliza el Figma? En este Alura+, Genesys, instructora de Alura Latam, nos responde esa pregunta y nos muestra esta conocida herramienta."
  
  },
  {
      id: uuidv4(),
      "titulo": "Bucles y Bucles Anidados en Javascript",
      "categoria":  "Programación",
      "imagen": "https://caelum-online-public.s3.amazonaws.com/ESP-2052+-++React%3A+practicando+React+con+Js/282x425+-+Gabi.png",
      "video": "https://www.youtube.com/watch?v=FEdqGdtZuwc",
      "descripcion":  "En este video, la instructora Génesys Rondón nos explica como aplicar Bucles utilizando como ejemplo un calendario."
  
  },
  {
      id: uuidv4(),
      "titulo": "Consejos de CSS FlexBox para comenzar",
      "categoria":  "Front End",
      "imagen": "https://caelum-online-public.s3.amazonaws.com/ESP-2052+-++React%3A+practicando+React+con+Js/282x425+-+Gabi.png",
      "video": "https://www.youtube.com/watch?v=EB4vWLzfVcI",
      "descripcion":"En esta nueva edición de Alura + aprenderemos un poco más sobre los primeros pasos para empezar a trabajar con Flexbox en CSS y conoceremos las principales etiquetas y cómo aplicarlas."
  
  },
  {
      id: uuidv4(),
      "titulo": "Tus primeros pasos estudiando programación",
      "categoria": "Programación",
      "imagen": "https://caelum-online-public.s3.amazonaws.com/ESP-2052+-++React%3A+practicando+React+con+Js/282x425+-+Gabi.png",
      "video": "https://www.youtube.com/watch?v=5K97MfYA1sw",
      "descripcion":"Quiero entrar en el mundo de la programción pero, ¿qué debo estudiar primero?, ¿necesito tener un título universitario para encontrar empleo?, ¿hay edad máxima para poder empezar a aprender a programar?"
  
  },
  {
      id: uuidv4(),
      "titulo": "¿Cuál Herramienta de Gestión de Proyectos es la Mejor para Ti?",
      "categoria": "Innovación y Gestion",
      "imagen": "https://caelum-online-public.s3.amazonaws.com/ESP-2052+-++React%3A+practicando+React+con+Js/282x425+-+Gabi.png",
      "video": "https://www.youtube.com/watch?v=O4cxvckONRE",
      "descripcion": "En este AluraTips, Ellen Pimentel comparte su trayectoria en la gestión de proyectos, comenzando desde su formación en Turismo hasta su transición a la programación y su rol actual en Alura.Ella destaca el uso de herramientas como Notion y ClickUp, enfatizando que, aunque son útiles, lo más importante son las habilidades de planificación y organización"
  },
  {
      id: uuidv4(),
      "titulo": "¿Qué es la Heutagogía? La Revolución del Aprendizaje Autodirigido",
      "categoria": "Innovación y Gestion",
      "imagen": "https://caelum-online-public.s3.amazonaws.com/ESP-2052+-++React%3A+practicando+React+con+Js/282x425+-+Gabi.png",
      "video": "https://www.youtube.com/watch?v=-hq-rOK8iWM",
      "descripcion": "¿Has oído hablar de la heutagogía? En este video exploramos este enfoque revolucionario de aprendizaje autodirigido que promueve la autonomía y la autorregulación en el proceso de aprender."
  }
])

//registrar Nuevo video
  const registrarVideo = (video) => {
      console.log("Nuevo Video", video);
      actualizarAggVideo([...aggVideo, video]); // Se agrega el nuevo video al estado
  };

  //Eliminar Video
  const eliminarVideo =(id)=>{
    console.log("Eliminar colaborador", id)
    const nuevosVideos = aggVideo.filter((video)=> video.id !== id)
    actualizarAggVideo(nuevosVideos)
}    


  //Lista de categoria de equipos
  const equipos = ([
    {
      id: uuidv4(),
      titulo: "Programación",
      colorPrimario:"#57C278",
    },
    {
      id: uuidv4(),
      titulo:  "Front End",
      colorPrimario:"#82CFFA",
    },
    {
      id: uuidv4(),
      titulo:"Data Science",
      colorPrimario:"#A6D157",
    },
    {
      id: uuidv4(),
      titulo:"Devops",
      colorPrimario:"#E06B69",
    },
    {
      id: uuidv4(),
      titulo:"UX y Diseño",
      colorPrimario:"#DB6EBF",
    },
    {
      id: uuidv4(),
      titulo:"Movil",
      colorPrimario:"#FFBA05",
    },
    {
      id: uuidv4(),
    titulo:"Innovación y Gestion",
    colorPrimario:"#FF8A29",
    }
])


  return (
    <BrowserRouter>
    <Cabecera />
    <Container>
      <Routes>
            <Route path="/" element={<Inicio  equipos={equipos} registrarVideo={registrarVideo}  aggVideo={aggVideo} eliminarVideo={eliminarVideo}  />} />
            <Route path="/nuevo-video" element={<NuevoVideo equipos={equipos}  registrarVideo={registrarVideo}  aggVideo={aggVideo}/>} />
        </Routes>
    </Container>  
    <Pie/>
    </BrowserRouter>

  );
}

export default App;
