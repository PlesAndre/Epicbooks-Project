import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";

export default function SingleBook({ img, title, price, asin }) {
  // La card genera un bordo rosso quando clicco su di essa
  const [select, setSelected] = useState(false);

  function toggleSelect() {
    setSelected((setBorder) => !setBorder);
  }

  return (
    <Col sm={select ? 10 : 4}>
      <Container className="d-flex">
        <Row>
          <Col>
            <Card
              onClick={toggleSelect}
              style={{ border: select ? "2px solid red" : "", height: "33em" }}
            >
              <Card.Img className="card-img" variant="top" src={img} />
              <Card.Body>
                <Card.Title className="fs-6">{title}</Card.Title>
                <Card.Text className="text-center">
                  <strong>Price:</strong> {price}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col
            className={`${
              select ? "ms-2 border border-1 rounded recensioni " : "d-none"
            }`}
            sm={select ? 8 : 2}
          >
            <h2 className="fs-4 mt-2">Recensioni</h2>
            {select && <CommentArea asin={asin}/>}
          </Col>
        </Row>
      </Container>
    </Col>
  );
}
