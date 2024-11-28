// Importo React e i suoi componenti
import React, { useState, useContext } from "react";

// Importo react-bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavDropdown } from "react-bootstrap";
import { ButtonGroup, Form, ToggleButton } from "react-bootstrap";

// Importo il useContext per il tema chiaro/scuro
import { themeContext } from "../contexts/context";

export default function MyNav({
  setCategory,
  category,
  toggleTheme,
  toggleCategory,
}) {
  function handleChange(event) {
    const searchBook = event.target.value.toLowerCase();
    const filteredResults = category.filter((book) =>
      book.title.toLowerCase().includes(searchBook)
    );
    setCategory(filteredResults);
  }

  const [checked, setChecked] = useState(false);
  const theme = useContext(themeContext);

  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme={theme}>
      <Container>
        <Navbar.Brand href="#home">EPICBOOKS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <NavDropdown
              title="Categories"
              id="nav-dropdown"
              onSelect={toggleCategory}
            >
              <NavDropdown.Item eventKey="fantasy">Fantasy</NavDropdown.Item>
              <NavDropdown.Item eventKey="history">History</NavDropdown.Item>
              <NavDropdown.Item eventKey="horror">Horror</NavDropdown.Item>
              <NavDropdown.Item eventKey="romance">Romance</NavDropdown.Item>
              <NavDropdown.Item eventKey="StartCategory">Scifi</NavDropdown.Item>
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
          <Form className="w-25 text-center" onChange={(e) => handleChange(e)}>
            <Form.Group className="my-2" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Cerca il tuo libro..." />
            </Form.Group>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
