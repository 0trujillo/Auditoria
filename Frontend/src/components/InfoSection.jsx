export default function InfoSection() {
  return (
    <Container className="my-5 py-5 border-top border-secondary">
      <h2 className="text-center mb-5">Diciembre 2026: El Cambio de Reglas</h2>
      <Row className="g-4">
        {['Leves', 'Graves', 'Gravísimas'].map((tipo, idx) => (
          <Col md={4} key={idx}>
            <div className="text-center p-4 border rounded-3 bg-dark-subtle">
              <span className="badge bg-success mb-2">{tipo}</span>
              <h3>{5000 * (idx + 1)} UTM</h3>
              <p className="small opacity-75">Descripción de la infracción según normativa.</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}