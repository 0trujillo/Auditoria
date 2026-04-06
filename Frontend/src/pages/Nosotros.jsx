import { Container } from "react-bootstrap";
import "./Nosotros.css";

export default function Nosotros() {
  return (
    <div className="nos-wrapper">
      <Container className="py-5 text-center">
        <h1 className="nos-title">Nosotros</h1>

        <p className="nos-text">
          Somos una firma especializada en derecho digital, protección de datos,
          ciberseguridad y gobernanza tecnológica.  
          Combinamos experiencia jurídica con enfoque técnico para ofrecer
          soluciones de cumplimiento adaptadas a la normativa chilena.
        </p>
      </Container>
    </div>
  );
}