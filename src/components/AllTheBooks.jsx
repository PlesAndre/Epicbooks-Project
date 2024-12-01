// Importo il componente
import SingleBook from "./SingleBook";

// Importo react-bootstrap
import { Container, Row } from "react-bootstrap";

export default function AllTheBooks({ filteredResults, theme }) {
  return (
    <Container data-bs-theme={theme}>
      <Row className="mt-5 g-4" sm={12} md={2} lg={3} xl={4}>
        {filteredResults.map((book, index) => (
          <SingleBook key={`${book.title}-${index}`} {...book} asin={book.asin}/>
        ))}
      </Row>
    </Container>
  );
}
