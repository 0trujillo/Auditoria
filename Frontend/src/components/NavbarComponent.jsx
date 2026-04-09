import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function NavbarComponent() {
  return (
    <Navbar expand="lg" className="privara-navbar" sticky="top">

      <Container>

        {/* LOGO */}
        <Navbar.Brand 
          as={Link} 
          to="/" 
          className="brand-wrapper d-flex align-items-center gap-2"
        >
          <img 
            src="/logo-temp.svg" 
            alt="Privara Logo" 
            className="nav-logo"
          />

          <div className="brand-text-wrapper">
            <span className="brand-main">PRIVARA</span>
            <span className="brand-sub">Consultores</span>
          </div>

        </Navbar.Brand>

        {/* BOTON MOBILE */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav" className="justify-content-end">

          <Nav className="nav-balanced">

            <Nav.Link
              as={Link}
              to="/"
              className="nav-link-custom"
            >
              Inicio
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/servicios"
              className="nav-link-custom"
            >
              Servicios
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/metodologia"
              className="nav-link-custom"
            >
              Metodología
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/nosotros"
              className="nav-link-custom"
            >
              Nosotros
            </Nav.Link>

            <Button
              as={Link}
              to="/contacto"
              className="btn-contacto"
            >
              Contacto
            </Button>

          </Nav>

        </Navbar.Collapse>

      </Container>

    </Navbar>
  );
}