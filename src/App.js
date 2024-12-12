import './App.css';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Formulario from './components/formulario/formulario';
import Equipo from './components/equipo/equipo';
import { useEffect, useState } from "react";
import hexToRgba from 'hex-to-rgba';
import {v4 as uuid} from 'uuid';

function App() {
  const storedColaboradores = JSON.parse(localStorage.getItem("colaboradores")) || [{
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor"
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora"
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam"
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor"
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack"
  }];
  const storedEquipos = JSON.parse(localStorage.getItem("equipos")) || [
    {
      id: uuid(),
      title: "Programación",
      bgColor: "var(--team-programming-bg)",
      highlightColor: "var(--team-programming-highlight)",
    },
    {
      id: uuid(),
      title: "Front End",
      bgColor: "var(--team-front-end-bg)",
      highlightColor: "var(--team-front-end-highlight)",
    },
    {
      id: uuid(),
      title: "Data Science",
      bgColor: "var(--team-data-science-bg)",
      highlightColor: "var(--team-data-science-highlight)",
    },
    {
      id: uuid(),
      title: "Devops",
      bgColor: "var(--team-devops-bg)",
      highlightColor: "var(--team-devops-highlight)",
    },
    {
      id: uuid(),
      title: "UX y Diseño",
      bgColor: "var(--team-ux-ui-bg)",
      highlightColor: "var(--team-ux-ui-highlight)",
    },
    {
      id: uuid(),
      title: "Móvil",
      bgColor: "var(--team-mobile-bg)",
      highlightColor: "var(--team-mobile-highlight)",
    },
    {
      id: uuid(),
      title: "Innovación y Gestión",
      bgColor: "var(--team-innovation-bg)",
      highlightColor: "var(--team-innovation-highlight)",
    },
  ];
  const [colaboradores, setColaboradores] = useState(storedColaboradores);
  const [equipos , actualizarEquipos] = useState(storedEquipos);

  useEffect(() => {
    localStorage.setItem("colaboradores", JSON.stringify(colaboradores));
  }, [colaboradores]);

  useEffect(() => {
    localStorage.setItem("equipos", JSON.stringify(equipos));
  }, [equipos]);
  
  const agregarColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

    // Filtrar equipos con colaboradores asociados
    const equiposConColaboradores = equipos.filter((equipo) =>
      colaboradores.some((colaborador) => colaborador.equipo === equipo.title)
    );

    const eliminarColaborador = (id) => {
      const colaboradoresActualizados = colaboradores.filter((colaborador) => colaborador.id !== id);
      setColaboradores(colaboradoresActualizados);
    };

    const actualizarColor = (color, id) => {
      const equiposActualizados = equipos.map((equipo) => {
        if (equipo.id === id) {
          equipo.highlightColor = color;
          equipo.bgColor = hexToRgba(color, 0.4);
        }
        return equipo;
      });
      actualizarEquipos(equiposActualizados);
    };
    console.log(equipos);
  return (
    <div className="App">
      <Header />
      <Formulario equipos={equipos.map((equipo) => equipo.title)} agregarColaborador={agregarColaborador}  />
      <Equipo equipos={equiposConColaboradores} colaboradores={colaboradores} eliminarColaborador={eliminarColaborador} 
      actualizarColor={actualizarColor} />
      <Footer />
    </div>
  );
}

export default App;
