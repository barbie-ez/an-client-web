import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import cardimg from "../../images/the-promised-neverland.jpeg";
import "./index.scss";
export const Anime = () => {
  return (
    <Container fluid className="article">
      <Row>
        <Col xs={12} md={12}>
          <h2>Currently Airing</h2>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Card className="anime">
            <Card.Img variant="top" src={cardimg} />
            <Card.Body>
              <Card.Title>One Punch Man</Card.Title>
              <Card.Text>It only takes one punch</Card.Text>
              <Button variant="light">View</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Card className="anime">
            <Card.Img variant="top" src={cardimg} />
            <Card.Body>
              <Card.Title>One Punch Man</Card.Title>
              <Card.Text>It only takes one punch</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Card className="anime">
            <Card.Img variant="top" src={cardimg} />
            <Card.Body>
              <Card.Title>One Punch Man</Card.Title>
              <Card.Text>It only takes one punch</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
