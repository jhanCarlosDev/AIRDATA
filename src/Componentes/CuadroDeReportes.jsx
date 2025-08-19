import "./Css/CuadroDeReportes.css";
export default function CuadroDeReportes({titulo,aeropuerto,valor,imagen}) {


  return (
    <div className="ContenedorDeReporte">
      <h2>{titulo}</h2>
      <img src={imagen}alt={titulo}/>
      <p>AEROPUERTO: {aeropuerto}</p>
      <p> {valor}</p>
    </div>
  );
}
