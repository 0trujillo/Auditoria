import { Container, Row, Col } from 'react-bootstrap';

export default function Methodology() {
  return (
    <div className="section-dark py-5 text-center">
      <Container>
        <h2 className="title">Metodología</h2>
        <Row className="mt-4">
          <Col>1. Diagnóstico</Col>
          <Col>2. Diseño</Col>
          <Col>3. Implementación</Col>
          <Col>4. Seguimiento</Col>
        </Row>
      </Container>
    </div>
  );
}
