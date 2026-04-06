import { Container, Row, Col, Card } from "react-bootstrap";
import "./Servicios.css";

export default function Servicios() {
  return (
    <div className="serv-wrapper">
      <Container className="py-5">
        <h1 className="serv-title text-center mb-5">Servicios</h1>

        <Row className="g-4">
          <Col md={4}>
            <Card className="serv-card">
              <Card.Body>
                <Card.Title>Protección de datos</Card.Title>
                <ul>
                  <li>Diagnóstico</li>
                  <li>Ley 21.719</li>
                  <li>Data Protection Officer (DPO)</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="serv-card">
              <Card.Body>
                <Card.Title>Ciberseguridad</Card.Title>
                <ul>
                  <li>Ley Marco</li>
                  <li>Gestión de riesgos</li>
                  <li>CISO as a Service</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="serv-card">
              <Card.Body>
                <Card.Title>Compliance</Card.Title>
                <ul>
                  <li>Gobernanza</li>
                  <li>Mapas de riesgo</li>
                  <li>Responsabilidad corporativa</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}