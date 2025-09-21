const BusCard = ({ bus }) => (
  <div className="card shadow-sm mb-3">
    <div className="card-body">
      <h5 className="card-title">Bus #{bus.number}</h5>
      <h6 className="card-subtitle mb-2 text-muted">Placa: {bus.plate}</h6>
      <p className="card-text">
        <strong>Características:</strong> {bus.features || "N/A"}
      </p>
      <p className="card-text">
        <strong>Marca:</strong> {bus.brand?.name || "N/A"}
      </p>
      <p className="card-text">
        <strong>Estado:</strong>{" "}
        <span className={`badge ${bus.active ? "bg-success" : "bg-danger"}`}>
          {bus.active ? "Activo" : "Inactivo"}
        </span>
      </p>
      <p className="card-text">
        <small className="text-muted">
          Creado: {new Date(bus.createdAt).toLocaleString()}
        </small>
      </p>
    </div>
  </div>
);

export default BusCard;