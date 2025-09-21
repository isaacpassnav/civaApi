import React, { useState, useEffect } from "react";
import busService from "../services/busService";
import BusRow from "../components/BusRow";
import Loader from "../components/Loader";

const BusList = () => {
  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBuses = async () => {
      try {
        const data = await busService.getAllBuses();
        console.log("[BusList] fetchBuses success:", data);
        setBuses(data.content || []);
      } catch (err) {
        setError("No se pudieron cargar los buses");
      } finally {
        setLoading(false); // 👈 aseguramos que deje de cargar
      }
    };
    fetchBuses();
  }, []);

  if (loading) return <Loader />;
  return (
    <div className="container my-4">
      <h2 className="mb-4">Lista de Buses</h2>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <div className="table-responsive shadow-sm">
        <table className="table table-striped table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Número</th>
              <th>Placa</th>
              <th>Marca</th>
              <th>Estado</th>
              <th>Detalles</th>
            </tr>
          </thead>
          <tbody>
            {buses.length > 0 ? (
              buses.map((bus) => <BusRow key={bus.id} bus={bus} />)
            ) : (
              <tr>
                <td colSpan="6" className="text-center text-muted py-3">
                  No hay buses registrados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default BusList;