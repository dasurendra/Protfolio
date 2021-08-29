import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assests/img/logo.png";

export const Navbarr = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <img src={logo} width="100px" alt="myphoto" />
          <Nav className="ms-auto fs-2 fw-bold">
            <Nav.Link href="#home" className="navbarHov">
              Home
            </Nav.Link>
            <Nav.Link href="#projects" className="navbarHov">
              Projects
            </Nav.Link>
            <Nav.Link href="skills" className="navbarHov">
              Skills
            </Nav.Link>
            <Nav.Link href="#about" className="navbarHov">
              About Me
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
