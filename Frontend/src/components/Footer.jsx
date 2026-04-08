import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-privara">
      <Container>

        {/* CTA superior */}
        <div className="footer-cta">
          <h4>¿Necesitas asesoría en protección de datos?</h4>
          <Link to="/contacto" className="footer-cta-btn">
            Contáctanos
          </Link>
        </div>

        {/* Grid principal */}
        <div className="footer-grid">

          {/* Marca */}
          <div className="footer-col brand">
            <h5 className="footer-logo">
              Privara<span className="logo-thin">Consultores</span>
            </h5>

            <p className="footer-about">
              Ayudamos a empresas a cumplir normativas y adoptar inteligencia artificial de forma segura.
            </p>
          </div>

          {/* Servicios */}
          <div className="footer-col">
            <h6 className="footer-heading">Servicios</h6>
            <ul>
              <li><Link to="/servicios">Ver servicios</Link></li>
              <li><Link to="/metodologia">Metodología</Link></li>
              <li><Link to="/contacto">Solicitar asesoría</Link></li>
            </ul>
          </div>

          {/* Empresa */}
          <div className="footer-col">
            <h6 className="footer-heading">Empresa</h6>
            <ul>
              <li><Link to="/nosotros">Nosotros</Link></li>
              <li><Link to="/privacidad">Privacidad</Link></li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="footer-col">
            <h6 className="footer-heading">Contacto</h6>
            <ul className="footer-contact">
              <li>+56 9 8139 2664</li>
              <li>contacto@privara.cl</li>
              <li>Santiago, Chile</li>
            </ul>
          </div>

          {/* Redes */}
          <div className="footer-col">
            <h6 className="footer-heading">Redes</h6>
            <ul>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>

        </div>

        {/* Línea */}
        <div className="footer-divider"></div>

        {/* Bottom */}
        <div className="footer-bottom">
          <span>© 2026 Privara Consultores</span>
          <div className="footer-legal">
            <Link to="/privacidad">Privacidad</Link>
            <span>·</span>
            <Link to="#">Términos</Link>
          </div>
        </div>

      </Container>
    </footer>
  );
}