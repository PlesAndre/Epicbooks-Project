import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import CommentArea from "../CommentArea";

export default function BookDetails() {
  const { asin } = useParams(); // Recupera asin dalla URL
  const location = useLocation();

  // Recupera i dati passati tramite Link o mostra un messaggio se non disponibili
  const { img, title, price } = location.state || {};

  return (
    <Container className="vh-100 d-flex flex-wrap">
      <Row className="mt-3 d-flex align-items-center">
        <Col>
          <Card>
            <Card.Img
              src={img}
              className="img-fluid"
              style={{ width: "270px", height: "350px" }}
            />
          </Card>
        </Col>

        <Col sm={8}>
          <Row>
            <Col sm={10}>
              <h1 className="fs-3">{title}</h1>
            </Col>

            <Col sm={2} className="d-flex align-items-center">
              <p className="fs-4">{price}€</p>
            </Col>

            <Col sm={12} className="mt-4">
              <h5>Descrizione</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim
                augue, maximus ut sollicitudin vel, dictum ut urna. Aenean
                pretium vulputate velit nec iaculis. Nullam in finibus sem.
                Quisque iaculis lorem laoreet nisi aliquet tristique.
                Pellentesque eu porta diam, eget porttitor nibh. Integer gravida
                odio sit amet ipsum tempor, sit amet feugiat libero euismod.
                Curabitur vel laoreet tortor. In eleifend odio non justo
                efficitur, vel mollis nibh finibus. Nulla eget massa quis libero
                varius fermentum pharetra nec nisi. Morbi quis rutrum tellus, ac
                posuere dolor. Aliquam ultrices at nisi at pharetra.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="mt-3 w-100 d-flex justify-content-center">
        <Col sm={12}>
          <div className="comment-area-container">
            <CommentArea asin={asin} className="comment-area-container" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
