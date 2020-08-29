import React, { useEffect } from "react";
import { viewStudioWithAnime } from "../../requests/studioRequest";
import { connect } from "react-redux";
import auth from "../../helper/auth";
import { Container, Row, Col } from "react-bootstrap";
import { Anime } from "../../components/Anime";
const StudioDetails = (props) => {
  useEffect(() => {
    if (auth.isloggedIn()) {
      props.viewStudioWithAnime(props.match.params.id);
    }
  }, [props.user]);
  let anime = props.studio.studio.animes;

  //   anime =
  //     props.studio.studio.animes !== undefined
  //       ? anime.map((item, index) => anime[index].anime)
  //       : [];

  console.log("studio anime", props.studio.studio.animes);

  return (
    <>
      <div className="background">
        <Container>
          <Row>
            <Col>
              <Anime animes={anime} title={props.studio.studio.name} />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

const mapStateToProps = ({ studio, user }) => ({ studio, ...user });
export default connect(mapStateToProps, { viewStudioWithAnime })(StudioDetails);
