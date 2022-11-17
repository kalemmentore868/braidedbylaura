import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

const Header = () => {
  return (
    <Navbar expand="lg" className="p-3">
      <Container>
        <Navbar.Brand href="/">Braided by Laura</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
            <Nav.Link className="n-link active" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="n-link" href="/about">
              About
            </Nav.Link>
            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle
                as={Nav.Link}
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Services
              </Dropdown.Toggle>
              <Dropdown.Menu
                className="dropdown-menu-right animate slideIn"
                aria-labelledby="navbarDropdown"
              >
                <Nav.Link href="#">Service 1</Nav.Link>
                <div class="dropdown-divider"></div>
                <Nav.Link href="#">Service 2</Nav.Link>
                <div class="dropdown-divider"></div>
                <Nav.Link href="#">Service 3</Nav.Link>
                <div class="dropdown-divider"></div>
                <Nav.Link href="#">Service 4</Nav.Link>
              </Dropdown.Menu>
            </Dropdown>

            <Nav.Link className="n-link" href="/contact">
              Contact
            </Nav.Link>
          </Nav>
          <Button size="sm" variant="dark" className="mx-3" href="#">
            Book Now
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
