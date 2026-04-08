import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">
      {/* Sección Hero Principal */}
      <section className="hero-privara">
        {/* Capas decorativas de fondo similares a la imagen 5 */}
        <div className="hero-gradient-overlay" />
        <div className="hero-lines" />

        <Container className="hero-content">
          <div className="text-center">
            {/* Tag superior discreto */}
            <span className="hero-tag">Privara Consultores</span>

            {/* Título con gradiente de luz */}
            <h1 className="hero-title-main">
              Gobernanza y cumplimiento <br />
              <span className="highlight-text">en entornos digitales</span>
            </h1>

            {/* Párrafo descriptivo con ancho controlado */}
            <p className="hero-description mx-auto">
              Asesoramos a organizaciones en la gestión de riesgos legales y tecnológicos, 
              mediante el diseño e implementación de estructuras de cumplimiento adaptadas 
              a la normativa chilena y al uso de tecnologías como inteligencia artificial.
            </p>

            {/* Botones estilo LegalDatos */}
            <div className="hero-action-group mt-4">
              <Button
                className="btn-privara-primary"
                onClick={() => navigate("/contacto")}
              >
                Solicitar Consultoría
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

      {/* Sección de imagen (si deseas mantener el banner de equipo) */}
      <section className="hero-team-banner">
        <img src="/team.png" alt="Equipo Privara" className="img-fluid" />
      </section>
    </div>
  );
}