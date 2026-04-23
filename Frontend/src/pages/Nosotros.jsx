import { Container, Row, Col } from "react-bootstrap";
import "./Nosotros.css";

export default function Nosotros() {
  return (
    <div className="nos-wrapper">
      <Container className="py-5 text-center">

        <h1 className="nos-title">Nosotros</h1>

        <p className="nos-text">
          Somos una firma especializada en derecho digital, protección de datos,
          ciberseguridad y gobernanza tecnológica.  
          Combinamos experiencia jurídica con enfoque técnico para ofrecer
          soluciones de cumplimiento adaptadas a la normativa chilena.
        </p>

        {/* 🔥 METODOLOGÍA DENTRO */}
        <h2 className="mt-5 mb-4">Nuestra Metodología</h2>

        <Row className="g-4 justify-content-center">
          <Col md={3}>
            <div className="met-box">Diagnóstico</div>
          </Col>

          <Col md={3}>
            <div className="met-box">Diseño</div>
          </Col>

          <Col md={3}>
            <div className="met-box">Implementación</div>
          </Col>

          <Col md={3}>
            <div className="met-box">Seguimiento</div>
          </Col>
        </Row>

      </Container>
    </div>
  );
}