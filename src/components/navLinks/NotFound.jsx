import React from "react";

// Importo gli stili di react-bootstrap
import { Alert, Container } from "react-bootstrap";

export default function NotFound() {
  return (
    <Container className="vh-100 d-flex justify-content-center align-items-center">
      <Alert className="w-50" variant="danger">
        <Alert.Heading>
          <strong>404.</strong> Questo è un errore
        </Alert.Heading>
        <p>La seguente richiesta non è stata trovata nel server</p>
        <hr />
        <p className="mb-0">
          La preghiamo di riprovare o contattare l'assistenza clienti
        </p>
      </Alert>
    </Container>
  );
}
