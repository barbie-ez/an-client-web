import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "./index.scss";
export const Footer = () => {
  return (
    <footer>
      <Container fluid>
        <Row>
          <Col>
            <p>
              Copyright &copy; 2020 &bull; Numiinurd Enterprises &bull; 1,
              Imaginative Avenue &bull;
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
