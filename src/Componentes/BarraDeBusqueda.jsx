import "./Css/BarraDeBusqueda.css";

export default function BarraDeBusqueda({ setIcao }) {
  return (
    <div className="BarraDeBusqueda">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Ingresar código ICAO:"
          onChange={(e) => setIcao(e.target.value.toUpperCase())}
        />
        <button>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  );
}
