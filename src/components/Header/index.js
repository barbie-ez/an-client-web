import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "./index.scss";
export const Header = () => {
  return (
    <header>
      <Container fluid>
        <Row>
          <Col md={3} class="navbar-brand ">
            <nav>
              <h1>Anime Network</h1>
            </nav>
          </Col>
          <Col>
            <nav class="nav-right">
              <a href="#">Anime</a>
              <a href="#">Genre</a>
              <a href="#">Studio</a>
              <a href="#">Forum</a>
              <a href="#">Login</a>
              <a href="#">SignUp</a>
            </nav>
          </Col>
        </Row>
      </Container>
    </header>
  );
};
