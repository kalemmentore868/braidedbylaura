import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

const Header = () => {
  return (
    <Navbar
      expand="lg"
      bg="primary"
      variant="dark"
      sticky="top"
      className="p-3"
    >
      <Container>
        <Navbar.Brand href="/">Benign</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="justify-content-end">
            <Nav.Link className="n-link" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="n-link" href="/about">
              About
            </Nav.Link>
            <Nav.Link className="n-link" href="/services">
              Services
            </Nav.Link>
            <Nav.Link className="n-link" href="/careers">
              Careers
            </Nav.Link>
            <Nav.Link className="n-link" href="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
