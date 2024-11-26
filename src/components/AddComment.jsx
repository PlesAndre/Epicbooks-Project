import React from "react";
import { Col, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const POST_URL = "https://striveschool-api.herokuapp.com/api/comments/";

const API_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzFjYmUzOWJiZDU2YTAwMTVlZjRjZTciLCJpYXQiOjE3MzE5NjQ1MzgsImV4cCI6MTczMzE3NDEzOH0.tNVGo6PGSMXl75tWIkFOEQJOlFyMpXmgdwjq9AGO62w";

export default function AddComment({ asin, getComments }) {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("");

  function postComments() {
    fetch(POST_URL, {
      method: "POST",
      headers: {
        Authorization: API_TOKEN,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment: comment,
        rate: rating,
        elementId: asin,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore nell'invio del commento");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Inviato con successo", data);
      })
      .catch((error) => {
        console.error("Qualcosa è andato storto", error);
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    postComments(asin);
    getComments();
    setComment("");
    setRating("");
  }

  return (
    <Card className="mb-3">
      <Card.Header>Aggiungi un commento</Card.Header>
      <Form onSubmit={handleSubmit}>
        <Container>
          <Row>
            <Col sm={12} className="mt-3">
              <Form.Control
                type="text"
                placeholder="Lascia una recensione del libro"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </Col>

            <Col sm={8} className="mt-2">
              <Form.Control
                type="text"
                placeholder="Valutazione (1-5)"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </Col>

            <Col className="my-2 text-center">
              <Button type="submit">Aggiungi commento</Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </Card>
  );
}
