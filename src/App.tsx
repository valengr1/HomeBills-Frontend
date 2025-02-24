import { BrowserRouter, Route, Routes } from "react-router-dom"
import Meses from "./Pages/Meses"
import InicioSesion from "./Pages/InicioSesion"
import "./Styles/App.css";
import Registros from "./Pages/Registros";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InicioSesion />} />
        <Route path="/meses" element={<Meses />} />
        <Route path="/registros/:id/:mes" element={<Registros />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
