import React, { useEffect } from "react";
import { connect } from "react-redux";
import { viewAnime } from "../../requests/animeRequest";
import { Row, Container, Col } from "react-bootstrap";
import "./index.scss";
const AnimeDetails = (props) => {
  useEffect(() => {
    props.viewAnime(props.match.params.id);
  }, []);
  const { anime } = props.anime;
  return (
    <div className="background">
      <Container>
        <Row>
          <Col>
            <Row>
              <Col>
                <h1>{anime.title}</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <h3>Description</h3>
                <h4>{anime.description}</h4>
              </Col>
            </Row>
            <Row>
              <Col>
                <h3>Duration</h3>
                <h4>{anime.duration} mins</h4>
              </Col>
            </Row>
            <Row>
              <Col>
                <h3>Type</h3>
                <h4>{anime.type} </h4>
              </Col>
            </Row>
            <Row>
              <Col>
                <h3>Rated</h3>
                <h4>{anime.rated} </h4>
              </Col>
            </Row>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = ({ anime }) => ({ anime });
export default connect(mapStateToProps, { viewAnime })(AnimeDetails);
