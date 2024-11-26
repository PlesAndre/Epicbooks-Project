import React, { useState, useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { ButtonGroup, Form, ToggleButton } from "react-bootstrap";
import { themeContext } from "../contexts/context";

export default function MyNav({ setBookList, bookData, toggleTheme }) {
  function handleChange(event) {
    const searchBook = event.target.value.toLowerCase();
    const filteredResults = bookData.filter((book) =>
      book.title.toLowerCase().includes(searchBook)
    );
    setBookList(filteredResults);
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
            <Nav.Link href="#">Browse</Nav.Link>

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
                {checked ? "Light" : "Dark"}
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
