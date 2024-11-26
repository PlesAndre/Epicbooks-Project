import SingleBook from "./SingleBook";
import { Col, Container, Row } from "react-bootstrap";

export default function AllTheBooks({ bookList, theme }) {
  return (
    <Container data-bs-theme={theme}>
      <Row className="mt-5">
        <Col sm={9}>
          <Row className="g-4">
            {bookList.map((book, index) => (
              <SingleBook key={`${book.title}-${index}`} {...book} />
            ))}
          </Row>
        </Col>

        <Col sm={3}>Commenti</Col>
      </Row>
    </Container>
  );
}
