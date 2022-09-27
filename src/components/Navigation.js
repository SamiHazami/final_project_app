import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">Home</Link>
          </Nav>
          <Nav className="me-auto">
            <Link to="/about">About</Link>
          </Nav>
          <Nav className="me-auto">
            <Link to="/contacts">Contacts</Link>
          </Nav>
          <Nav className="me-auto">
            <Link to="/news">News</Link>
          </Nav>          
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;