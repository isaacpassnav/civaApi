import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import busService from "../services/busService";
import BusCard from "../components/BusCard";
import Loader from "../components/Loader";

const BusDetail = () => {
  const { id } = useParams();
  const [bus, setBus] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBus = async () => {
      const data = await busService.getBusById(id);
      setBus(data);
      setLoading(false);
    };
    fetchBus();
  }, [id]);

  if (loading) return <Loader />;

  if (!bus) {
    return (
      <div className="container my-4">
        <div className="alert alert-danger text-center">Bus no encontrado</div>
        <Link to="/" className="btn btn-primary mt-3">
          ← Volver a lista
        </Link>
      </div>
    );
  }
  return (
    <div className="container my-4">
      <h2 className="mb-4">Detalles del Bus</h2>
      <BusCard bus={bus} />
      <Link to="/" className="btn btn-secondary mt-3">
        ← Volver a list
      </Link>
    </div>
  );
};

export default BusDetail;
