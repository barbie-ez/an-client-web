import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import cardimg from "../../images/the-promised-neverland.jpeg";
import "./index.scss";
import Link from "react-router-dom/Link";
export const Genre = ({ genres = [] }) => {
  console.log(genres);
  return (
    <Container fluid className="articlegenre">
      <Row>
        <Col xs={12} md={12}>
          <h2>Genre</h2>
        </Col>
        {genres.map((genre, index) => {
          return (
            <Col key={index} xs={12} md={6} lg={4}>
              <Card className="genre">
                <Card.Img variant="top" src={cardimg} />
                <Card.Body>
                  <Card.Title>{genre.name}</Card.Title>
                  <Link to={`/genre/${genre.id}`}>
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
