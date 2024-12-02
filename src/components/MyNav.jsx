// Importo React e i suoi hooks
import React, { useState, useContext, useEffect } from "react";

// Importo react-bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavDropdown } from "react-bootstrap";
import { ButtonGroup, Form, ToggleButton } from "react-bootstrap";

// Importo il useContext per il tema chiaro/scuro
import { themeContext } from "../contexts/context";

// Importo gli oggetti di React-Router
import { Link } from "react-router-dom";

export default function MyNav({
  category,
  toggleTheme,
  toggleCategory,
  setFilteredResults,
}) {
  const [checked, setChecked] = useState(false);

  const theme = useContext(themeContext);

  const [searchBook, setSearchBook] = useState("");

  useEffect(() => {
    if (searchBook === "") {
      setFilteredResults(category);
    } else {
      const filteredBooks = category.filter((book) =>
        book.title.toLowerCase().includes(searchBook.toLowerCase())
      );

      setFilteredResults(filteredBooks);
    }
  }, [searchBook, category]);

  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme={theme}>
      <Container>
        <Navbar.Brand href="#home">EPICBOOKS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="*">About</Nav.Link>
            <NavDropdown
              title="Categories"
              id="nav-dropdown"
              onSelect={toggleCategory}
            >
              <NavDropdown.Item eventKey="fantasy">Fantasy</NavDropdown.Item>
              <NavDropdown.Item eventKey="history">History</NavDropdown.Item>
              <NavDropdown.Item eventKey="horror">Horror</NavDropdown.Item>
              <NavDropdown.Item eventKey="romance">Romance</NavDropdown.Item>
              <NavDropdown.Item eventKey="StartCategory">
                Scifi
              </NavDropdown.Item>
            </NavDropdown>

            <ButtonGroup className="ms-3">
              <ToggleButton
                id="toggle-check"
                type="checkbox"
                variant="secondary"
                checked={checked}
                value="1"
                onChange={(e) => {
                  toggleTheme();
                  setChecked(e.currentTarget.checked);
                }}
              >
                {checked ? "🌚" : "🌞"}
              </ToggleButton>
            </ButtonGroup>
          </Nav>
          <Form
            className="w-25 text-center"
            value={searchBook}
            onChange={(e) => setSearchBook(e.target.value)}
          >
            <Form.Group className="my-2" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Cerca il tuo libro..." />
            </Form.Group>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
