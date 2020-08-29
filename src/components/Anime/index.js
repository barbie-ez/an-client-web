import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import cardimg from "../../images/the-promised-neverland.jpeg";
import "./index.scss";
import Link from "react-router-dom/Link";
import { imageConstants } from "../../constants/constants";
import { Image } from "react-bootstrap";
export const Anime = ({ animes = [], title }) => {
  //console.log("in the anime comp", animes);
  return (
    <Container fluid className="article">
      <Row>
        <Col xs={12} md={12}>
          <h2>{title}</h2>
        </Col>
        {animes.map((anime, index) => {
          const url = imageConstants.IMAGEURL + "/" + anime.animeIcon; // d2df107f-f53a-4973-875b-89241c180109_1028689.jpg";

          return (
            <Col key={index} xs={12} md={6} lg={4}>
              <Card className="anime">
                <Row>
                  <Col md={4} xs={4}>
                    <Card.Img variant="top" src={url} />
                  </Col>
                  <Col md={8} xs={8}>
                    <Card.Body>
                      <Card.Title>{anime.title}</Card.Title>
                      <Card.Text>{anime.description}</Card.Text>
                      <Link to={`/anime/${anime.id}`}>
                        <Button variant="dark more">View More</Button>
                      </Link>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
