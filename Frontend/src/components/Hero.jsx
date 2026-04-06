// Hero.jsx (Actualizado con contenido exacto)
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Hero = () => {
  return (
    // Usamos la clase hero-section definida en home.css
    <section className="hero-section text-center">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            {/* Título exacto de la imagen */}
            <h1 className="hero-title">
              Gobernanza y cumplimiento en entornos digitales
            </h1>
            
            {/* Texto descriptivo exacto de la imagen */}
            <p className="hero-lead mx-auto">
              Asesoramos a organizaciones en la gestión de riesgos legales y tecnológicos, mediante el diseño e implementación de estructuras de cumplimiento adaptadas a la normativa chilena y al uso de tecnologías como inteligencia artificial.
            </p>
            
            {/* Botón con la nueva clase btn-privara */}
            <Button className="btn-privara btn-lg mt-3">
              Agenda reunión
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;