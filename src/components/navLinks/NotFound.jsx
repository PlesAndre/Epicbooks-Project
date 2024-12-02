import React from "react";

// Importo gli stili di react-bootstrap
import { Alert, Container } from "react-bootstrap";

export default function NotFound() {
  return (
    <Container className="vh-100 d-flex justify-content-center align-items-center">
      <Alert className="w-50" variant="danger">
        <Alert.Heading>
          <strong>404.</strong> This is an error
        </Alert.Heading>
        <p>The following request was not found in the server</p>
        <hr />
        <p className="mb-0">Please try again or contact customer service</p>
      </Alert>
    </Container>
  );
}
