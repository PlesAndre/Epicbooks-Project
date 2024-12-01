// Importo React e i suoi componenti
import React from "react";

// Importo il componente utilizzato
import { Card, Col, Row } from "react-bootstrap";

export default function CommentList(props) {
  const { comment, author, rate } = props.comment;

  return (
    <Card className="mb-2 w-50">
      <Card.Header className="bg-dark-subtle fw-bold text-center">
        {author}
      </Card.Header>
      <Card.Body className="d-flex justify-content-center">
        <Row>
          <Col sm={9} className="border-end py-4">
            <Card.Text>{comment}</Card.Text>
          </Col>
          <Col sm={3}>
            <Card.Text className="fst-italic py-4">{rate}/5 ⭐️</Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
