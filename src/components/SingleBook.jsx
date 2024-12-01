import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

export default function SingleBook({ img, title, asin, price }) {
  return (
    <Col sm={3}>
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Img className="card-img" variant="top" src={img} />
              <Card.Body className="d-flex align-items-center">
                <Card.Title className="fs-6">{title}</Card.Title>
                <Button className="f-5">
                  <Link
                    to={`/book/${asin}`}
                    state={{ img, title, price }}
                    className="text-decoration-none btn btn-primary p-0"
                  >
                    Details
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Col>
  );
}
