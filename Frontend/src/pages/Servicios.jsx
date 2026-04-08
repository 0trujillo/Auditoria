import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { serviciosData } from "../data/serviciosData";
import "./Servicios.css";

export default function Servicios() {
  const navigate = useNavigate();

  return (
    <div className="serv-wrapper">
      <Container className="py-5">
        <h2 className="serv-main-title text-center mb-5">
          Nuestros Servicios
        </h2>

        <Row className="g-4 justify-content-center">
          {serviciosData.map((serv) => (
            <Col md={6} lg={4} key={serv.id}>
              <Card
                className="serv-card-pro"
                onClick={() => navigate(`/servicios/${serv.id}`)}
              >
                <div className="serv-img-container">
                  <Card.Img variant="top" src={serv.imagen} />
                </div>

                <Card.Body>
                  <Card.Title className="serv-card-title">
                    {serv.titulo}
                  </Card.Title>

                  <Card.Subtitle className="serv-card-sub mb-2">
                    {serv.subtitulo}
                  </Card.Subtitle>

                  <Card.Text className="serv-card-text">
                    {serv.descripcion}
                  </Card.Text>

                  <ul className="serv-list">
                    {serv.detalles.slice(0, 3).map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}