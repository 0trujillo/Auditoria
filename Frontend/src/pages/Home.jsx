import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">
      <section className="hero-privara">

        {/* BACKGROUND */}
        <div className="hero-bg" />
        <div className="hero-overlay" />

        <Container className="hero-content">
          <div className="hero-inner text-center">

            {/* TITULO */}
            <h1 className="hero-title-main">
              Protege el futuro <br />
              de tu <span className="highlight-text">empresa</span>
            </h1>

            {/* DESCRIPCIÓN */}
            <p className="hero-description">
              Cumplimiento normativo, inteligencia artificial y gestión de riesgos
              en un solo ecosistema. Adaptamos tu empresa a la nueva era digital.
            </p>

            {/* BOTONES */}
            <div className="hero-action-group">
              <Button
                className="btn-privara-primary"
                onClick={() => navigate("/contacto")}
              >
                Solicitar Consultor
              </Button>

              <Button
                className="btn-privara-outline"
                onClick={() => navigate("/servicios")}
              >
                Ver servicios
              </Button>
            </div>

          </div>
        </Container>
      </section>
    </div>
  );
}