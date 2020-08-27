import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import cardimg from "../../images/the-promised-neverland.jpeg";
import "./index.scss";
import Link from "react-router-dom/Link";
export const Anime = ({ animes = [] }) => {
  //animes = Object.entries(animes);
  return (
    <Container fluid className="article">
      <Row>
        <Col xs={12} md={12}>
          <h2>Currently Airing</h2>
        </Col>
        {animes.map((anime, index) => {
          console.log(anime);
          return (
            <Col key={index} xs={12} md={6} lg={4}>
              <Card className="anime">
                <Card.Img variant="top" src={cardimg} />
                <Card.Body>
                  <Card.Title>{anime.title}</Card.Title>
                  <Card.Text>{anime.description}</Card.Text>
                  <Link to="#">
                    <Button variant="light">View More</Button>
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
