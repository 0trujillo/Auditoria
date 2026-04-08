import { Container, Form, Button, Row, Col } from "react-bootstrap";
import "./Contacto.css";

export default function Contacto() {
  return (
    <div className="contact-wrapper">
      <Container className="py-5">
        <h1 className="contact-title text-center">Contacto</h1>

        <p className="contact-sub text-center">
          Envíanos tu consulta y un consultor se pondrá en contacto contigo.
        </p>

        <Row className="justify-content-center mt-5">
          {/* Columna izquierda */}
          <Col lg={5} className="text-start">
            <div className="contact-info-box p-4">
              <h4 className="accent-text">Canales de Contacto</h4>
              <p><strong>Email:</strong> contacto@privara.cl</p>
              <p><strong>Dirección:</strong> Santiago, Chile</p>
            </div>
          </Col>

          {/* Columna derecha */}
          <Col lg={6}>
            <Form className="contact-form-glass">
              <Form.Control 
                className="mb-3" 
                placeholder="Nombre completo" 
              />

              <Form.Control 
                className="mb-3" 
                placeholder="Email" 
                type="email" 
              />

              <Form.Control 
                as="textarea" 
                rows={4} 
                className="mb-4" 
                placeholder="Mensaje" 
              />

              <Button className="btn-contact-submit w-100">
                Enviar mensaje
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}