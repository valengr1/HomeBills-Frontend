import { Route, Routes } from "react-router-dom"
import Meses from "./Pages/Meses"
import InicioSesion from "./Pages/InicioSesion"
import "./Styles/App.css";
import Registros from "./Pages/Registros";
import usePreventBackNavigation from "./Hooks/usePreventBackNavigation";

function App() {
  usePreventBackNavigation();
  return (
    <Routes>
      <Route path="/" element={<InicioSesion />} />
      <Route path="/meses" element={<Meses />} />
      <Route path="/registros/:id/:mes" element={<Registros />} />
    </Routes>
  )
}

export default App
