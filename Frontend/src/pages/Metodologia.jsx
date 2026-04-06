import { Container, Row, Col } from "react-bootstrap";
import "./Metodologia.css";

export default function Metodologia() {
  return (
    <div className="met-wrapper">
      <Container className="py-5 text-center">
        <h1 className="met-title mb-5">Metodología</h1>

        <Row className="g-4">
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