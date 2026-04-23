import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Servicios from "./pages/Servicios";
import Nosotros from "./pages/Nosotros";
import Noticias from "./pages/Noticias"; // 🔥 nuevo
import Contacto from "./pages/Contacto";
import NavbarComponent from "./components/NavbarComponent";
import Footer from "./components/Footer";
import ServicioDetalle from "./pages/ServicioDetalle";

export default function App() {
  return (
    <Router>
      <NavbarComponent />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/noticias" element={<Noticias />} /> {/* 🔥 */}
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/servicios/:id" element={<ServicioDetalle />} />
      </Routes>

      <Footer />
    </Router>
  );
}