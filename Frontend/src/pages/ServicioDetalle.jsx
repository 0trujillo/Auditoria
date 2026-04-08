import { useParams, useNavigate } from "react-router-dom";
import { Container, Button, Row, Col } from "react-bootstrap";
import { serviciosData } from "../data/serviciosData";
import "./ServicioDetalle.css";

export default function ServicioDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();

  const servicio = serviciosData.find((s) => s.id === id);

  if (!servicio) {
    return (
      <Container className="py-5 text-center">
        <h2>Servicio no encontrado</h2>
        <Button onClick={() => navigate("/servicios")}>
          Volver a servicios
        </Button>
      </Container>
    );
  }

  return (
    <div className="detalle-wrapper">
      {/* Banner */}
      <section className="detalle-banner">
        <Container>
          <Button
            variant="outline-light"
            className="mb-4 btn-volver"
            onClick={() => navigate("/servicios")}
          >
            ← Volver
          </Button>

          <h1 className="detalle-title">{servicio.titulo}</h1>
          <p className="detalle-sub">{servicio.subtitulo}</p>
        </Container>
      </section>

      {/* Contenido */}
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="detalle-content-card">
              <h3>Descripción del Servicio</h3>
              <p className="descripcion-text">
                {servicio.descripcion}
              </p>

              <h4 className="mt-5">¿Qué incluye?</h4>
              <ul className="detalle-list">
                {servicio.detalles.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <div className="detalle-cta mt-5 p-4 text-center">
                <h5>¿Necesitas este servicio?</h5>
                <Button
                  className="btn-privara-primary"
                  onClick={() => navigate("/contacto")}
                >
                  Contactar un Consultor
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}