import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BusList from "./pages/BusList";
import BusDetail from "./pages/BusDetail";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute"

function App() {
  const isAuthenticated = !!localStorage.getItem("authToken");

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1 container py-4">
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />

            {isAuthenticated ? (
              <>
                <Route path="/bus" element={<BusList />} />
                <Route path="/bus/:id" element={<BusDetail />} />
              </>
            ) : (
              <Route path="*" element={<Navigate to="/login" replace />} />
            )}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;