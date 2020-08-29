import React, { useEffect } from "react";
import { viewGenreWithAnime } from "../../requests/genreRequest";
import { connect } from "react-redux";
import auth from "../../helper/auth";
import { Anime } from "../../components/Anime";
import { Container, Row, Col } from "react-bootstrap";
const GenreDetails = (props) => {
  useEffect(() => {
    if (auth.isloggedIn()) {
      props.viewGenreWithAnime(props.match.params.id);
    }
  }, [props.user]);

  let anime = props.genre.genre.animeGenres;

  anime =
    props.genre.genre.animeGenres !== undefined
      ? anime.map((item, index) => anime[index].anime)
      : [];

  return (
    <>
      <div className="background">
        <Container>
          <Row>
            <Col>
              <Anime animes={anime} title={props.genre.genre.name + " Anime"} />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

const mapStateToProps = ({ genre, user }) => ({ genre, ...user });
export default connect(mapStateToProps, { viewGenreWithAnime })(GenreDetails);
