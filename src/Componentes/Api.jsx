import { useState, useEffect } from "react"; 
import axios from "axios"; 
import CuadroDeReportes from "./CuadroDeReportes";

export default function Api({ icao }) {
  const [metar, setMetar] = useState(null);
  const [reglasDeVuelo, setReglasDeVuelo] = useState(null);
  const [temperatura, setTemperatura] = useState(null);
  const [aeropuerto, setAeropuerto] = useState(null);


  useEffect(() => {
    const token = import.meta.env.VITE_TOKEN; 
    const icaoCodigo = icao; 

    const fetchData = async () => {
      try {
        const { data } = await axios.get(`https://avwx.rest/api/metar/${icaoCodigo}`, {
          headers: { Authorization: `BEARER ${token}` },
        });

        setMetar(data.raw); //METAR completo
        setReglasDeVuelo(data.flight_rules); // Reglas de vuelo
        setTemperatura(data.temperature?.value); // Temperatura
        setAeropuerto(data.station)//Aeropuerto
      } catch (error) {
        console.error("Error en la petición:", error);
      }
    };

    fetchData(); 
  }, [icao]);

  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center", margin: "35px", padding:"5px"}}>
      <CuadroDeReportes
        titulo="METAR"
        aeropuerto={aeropuerto}
        valor={metar}
        imagen="public/img/Metar.jpg"
      />
      <CuadroDeReportes
        titulo="REGLA DE VUELO "
        aeropuerto={aeropuerto}
        valor={reglasDeVuelo}
        imagen="public/img/Regla de vuelo.jpg"
      />
      <CuadroDeReportes
        titulo="TEMPERATURA"
        aeropuerto={aeropuerto}
        valor={` ${temperatura} C°`}
        imagen="public/img/Temperatura.jpg"
      />
    </div>
  );
}
