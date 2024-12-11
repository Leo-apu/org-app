import './App.css';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Formulario from './components/formulario/formulario';
import Equipo from './components/equipo/equipo';
import { useEffect, useState } from "react";

function App() {
  const storedColaboradores = JSON.parse(localStorage.getItem("colaboradores")) || [];
  const [colaboradores, setColaboradores] = useState(storedColaboradores);

  useEffect(() => {
    localStorage.setItem("colaboradores", JSON.stringify(colaboradores));
  }, [colaboradores]);

  const equipos = [
    {
      title: "Programación",
      bgColor: "var(--team-programming-bg)",
      highlightColor: "var(--team-programming-highlight)",
    },
    {
      title: "Front End",
      bgColor: "var(--team-front-end-bg)",
      highlightColor: "var(--team-front-end-highlight)",
    },
    {
      title: "Data Science",
      bgColor: "var(--team-data-science-bg)",
      highlightColor: "var(--team-data-science-highlight)",
    },
    {
      title: "Devops",
      bgColor: "var(--team-devops-bg)",
      highlightColor: "var(--team-devops-highlight)",
    },
    {
      title: "UX y Diseño",
      bgColor: "var(--team-ux-ui-bg)",
      highlightColor: "var(--team-ux-ui-highlight)",
    },
    {
      title: "Móvil",
      bgColor: "var(--team-mobile-bg)",
      highlightColor: "var(--team-mobile-highlight)",
    },
    {
      title: "Innovación y Gestión",
      bgColor: "var(--team-innovation-bg)",
      highlightColor: "var(--team-innovation-highlight)",
    },
  ];
  
  const agregarColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

    // Filtrar equipos con colaboradores asociados
    const equiposConColaboradores = equipos.filter((equipo) =>
      colaboradores.some((colaborador) => colaborador.equipo === equipo.title)
    );

  return (
    <div className="App">
      <Header />
      <Formulario equipos={equipos.map((equipo) => equipo.title)} agregarColaborador={agregarColaborador}  />
      <Equipo equipos={equiposConColaboradores} colaboradores={colaboradores} />
      <Footer />
    </div>
  );
}

export default App;
