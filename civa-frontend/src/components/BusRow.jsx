import { Link } from "react-router-dom";

const BusRow = ({ bus }) => (
  <tr>
    <td>{bus.id}</td>
    <td>{bus.number}</td>
    <td>{bus.plate}</td>
    <td>{bus.brand?.name || "N/A"}</td>
    <td>
      <span
        className={`badge ${bus.active ? "bg-success" : "bg-danger"}`}
      >
        {bus.active ? "Activo" : "Inactivo"}
      </span>
    </td>
    <td>
      <Link to={`/bus/${bus.id}`} className="btn btn-link p-0">
        Ver Detalles
      </Link>
    </td>
  </tr>
);

export default BusRow;