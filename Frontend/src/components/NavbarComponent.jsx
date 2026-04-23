import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Navbar.css";

export default function NavbarComponent() {

  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar expand="lg" className={`privara-navbar ${scrolled ? "scrolled" : ""}`}>
      <Container>

        {/* LOGO */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2">
          <img src="/Auditoria/LogoH (2).png" alt="Privara Logo" className="nav-logo" />

        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center">

            <Nav.Link as={Link} to="/" className={`nav-link-custom ${location.pathname === "/" ? "nav-link-active" : ""}`}>
              Inicio
            </Nav.Link>

            <Nav.Link as={Link} to="/servicios" className={`nav-link-custom ${location.pathname === "/servicios" ? "nav-link-active" : ""}`}>
              Servicios
            </Nav.Link>

            {/* 🔥 NUEVO */}
            <Nav.Link as={Link} to="/noticias" className={`nav-link-custom ${location.pathname === "/noticias" ? "nav-link-active" : ""}`}>
              Noticias
            </Nav.Link>

            <Nav.Link as={Link} to="/nosotros" className={`nav-link-custom ${location.pathname === "/nosotros" ? "nav-link-active" : ""}`}>
              Nosotros
            </Nav.Link>

            <Button as={Link} to="/contacto" className="btn-contacto">
              Contacto
            </Button>

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}