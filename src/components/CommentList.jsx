import React from "react";
import { Card } from "react-bootstrap";

export default function CommentList(props) {
    const {comment, author, rate} = props.comment

  return (
    <Card className="mb-2">
      <Card.Header className="bg-dark-subtle fw-bold">{rate}/5 ⭐️</Card.Header>
      <Card.Body>
        <Card.Text className="fst-italic text-decoration-underline">{author}</Card.Text>
        <Card.Text>{comment}</Card.Text>
      </Card.Body>
    </Card>
  );
}
