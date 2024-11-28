// Importo React e i suoi componenti
import React from "react";

// Importo react-bootstrap
import { Button, Card, Col, Container, Row } from "react-bootstrap";

// Importo il componente utilizzato

export default function SingleBook({ img, title, price }) {
  return (
    <Col sm={3}>
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Img className="card-img" variant="top" src={img} />
              <Card.Body className="d-flex align-items-center">
                <Card.Title className="fs-6">{title}</Card.Title>
                <Button className="f-5">Details</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Col>
  );
}
