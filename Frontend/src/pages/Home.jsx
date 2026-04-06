import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">
      <section className="hero-image">
      <img src="/team.png" alt="Equipo" />
    </section>

      {/* HERO */}
      <section className="hero-privara">
        <Container>
          <h2 className="hero-title">Privara Consultores</h2>

          <h1 className="hero-subtitle">
            Gobernanza de datos y cumplimiento en entornos digitales
          </h1>

          <p className="hero-text">
            Asesoramos a organizaciones en la gestión de riesgos legales y tecnológicos,
            mediante el diseño e implementación de estructuras de cumplimiento adaptadas
            a la normativa chilena y al uso de tecnologías como inteligencia artificial.
          </p>

          <div className="hero-buttons">

            {/* 🔥 BOTÓN 1 → SERVICIOS */}
            <Button
              variant="light"
              className="btn-hero"
              onClick={() => navigate("/servicios")}
            >
              Servicios
            </Button>

            {/* 🔥 BOTÓN 2 → AGENDA REUNIÓN */}
            <Button
              className="btn-hero-outline"
              onClick={() => navigate("/contacto")}
            >
              Agenda reunión
            </Button>

          </div>
        </Container>

        <div className="hero-lines" />
      </section>

    </div>
  );
}