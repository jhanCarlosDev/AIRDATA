import { useState } from "react";
import BarraDeBusqueda from "./Componentes/BarraDeBusqueda";
import Titulo from "./Componentes/Titulo";
import "./App.css";
import Api from "./Componentes/Api";

export default function App() {
   const [icao, setIcao] = useState("SKBO"); 
  return (
    
    <div>
      <Titulo />
      <BarraDeBusqueda setIcao={setIcao}/>
      <Api icao= {icao}/>

    </div>
  );
}


