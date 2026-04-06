import { Container, Row, Col } from 'react-bootstrap';

export default function Services() {
  return (
    <div className="section-dark py-5">
      <Container>
        <h2 className="title text-center mb-5">Servicios</h2>
        <Row>
          <Col md={4}>
            <h5>Protección de datos personales</h5>
            <p>Diagnóstico de cumplimiento</p>
            <p>Implementación Ley 21.719</p>
            <p>DPO as a Service</p>
          </Col>
          <Col md={4}>
            <h5>Ciberseguridad</h5>
            <p>Ley marco de ciberseguridad</p>
            <p>Evaluación de riesgos</p>
            <p>CISO as a Service</p>
          </Col>
          <Col md={4}>
            <h5>Compliance</h5>
            <p>Modelos de gobernanza</p>
            <p>Mapas de riesgo</p>
            <p>Responsabilidad penal</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}