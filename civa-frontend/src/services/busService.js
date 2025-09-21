import { handleApiError } from "../utils/handleError";

const API_URL = "http://localhost:8080/bus";

const getHeaders = () => {
  const token = localStorage.getItem("authToken");
  return {
    "Content-Type": "application/json",
    ...(token && { Authorization: token }) // 👈 solo agrega si existe
  };
};

const busService = {
  getAllBuses: async () => {
    try {
      const response = await fetch(API_URL, {
        headers: getHeaders(),
      });
      return await handleApiError(response);
    } catch (error) {
      console.error("Error al obtener los buses:", error.message);
      return [];
    }
  },

  getBusById: async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        headers: getHeaders(),
      });
      return await handleApiError(response);
    } catch (error) {
      console.error("Error al obtener el bus:", error.message);
      return null;
    }
  },
};

export default busService;