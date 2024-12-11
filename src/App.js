import logo from './logo.svg';
import './App.css';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Formulario from './components/formulario/formulario';
import Equipo from './components/equipo/equipo';

function App() {

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
  

  return (
    <div className="App">
      <Header />
      <Formulario equipos={equipos.map((equipo) => equipo.title)} />
      <Equipo equipos={equipos} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer />
    </div>
  );
}

export default App;
