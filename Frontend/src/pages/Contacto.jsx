import { Container, Form, Button } from "react-bootstrap";
import "./Contacto.css";

export default function Contacto() {
  return (
    <div className="contact-wrapper">
      <Container className="py-5 text-center">
        <h1 className="contact-title">Contacto</h1>

        <p className="contact-sub">
          Envíanos tu consulta y un consultor se pondrá en contacto contigo.
        </p>

        <Form className="contact-form">
          <Form.Control className="mb-3" placeholder="Nombre completo" />
          <Form.Control className="mb-3" placeholder="Email" type="email" />
          <Form.Control as="textarea" rows={4} className="mb-4" placeholder="Mensaje" />

          <Button className="btn-contact-submit w-100">Enviar mensaje</Button>
        </Form>
      </Container>
    </div>
  );
}