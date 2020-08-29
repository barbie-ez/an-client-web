import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import cardimg from "../../images/the-promised-neverland.jpeg";
import "./index.scss";
import Link from "react-router-dom/Link";
export const Studio = ({ studios = [] }) => {
  console.log(studios);
  return (
    <Container fluid className="articlestudio">
      <Row>
        <Col xs={12} md={12}>
          <h2>Studio</h2>
        </Col>
        {studios.map((studio, index) => {
          return (
            <Col key={index} xs={12} md={6} lg={4}>
              <Card className="studio">
                <Card.Img variant="top" src={cardimg} />
                <Card.Body>
                  <Card.Title>{studio.name}</Card.Title>
                  <Link to={`/studio/${studio.id}`}>
                    <Button variant="dark">View More</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
