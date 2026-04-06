import { Container, Form, Button } from 'react-bootstrap';

export default function Contact() {
  return (
    <div className="section-dark py-5">
      <Container>
        <h2 className="title text-center mb-4">Contacto</h2>
        <Form>
          <Form.Control className="mb-3" placeholder="Nombre" />
          <Form.Control className="mb-3" placeholder="Email" />
          <Form.Control className="mb-3" as="textarea" placeholder="Mensaje" />
          <Button variant="light">Enviar</Button>
        </Form>
      </Container>
    </div>
  );
}
