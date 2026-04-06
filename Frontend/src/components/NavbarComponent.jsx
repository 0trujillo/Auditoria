import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function NavbarComponent() {
  return (
    <Navbar expand="lg" className="privara-navbar" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2">
          <img src="/logo-temp.svg" alt="Privara Logo" className="nav-logo" />
          <span className="brand-text">Privara</span>
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse className="justify-content-end">
          <Nav className="align-items-center gap-4 nav-balanced">
            <Nav.Link as={Link} to="/" className="nav-link-custom">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/servicios" className="nav-link-custom">Servicios</Nav.Link>
            <Nav.Link as={Link} to="/metodologia" className="nav-link-custom">Metodología</Nav.Link>
            <Nav.Link as={Link} to="/nosotros" className="nav-link-custom">Nosotros</Nav.Link>

            <Button as={Link} to="/contacto" className="btn-contacto">
              Contacto
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}